"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import ProgressBar from "@/app/components/ProgressBar";
import CustomSelect from "@/app/components/CustomSelect";
import {
  useUsersStudentsStore,
  type Student,
  type PaymentStatus,
  type PlanStatus,
} from "@/app/store/zustand/Usersstudentsstore";

const ALL_STUDENTS: Student[] = [
  {
    id: 1,
    userid: "USRQH3MQ",
    userinfo: { info: "AB", name: "Ahmed Butt", mail: "ahmed_butt69@gmail.com" },
    route: { arrowicon: "/icons/right-arrow.svg", pkimg: "/images/🇵🇰.png", ausimg: "/images/🇦🇺.png" },
    status: "Pending",
    risk: 88,
    onboardingPercent: 81,
    ltv: "£13,561",
    plan: "Premium",
    actions: "/icons/dots-icon.svg",
  },
  {
    id: 2,
    userid: "USRA0FD2",
    userinfo: { info: "AC", name: "Adnan Chaudhry", mail: "adnan.chaudhry59@gmail.com" },
    route: { arrowicon: "/icons/right-arrow.svg", pkimg: "/images/🇵🇰.png", ausimg: "/images/🇨🇦.png" },
    status: "Verified",
    risk: 43,
    onboardingPercent: 59,
    ltv: "£885",
    plan: "Premium",
    actions: "/icons/dots-icon.svg",
  },
  {
    id: 3,
    userid: "USR5VBAW",
    userinfo: { info: "AC", name: "Ali Chaudhry", mail: "ali_chaudhry53@yahoo.com" },
    route: { arrowicon: "/icons/right-arrow.svg", pkimg: "/images/🇧🇩.png", ausimg: "/images/🇬🇧.png" },
    status: "Rejected",
    risk: 40,
    onboardingPercent: 29,
    ltv: "£5,760",
    plan: "Free",
    actions: "/icons/dots-icon.svg",
  },
  {
    id: 4,
    userid: "USR8JIII",
    userinfo: { info: "HH", name: "Hamza Hussain", mail: "hamza_hussain54@gmail.com" },
    route: { arrowicon: "/icons/right-arrow.svg", pkimg: "/images/🇬🇭.png", ausimg: "/images/🇳🇱.png" },
    status: "Verified",
    risk: 41,
    onboardingPercent: 80,
    ltv: "£2,698",
    plan: "Free",
    actions: "/icons/dots-icon.svg",
  },
  {
    id: 5,
    userid: "USR8MO1Y",
    userinfo: { info: "IM", name: "Ibrahim Mirza", mail: "ibrahim_mirza39@gmail.com" },
    route: { arrowicon: "/icons/right-arrow.svg", pkimg: "/images/🇬🇭.png", ausimg: "/images/🇳🇿.png" },
    status: "Rejected",
    risk: 56,
    onboardingPercent: 84,
    ltv: "£1,454",
    plan: "Premium",
    actions: "/icons/dots-icon.svg",
  },
  {
    id: 6,
    userid: "USRU83FM",
    userinfo: { info: "HC", name: "Hamza Chaudhry", mail: "hamza.chaudhry70@icloud.com" },
    route: { arrowicon: "/icons/right-arrow.svg", pkimg: "/images/🇵🇰.png", ausimg: "/images/🇬🇧.png" },
    status: "Verified",
    risk: 43,
    onboardingPercent: 83,
    ltv: "£7,738",
    plan: "Free",
    actions: "/icons/dots-icon.svg",
  },
  {
    id: 7,
    userid: "USR4STLU",
    userinfo: { info: "AS", name: "Adnan Syed", mail: "adnansyed60@yahoo.com" },
    route: { arrowicon: "/icons/right-arrow.svg", pkimg: "/images/🇰🇪.png", ausimg: "/images/🇮🇪.png" },
    status: "Rejected",
    risk: 52,
    onboardingPercent: 82,
    ltv: "£9,122",
    plan: "Premium",
    actions: "/icons/dots-icon.svg",
  },
  {
    id: 8,
    userid: "USRVJ19P",
    userinfo: { info: "KA", name: "Khadija Ali", mail: "khadijaali55@gmail.com" },
    route: { arrowicon: "/icons/right-arrow.svg", pkimg: "/images/🇧🇩.png", ausimg: "/images/🇺🇸.png" },
    status: "Verified",
    risk: 35,
    onboardingPercent: 66,
    ltv: "£3,035",
    plan: "Free",
    actions: "/icons/dots-icon.svg",
  },
  {
    id: 9,
    userid: "USR3EAY4",
    userinfo: { info: "FA", name: "Fatima Aslam", mail: "fatima.aslam86@hotmail.com" },
    route: { arrowicon: "/icons/right-arrow.svg", pkimg: "/images/🇵🇰.png", ausimg: "/images/🇬🇧.png" },
    status: "Verified",
    risk: 21,
    onboardingPercent: 37,
    ltv: "£5,576",
    plan: "Free",
    actions: "/icons/dots-icon.svg",
  },
  {
    id: 10,
    userid: "USR7PKUW",
    userinfo: { info: "AA", name: "Amina Aslam", mail: "amina_aslam35@gmail.com" },
    route: { arrowicon: "/icons/right-arrow.svg", pkimg: "/images/🇳🇬.png", ausimg: "/images/🇩🇪.png" },
    status: "Verified",
    risk: 66,
    onboardingPercent: 74,
    ltv: "£9,277",
    plan: "Premium",
    actions: "/icons/dots-icon.svg",
  },
  
];

const statusConfig: Record<PaymentStatus, { classes: string }> = {
  Verified: { classes: "bg-lightgreen18 border-lightgreen17/20 text-lightgreen17" },
  Pending: { classes: "bg-lightgreen18 border-yellow-1100/20 text-yellow-1100" },
  Rejected: { classes: "bg-lightgreen18 border-red1600/20 text-red1600" },
};

const planConfig: Record<PlanStatus, { classes: string }> = {
  Premium: { classes: "bg-gray1700 border-blue1400/20 text-blue1400" },
  Free: { classes: "bg-gray1700 border-transparent text-gray-1900" },
};

const getRiskClass = (risk: number): string => {
  if (risk >= 80) return "bg-red1600 text-white";
  if (risk <= 30) return "bg-lightgreen17 text-white";
  return "bg-yellow-1100 text-black14";
};

const PAGE_SIZE_OPTIONS = [
  { label: "6", value: "6" },
  { label: "12", value: "12" },
  { label: "18", value: "18" },
];

interface ActionItem {
  label: string;
  iconPath: string;
  href?: string;
  onClick?: (id: number) => void;
  danger?: boolean;
  divider?: boolean;
}

const ACTION_ITEMS: ActionItem[] = [
  {
    label: "View Profile",
    iconPath:
      "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z",
    href: "/users_students", // dynamic route to user profile
  },
  {
    label: "Edit Details",
    iconPath:
      "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",
    href: "#",
  },
  {
    label: "View Transactions",
    iconPath:
      "M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z",
    href: "#",
  },
  {
    label: "Change Plan",
    iconPath:
      "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z",
    href: "#",
  },
  {
    label: "Flag as High Risk",
    iconPath: "M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z",
    href: "#",
    divider: true,
  },
  {
    label: "Suspend User",
    iconPath:
      "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z",
    danger: true,
    divider: true,
  },
  {
    label: "Delete User",
    iconPath:
      "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",
    danger: true,
  },
];

function RowActionsMenu({ studentId }: { studentId: number }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="p-1.5 rounded transition-colors hover:bg-blue-50 cursor-pointer focus:outline-none">
        <Image src="/icons/dots-icon.svg" width={16} height={16} alt="actions" />
      </MenuButton>

      <MenuItems
        anchor="bottom end"
        className="z-50 w-52 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black/5 focus:outline-none py-1.5"
      >
        {ACTION_ITEMS.map((action) => (
          <div key={action.label}>
            {action.divider && <div className="my-1.5 h-px bg-gray-100" />}
            <MenuItem>
              {({ focus }) => {
                const sharedClasses = `flex items-center gap-2.5 w-full px-3.5 py-2 text-xs font-inter font-normal transition-colors ${
                  action.danger ? "text-red-500" : "text-gray-700"
                } ${focus ? "bg-gray-50" : ""}`;

                const icon = (
                  <svg
                    viewBox="0 0 24 24"
                    width={13}
                    height={13}
                    fill="currentColor"
                    className="shrink-0 opacity-70"
                  >
                    <path d={action.iconPath} />
                  </svg>
                );

                return action.href ? (
                  <Link
                    href={
                      action.href === "/users_students"
                        ? `${action.href}/${studentId}`
                        : action.href
                    }
                    className={sharedClasses}
                  >
                    {icon}
                    {action.label}
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => action.onClick?.(studentId)}
                    className={`cursor-pointer ${sharedClasses}`}
                  >
                    {icon}
                    {action.label}
                  </button>
                );
              }}
            </MenuItem>
          </div>
        ))}
      </MenuItems>
    </Menu>
  );
}

export default function UserStudentTable() {
  const { filters, pageSize, setPageSize } = useUsersStudentsStore();
  const [checkedRows, setCheckedRows] = useState<Record<number, boolean>>({});
  const [currentPage, setCurrentPage] = useState(1);

  const filteredStudents = useMemo(() => {
    return ALL_STUDENTS.filter((s) => {
      if (filters.search) {
        const q = filters.search.toLowerCase();
        const matchesSearch =
          s.userinfo.name.toLowerCase().includes(q) ||
          s.userinfo.mail.toLowerCase().includes(q) ||
          s.userid.toLowerCase().includes(q);
        if (!matchesSearch) return false;
      }

      if (filters.status !== "All Status" && s.status !== filters.status) return false;
      if (filters.plan !== "All Plans" && s.plan !== filters.plan) return false;

      if (filters.score !== "All Scores") {
        if (filters.score === "High Score" && s.risk < 70) return false;
        if (filters.score === "Medium Score" && (s.risk < 40 || s.risk >= 70)) return false;
        if (filters.score === "Low Score" && s.risk >= 40) return false;
      }

      return true;
    });
  }, [filters]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const totalPages = Math.ceil(filteredStudents.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginated = filteredStudents.slice(startIndex, startIndex + pageSize);

  const allChecked = paginated.length > 0 && paginated.every((s) => checkedRows[s.id]);
  const someChecked = paginated.some((s) => checkedRows[s.id]) && !allChecked;

  const toggleAll = () => {
    if (allChecked) {
      setCheckedRows({});
    } else {
      const next: Record<number, boolean> = {};
      paginated.forEach((s) => (next[s.id] = true));
      setCheckedRows(next);
    }
  };

  const toggleRow = (id: number) =>
    setCheckedRows((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div>
      <p className="text-gray-1900 text-sm">
        {filteredStudents.length} user{filteredStudents.length !== 1 ? "s" : ""}
      </p>

      <div className="mt-6 bg-white border border-gray-3600 rounded-lg overflow-x-auto">
        <table className="xl:w-full w-275">
          <thead>
            <tr className="bg-gray1700 border-b border-gray1600">
              <th className="lg:p-4 p-2.5 text-left">
                <input
                  type="checkbox"
                  checked={allChecked}
                  ref={(el) => {
                    if (el) el.indeterminate = someChecked;
                  }}
                  onChange={toggleAll}
                  className="w-4 h-4 cursor-pointer bg-transparent border border-darkblue2 rounded"
                />
              </th>
              {["User ID", "User Info", "Route", "Status", "Risk", "Onboarding", "LTV", "Plan", ""].map(
                (col) => (
                  <th
                    key={col}
                    className="lg:p-4 p-2.5 text-left text-gray-1900 font-inter font-normal text-xs leading-4"
                  >
                    {col}
                  </th>
                )
              )}
            </tr>
          </thead>

          <tbody>
            {paginated.length === 0 ? (
              <tr>
                <td colSpan={10} className="text-center py-12 text-gray-1900 font-inter text-sm">
                  No users match the current filters.
                </td>
              </tr>
            ) : (
              paginated.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray1600 hover:bg-gray1700/50 transition last:border-b-0"
                >
                  <td className="lg:px-4 px-2.5 py-6">
                    <input
                      type="checkbox"
                      checked={!!checkedRows[item.id]}
                      onChange={() => toggleRow(item.id)}
                      className="w-4 h-4 bg-transparent cursor-pointer border border-darkblue2 rounded"
                    />
                  </td>

                  <td className="lg:px-4 px-2.5 py-6 font-inter text-gray-1900 font-normal text-[9.9px] leading-4">
                    {item.userid}
                  </td>

                  <td className="lg:px-4 px-2.5 py-6">
                    <div className="flex items-center gap-3">
                      <span className="text-darkblue2 font-inter text-xs leading-6 bg-darkblue2/10 rounded-full w-8 h-8 flex items-center justify-center">
                        {item.userinfo.info}
                      </span>
                      <div>
                        <span className="text-black-1600 font-inter font-normal text-sm leading-5 block">
                          {item.userinfo.name}
                        </span>
                        <span className="text-gray-1900 font-inter font-normal text-xs leading-4 block">
                          {item.userinfo.mail}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td className="lg:px-4 px-2.5 py-6">
                    <div className="flex items-center gap-1.5">
                      <Image src={item.route.pkimg} width={16} height={16} alt="origin" />
                      <Image src={item.route.arrowicon} width={16} height={16} alt="→" />
                      <Image src={item.route.ausimg} width={16} height={16} alt="destination" />
                    </div>
                  </td>

                  <td className="lg:px-4 px-2.5 py-6">
                    <span
                      className={`border border-solid inline-flex items-center rounded-full justify-center font-inter font-normal text-xs leading-4 px-2 h-5.5 ${statusConfig[item.status].classes}`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="lg:px-4 px-2.5 py-6">
                    <span
                      className={`font-inter font-bold text-xs leading-12 rounded-full w-8 h-8 flex items-center justify-center ${getRiskClass(item.risk)}`}
                    >
                      {item.risk}
                    </span>
                  </td>

                  <td className="lg:px-4 px-2.5 py-6">
                    <div className="flex items-center gap-2">
                      <ProgressBar
                        value={item.onboardingPercent}
                        barColor={item.onboardingPercent >= 50 ? "bg-yellow-1100" : "bg-gray-1900"}
                        className="flex-1 w-full"
                      />
                      <span className="w-6 flex items-center justify-center text-gray-1900 font-inter font-normal text-xs leading-4">
                        {item.onboardingPercent}%
                      </span>
                    </div>
                  </td>

                  <td className="lg:px-4 px-2.5 py-6 text-black-1600 font-inter font-normal text-sm leading-5">
                    {item.ltv}
                  </td>

                  <td className="lg:px-4 px-2.5 py-6">
                    <span
                      className={`inline-flex items-center border border-solid justify-center rounded-full h-5.5 px-2 text-xs font-normal leading-4 ${planConfig[item.plan].classes}`}
                    >
                      {item.plan}
                    </span>
                  </td>

                  <td className="lg:px-2 px-2.5 py-6">
                    <RowActionsMenu studentId={item.id} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <p className="text-gray-1900 font-inter font-normal text-sm leading-5">Showing</p>
          <div style={{ width: "70px", height: "32px" }}>
            <CustomSelect
              value={String(pageSize)}
              options={PAGE_SIZE_OPTIONS}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setCurrentPage(1);
              }}
            />
          </div>
          <span className="text-gray-1900 font-inter font-normal text-sm leading-5">
            of <strong className="font-bold">{filteredStudents.length}</strong> users
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="w-8 h-8 border group border-gray-3600 cursor-pointer transition hover:bg-darkblue2 bg-gray-1500 rounded-md flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <img src="/icons/double-arrow-prev-icon.svg" className="group-hover:invert group-hover:opacity-100 opacity-70" alt="" />
          </button>
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="w-8 h-8 border group border-gray-3600 cursor-pointer transition hover:bg-darkblue2 bg-gray-1500 rounded-md flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <img src="/icons/arrow-prev-icon.svg" className="group-hover:invert group-hover:opacity-100 opacity-70" alt="" />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 border rounded-md flex items-center justify-center text-sm font-inter font-normal transition-colors hover:bg-darkblue2 hover:text-white ${
                page === currentPage
                  ? "bg-darkblue2 text-white"
                  : "bg-gray-1500 text-gray-1900 border-gray-3600"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="w-8 h-8 border group border-gray-3600 cursor-pointer transition hover:bg-darkblue2 bg-gray-1500 rounded-md flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <img src="/icons/arrow-next-icon.svg" className="group-hover:invert group-hover:opacity-100 opacity-70" alt="" />
          </button>
          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="w-8 h-8 border group border-gray-3600 cursor-pointer transition hover:bg-darkblue2 bg-gray-1500 rounded-md flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <img src="/icons/double-arrow-next-icon.svg" className="group-hover:invert group-hover:opacity-100 opacity-70" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}