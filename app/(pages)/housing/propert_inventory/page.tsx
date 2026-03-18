"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "@/app/components/Modal";
import { Building2 } from "lucide-react";
type KycStatus = "Verified" | "Pending" | "Suspended";

interface Property {
  id: string;
  landlord: string;
  landlordCode: string;
  location: string;
  country: string;
  rent: string;
  propertyKyc: KycStatus;
  ownerKyc: KycStatus;
}
const VerifiedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
  >
    <g clipPath="url(#clip0_2429_12067)">
      <path
        d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
        stroke="#21C45D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 6L5.5 7L7.5 5"
        stroke="#21C45D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_2429_12067">
        <rect width="12" height="12" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const PendingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
  >
    <g clipPath="url(#clip0_2429_15749)">
      <path
        d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
        stroke="#F59F0A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 3V6L8 7"
        stroke="#F59F0A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_2429_15749">
        <rect width="12" height="12" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const SuspendedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
  >
    <g clipPath="url(#clip0_2429_23596)">
      <path
        d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
        stroke="#EF4343"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 4.5L4.5 7.5"
        stroke="#EF4343"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 4.5L7.5 7.5"
        stroke="#EF4343"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_2429_23596">
        <rect width="12" height="12" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const properties: Property[] = [
  {
    id: "PROP-1001",
    landlord: "Rajesh Kumar",
    landlordCode: "LL-001",
    location: "London",
    country: "UK",
    rent: "1,800 GBP",
    propertyKyc: "Verified",
    ownerKyc: "Verified",
  },
  {
    id: "PROP-1002",
    landlord: "Rajesh Kumar",
    landlordCode: "LL-001",
    location: "Mumbai",
    country: "India",
    rent: "45,000 INR",
    propertyKyc: "Pending",
    ownerKyc: "Verified",
  },
  {
    id: "PROP-1003",
    landlord: "Sarah Mitchell",
    landlordCode: "LL-002",
    location: "Sydney",
    country: "Australia",
    rent: "2,200 AUD",
    propertyKyc: "Verified",
    ownerKyc: "Verified",
  },
  {
    id: "PROP-1004",
    landlord: "Ahmed Al-Rashid",
    landlordCode: "LL-003",
    location: "Dubai",
    country: "UAE",
    rent: "8,500 AED",
    propertyKyc: "Suspended",
    ownerKyc: "Pending",
  },
  {
    id: "PROP-1005",
    landlord: "Rajesh Kumar",
    landlordCode: "LL-001",
    location: "Birmingham",
    country: "UK",
    rent: "1,200 GBP",
    propertyKyc: "Verified",
    ownerKyc: "Verified",
  },
  {
    id: "PROP-1006",
    landlord: "Sarah Mitchell",
    landlordCode: "LL-002",
    location: "Melbourne",
    country: "Australia",
    rent: "1,900 AUD",
    propertyKyc: "Pending",
    ownerKyc: "Verified",
  },
  {
    id: "PROP-1007",
    landlord: "Maria Garcia",
    landlordCode: "LL-004",
    location: "Barcelona",
    country: "Spain",
    rent: "1,400 EUR",
    propertyKyc: "Verified",
    ownerKyc: "Pending",
  },
  {
    id: "PROP-1008",
    landlord: "Ahmed Al-Rashid",
    landlordCode: "LL-003",
    location: "Doha",
    country: "Qatar",
    rent: "7,000 QAR",
    propertyKyc: "Pending",
    ownerKyc: "Suspended",
  },
];

const KycBadge = ({ status }: { status: KycStatus }) => {
  const styles: Record<KycStatus, string> = {
    Verified: "text-green-1500 bg-green-3900",
    Pending: "text-yellow-1100 bg-green-3900",
    Suspended: "text-red-1300 bg-red-2600",
  };
  const icons: Record<KycStatus, React.ReactNode> = {
    Verified: <VerifiedIcon />,
    Pending: <PendingIcon />,
    Suspended: <SuspendedIcon />,
  };
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${styles[status]}`}
    >
      <span>{icons[status]}</span>
      {status}
    </span>
  );
};

const StatCard = ({
  icon,
  value,
  label,
  delta,
  deltaPositive,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  delta: string;
  deltaPositive: boolean;
}) => (
  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col gap-3">
    <div className="flex items-center justify-between">
      <div className="w-9 h-9 rounded-md bg-blue-50 flex items-center justify-center text-blue-500">
        <span className="w-4.5 flex">{icon}</span>
      </div>
      <span
        className={`text-xs font-semibold ${deltaPositive ? "text-green-1500" : "text-green-1500"}`}
      >
        {delta}
      </span>
    </div>
    <div>
      <div className="text-2xl font-bold text-black-1400 tracking-tight">
        {value}
      </div>
      <div className="text-xs text-gray-2300 mt-0.5">{label}</div>
    </div>
  </div>
);

const BuildingIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const TrendIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

const AlertIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const SearchIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const PropertyIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#94a3b8"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 3v18M3 9h18" />
  </svg>
);

const DocIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const HistoryIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="1 4 1 10 7 10" />
    <path d="M3.51 15a9 9 0 1 0 .49-4.51" />
  </svg>
);

function CustomCheckbox({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer hidden"
      />
      <div
        className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
          checked ? "bg-blue-600 border-blue-600" : "border-gray-300 bg-white"
        }`}
      >
        {checked && (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path
              d="M1 4L3.5 6.5L9 1"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </label>
  );
}

export default function GlobalHousingCommandCenter() {
  const [isOpen, setIsOpen] = useState(false); /**** MODAL ***/
  const [isOpen2, setIsOpen2] = useState(false); /**** MODAL ***/
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [selectAll, setSelectAll] = useState(false);

  const filtered = properties.filter(
    (p) =>
      p.landlord.toLowerCase().includes(search.toLowerCase()) ||
      p.id.toLowerCase().includes(search.toLowerCase()),
  );

  const toggleAll = () => {
    if (selectAll) {
      setSelected(new Set());
      setSelectAll(false);
    } else {
      setSelected(new Set(filtered.map((p) => p.id)));
      setSelectAll(true);
    }
  };

  const toggleOne = (id: string) => {
    const next = new Set(selected);
    next.has(id) ? next.delete(id) : next.add(id);
    setSelected(next);
    setSelectAll(next.size === filtered.length);
  };

  return (
    <>
      <div className="bg-[url(/images/body-bg.png)] bg-cover p-4 bg-no-repeat xl:-mt-11.25 -mt-8.75 xl:-m-8 -m-4 font-inter">
        <div className="bg-white -mx-4 p-6">
          <div className="bg-white/80 border-b border-solid border-gray1600/50 backdrop-blur-md fixed w-full z-50 top-0 right-0  xl:pl-72 lg:pl-62.5">
            <div className="flex items-center justify-between md:gap-0 gap-4 py-4.5 xl:px-8 px-4 bg-white border-b border-gray-1000">
              <div className="flex-1 md:block hidden">
                <h1 className="xl:text-[22px] text-lg font-bold text-slate-900 tracking-tight">
                  Housing Master Dashboard
                </h1>
                <p className="text-sm text-slate-500 mt-0.5">
                  Manage listings, track bookings, and monitor campaign
                  performance
                </p>
              </div>
              <div className="flex items-center  gap-3">
                <div className="flex items-center gap-2 text-xs text-slate-500 bg-white  rounded-lg px-3 py-2">
                  Last sync: 2 min ago
                  <span className="w-2 h-2 rounded-full bg-green-1500 block"></span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              icon={<Building2 />}
              value="1,248"
              label="Total Properties"
              delta="+12%"
              deltaPositive={true}
            />
            <StatCard
              icon={<GlobeIcon />}
              value="18"
              label="Countries"
              delta="+2"
              deltaPositive={true}
            />
            <StatCard
              icon={<TrendIcon />}
              value="$2.4M"
              label="Monthly Revenue"
              delta="+8.3%"
              deltaPositive={true}
            />
            <StatCard
              icon={<AlertIcon />}
              value="34"
              label="Pending KYC"
              delta="-5"
              deltaPositive={false}
            />
          </div>

          <div className=" py-6 space-y-3">
            <h2 className="text-sm font-bold text-black-1400">
              Landlord 360° Search
            </h2>
            <div className="relative max-w-md">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <SearchIcon />
              </span>
              <input
                type="text"
                placeholder="Search landlord by name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 h-10 text-sm border border-gray-1000 rounded-lg bg-white placeholder-gray-2300 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition"
              />
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-1000 shadow-sm overflow-hidden">
            <div className="px-5 py-3.5 border-b border-gray-100 flex items-center gap-3">
              <span className="text-sm font-bold text-black-1400">
                Property Inventory
              </span>
              <span className="text-xs text-gray-2300 leading-4.5 bg-gray-1600 px-2 py-0.5 rounded-md">
                {filtered.length} listings
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-1000 bg-gray-7600">
                    <th className="w-10 px-4 py-3">
                      <label className="flex items-center cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={selectAll}
                          onChange={toggleAll}
                          className="hidden"
                        />

                        <div className="w-4 h-4 border border-royalBlue123 rounded flex items-center justify-center group-has-[:checked]:bg-royalBlue123 group-has-[:checked]:border-royalBlue123">
                          <span className="hidden group-has-[:checked]:block text-white text-xs">
                            ✓
                          </span>
                        </div>
                      </label>
                    </th>
                    {[
                      "Property ID",
                      "Thumbnail",
                      "Landlord",
                      "Location",
                      "Rent",
                      "Property KYC",
                      "Owner KYC",
                      "Actions",
                    ].map((h) => (
                      <th
                        key={h}
                        className="px-4 py-3 text-left text-xs font-normal text-gray-2300 uppercase tracking-wide whitespace-nowrap"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-1000 text-[13px]">
                  {filtered.map((p) => (
                    <tr
                      key={p.id}
                      className={`hover:bg-blue-50/40 transition-colors ${selected.has(p.id) ? "bg-blue-50/30" : ""}`}
                    >
                      <td className="px-4 py-3">
                        <label className="flex items-center cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={selected.has(p.id)}
                            onChange={() => toggleOne(p.id)}
                            className="peer hidden"
                          />

                          <div className="w-4 h-4 border border-royalBlue123 rounded flex items-center justify-center group-has-[:checked]:bg-royalBlue123 group-has-[:checked]:border-royalBlue123">
                            <span className="hidden group-has-[:checked]:block text-white text-xs">
                              ✓
                            </span>
                          </div>
                        </label>
                      </td>
                      <td className="px-4 py-3 font-medium text-black-1400 whitespace-nowrap">
                        {p.id}
                      </td>
                      <td className="px-4 py-3">
                        <div className="w-12 h-9 rounded-md bg-gray-1600 flex items-center justify-center">
                          <Building2 className="w-4 text-gray-2300" />
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="text-black-1400 font-normal">
                          {p.landlord}
                        </div>
                        <div className="text-xs text-gray-2300">
                          {p.landlordCode}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="text-black-1400">{p.location}</div>
                        <div className="text-xs text-gray-2300">
                          {p.country}
                        </div>
                      </td>
                      <td className="px-4 py-3 font-bold text-black-1400 whitespace-nowrap">
                        {p.rent}
                      </td>
                      <td className="px-4 py-3">
                        <KycBadge status={p.propertyKyc} />
                      </td>
                      <td className="px-4 py-3">
                        <KycBadge status={p.ownerKyc} />
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setIsOpen(true)}
                            className="p-1.5 rounded-md text-gray-2300 hover:text-blue-500 hover:bg-blue-50 transition-colors"
                          >
                            <DocIcon />
                          </button>
                          <button
                            onClick={() => setIsOpen2(true)}
                            className="p-1.5 rounded-md text-gray-2300 hover:text-blue-500 hover:bg-blue-50 transition-colors"
                          >
                            <HistoryIcon />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filtered.length === 0 && (
                    <tr>
                      <td
                        colSpan={9}
                        className="px-4 py-10 text-center text-gray-400 text-sm"
                      >
                        No properties found matching your search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/****** Activity Log Modal *******/}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        panelClassName="max-w-[512px] border-0 rounded-lg! bg-white relative"
      >
        <div className="bg-blue-1000 rounded-t-lg flex items-center justify-between px-6 py-4">
          <h4 className="text-white font-inter font-bold text-[15.6px] leading-6 tracking-[-0.4px] flex items-center gap-2">
            {" "}
            <Image
              src="/icons/file-board.svg"
              width={16}
              height={16}
              alt=""
              className="brightness-10000"
            />{" "}
            Activity Log — PROP-1001
          </h4>
          <Link
            onClick={() => setIsOpen(false)}
            href={"#"}
            className="flex items-center justify-center rounded-full w-4 h-4 shadow-79xl  opacity-70"
          >
            <Image
              src="/images/cross-gray.svg"
              width={16}
              height={16}
              alt=""
              className="brightness-10000"
            />
          </Link>
        </div>
        <div className="p-6">
          <div className="flex items-start gap-3 border-b border-solid border-gray1600 py-4">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray1700">
              <Image
                src="/icons/gender-user-icon.svg"
                width={16}
                height={16}
                alt=""
                className="brightness-0"
              />
            </span>
            <div className="flex-1 flex items-start justify-between w-full">
              <div className="">
                <h4 className="text-black-5100 text-[13.9px] leading-5 font-bold">
                  Admin_John
                </h4>
                <p className="text-gray1900 text-[13.1px] leading-5 font-normal mt-1.5">
                  Updated Rent Amount
                </p>
                <ul className="flex items-center gap-2 mt-1.5">
                  <li className="text-gray-1400 text-[13.5px] leading-5 font-normal line-through">
                    £1,600
                  </li>
                  <li>
                    <Image
                      src="/icons/right-arrow-long.svg"
                      width={12}
                      height={12}
                      alt=""
                    />
                  </li>
                  <li className="text-black-5100 text-[12.5px] leading-5 font-bold">
                    £1,800
                  </li>
                </ul>
                <p className="text-grey-5000 text-[10.7px] leading-4 font-normal mt-1.5">
                  2025-02-08 14:30
                </p>
              </div>
              <span className="text-blue800 font-bold text-[11.4px] leading-4 inline-flex items-center justify-center  h-5.5 px-2.5 bg-blue800/10 border border-solid border-blue800/20 rounded-full">
                update
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3 border-b border-solid border-gray1600 py-4">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray1700">
              <Image
                src="/icons/camera.svg"
                width={16}
                height={16}
                alt=""
                className="brightness-0"
              />
            </span>
            <div className="flex-1 flex items-start justify-between w-full">
              <div className="">
                <h4 className="text-black-5100 text-[13.9px] leading-5 font-bold">
                  Admin_Sarah
                </h4>
                <p className="text-gray1900 text-[13.1px] leading-5 font-normal mt-1.5">
                  Uploaded Photos
                </p>
                <ul className="flex items-center gap-2 mt-1.5">
                  <li className="text-gray-1400 text-[13.5px] leading-5 font-normal line-through">
                    3 photos
                  </li>
                  <li>
                    <Image
                      src="/icons/right-arrow-long.svg"
                      width={12}
                      height={12}
                      alt=""
                    />
                  </li>
                  <li className="text-black-5100 text-[12.5px] leading-5 font-bold">
                    5 photos
                  </li>
                </ul>
                <p className="text-grey-5000 text-[10.7px] leading-4 font-normal mt-1.5">
                  2025-02-05 09:00
                </p>
              </div>
              <span className="text-DeepViolet font-bold text-[11.4px] leading-4 inline-flex items-center justify-center  h-5.5 px-2.5 bg-DeepViolet/10 border border-solid border-DeepViolet/20 rounded-full">
                upload
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3 py-4">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray1700">
              <Image
                src="/icons/sheild-check.svg"
                width={16}
                height={16}
                alt=""
                className="brightness-0"
              />
            </span>
            <div className="flex-1 flex items-start justify-between w-full">
              <div className="">
                <h4 className="text-black-5100 text-[13.9px] leading-5 font-bold">
                  System
                </h4>
                <p className="text-gray1900 text-[13.1px] leading-5 font-normal mt-1.5">
                  Verified Property KYCs
                </p>
                <ul className="flex items-center gap-2 mt-1.5">
                  <li className="text-gray-1400 text-[13.5px] leading-5 font-normal line-through">
                    Pending
                  </li>
                  <li>
                    <Image
                      src="/icons/right-arrow-long.svg"
                      width={12}
                      height={12}
                      alt=""
                    />
                  </li>
                  <li className="text-black-5100 text-[12.5px] leading-5 font-bold">
                    Verified
                  </li>
                </ul>
                <p className="text-grey-5000 text-[10.7px] leading-4 font-normal mt-1.5">
                  2025-01-28 12:00
                </p>
              </div>
              <span className="text-green-1800 font-bold text-[11.4px] leading-4 inline-flex items-center justify-center  h-5.5 px-2.5 bg-green-1800/10 border border-solid border-green-1800/20 rounded-full">
                system
              </span>
            </div>
          </div>
        </div>
      </Modal>
      {/****** Document Verification Modal *******/}
      <Modal
        isOpen={isOpen2}
        onClose={() => setIsOpen2(false)}
        panelClassName="max-w-[512px] border-0 rounded-lg! bg-white relative"
      >
        <div className="bg-blue-1000 rounded-t-lg flex items-center justify-between px-6 py-4">
          <h4 className="text-white font-inter font-bold text-[15.6px] leading-6 tracking-[-0.4px] flex items-center gap-2">
            {" "}
            <Image
              src="/images/file-icon2.svg"
              width={16}
              height={16}
              alt=""
              className="brightness-10000"
            />{" "}
            Document Verification
          </h4>
          <Link
            onClick={() => setIsOpen2(false)}
            href={"#"}
            className="flex items-center justify-center rounded-full w-4 h-4 shadow-79xl  opacity-70"
          >
            <Image
              src="/images/cross-gray.svg"
              width={16}
              height={16}
              alt=""
              className="brightness-10000"
            />
          </Link>
        </div>
        <div className="border-b border-solid border-gray1600 pt-8 pb-6 px-6">
          <div className="flex items-center gap-1.5">
            <h4 className="text-black-5100 text-sm leading-5 font-medium">
              PROP-1001
            </h4>
            <p className="text-green-2800 text-sm leading-4 font-normal flex items-center gap-1">
              <Image
                src="/icons/location-icon.svg"
                width={12}
                height={12}
                alt=""
              />
              London, UK
            </p>
          </div>
          <div className="flex items-center gap-4 mt-1">
            <p className="text-gray-1400 text-sm leading-5 font-normal flex items-center gap-1">
              <Image src="/icons/user-gray.svg" width={14} height={14} alt="" />
              Rajesh Kumar
            </p>
            <p className="text-gray-1400 text-sm leading-4 font-normal flex items-center gap-1">
              <Image src="/icons/tiket.svg" width={14} height={14} alt="" />
              1,800 GBP/mo
            </p>
          </div>
        </div>
        <div className="p-6">
          <h4 className="text-green-2800 mb-6 text-xs leading-4 font-medium tracking-[0.6px] uppercase">
            Ownership Documents
          </h4>
          <div className="flex items-start gap-3 border-b border-solid border-gray1600 py-3">
            <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-lightred1300">
              <Image src="/icons/file-red.svg" width={16} height={16} alt="" />
            </span>
            <div className="flex-1 w-full">
              <h4 className="text-black-5100 text-sm leading-5 font-normal">
                Ownership Certificate.pdf
              </h4>
              <p className="text-green-2800 text-xs leading-4 font-normal">
                2.4 MB · Uploaded 2024-11-15
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 border-b border-solid border-gray1600 py-3">
            <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-lightred1300">
              <Image src="/icons/file-red.svg" width={16} height={16} alt="" />
            </span>
            <div className="flex-1 w-full">
              <h4 className="text-black-5100 text-sm leading-5 font-normal">
                Property Tax Receipt.pdf
              </h4>
              <p className="text-green-2800 text-xs leading-4 font-normal">
                1.1 MB · Uploaded 2024-12-01
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 py-3">
            <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-lightred1300">
              <Image src="/icons/file-red.svg" width={16} height={16} alt="" />
            </span>
            <div className="flex-1 w-full">
              <h4 className="text-black-5100 text-sm leading-5 font-normal">
                Land Registry Extract.pdf
              </h4>
              <p className="text-green-2800 text-xs leading-4 font-normal">
                3.8 MB · Uploaded 2025-01-20
              </p>
            </div>
          </div>
        </div>
        <div className="p-6 border-t border-solid border-gray1600">
          <ul className="grid sm:grid-cols-2 grid-cols-1 gap-4">
            <li>
              <Link
                href={"#"}
                className="flex items-center justify-center shadow-82xl text-black13 text-sm leading-5 font-normal gap-1.5 h-10 rounded-md border border-solid border-gray1600 hover:bg-gray1700"
              >
                <Image
                  src="/icons/refresh-icon2.svg"
                  width={16}
                  height={16}
                  alt=""
                />
                Request Re-upload
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="flex items-center justify-center text-white text-sm leading-5 font-normal gap-1.5 h-10 rounded-md border border-solid border-green-5000 bg-green-5000 hover:bg-green-1800 hover:border-green-1800"
              >
                <Image
                  src="/icons/check-dark.svg"
                  width={16}
                  height={16}
                  alt=""
                  className="brightness-10000"
                />
                Approve All
              </Link>
            </li>
          </ul>
        </div>
      </Modal>
    </>
  );
}
