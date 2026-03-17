"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import ToggleSwitch from "@/app/components/ToggleSwitch";
import {
  useAccessControlStore,
  PERMISSION_KEYS,
  PERMISSION_LABELS,
  type AccessUser,
  type Permission,
} from "@/app/store/zustand/useAccessControlStore";


const menuItems = [
  {
    name: "API Keys",
    href: "/global_financing/financing_api_console",
    icon: "../../icons/api-key.svg",
    iconActive: "../../icons/api-key-active.svg",
    active: false,
  },
  {
    name: "Access Control",
    href: "/global_financing/financing_api_console/api_access_control",
    icon: "../../icons/access-icon.svg",
    iconActive: "../../icons/access-icon-active.svg",
    active: true,
  },
  {
    name: "Monitoring",
    href: "/global_financing/financing_api_console/monitoring",
    icon: "../../icons/monitoring-icon.svg",
    iconActive: "../../icons/monitoring-icon-active.svg",
    active: false,
  },
  {
    name: "Emergency",
    href: "/global_financing/financing_api_console/emergency",
    icon: "../../icons/Emergency-icon.svg",
    iconActive: "../../icons/Emergency-icon-active.svg",
    active: false,
  },
];


function UserRow({ user, isLast }: { user: AccessUser; isLast: boolean }) {
  const togglePermission = useAccessControlStore((s) => s.togglePermission);

  return (
    <div className={`sm:px-5 px-4 py-4 relative ${!isLast ? "border-b border-solid border-grey5800" : ""}`}>
      <div className="flex items-start gap-2">
        {/* Avatar */}
        <span className="text-xs leading-4 font-semibold uppercase text-blue1700 w-8.5 h-8.5 bg-lighrgrey36 rounded-full flex items-center justify-center border border-solid border-grey5800 flex-shrink-0">
          {user.initials}
        </span>

        <div className="flex-1 w-full min-w-0">
          {/* Name + role */}
          <div className="flex items-center gap-2">
            <h4 className="text-blue1700 text-base leading-5 font-medium">{user.name}</h4>
            <span className="text-blue1700 inline-flex items-center text-xs leading-4 font-semibold gap-1 border border-solid border-grey5800 rounded-full h-5.5 px-2.5">
              <Image src="/icons/officer-sheild.svg" width={10} height={10} alt="" />
              {user.role}
            </span>
          </div>

          {/* Meta */}
          <ul className="flex flex-wrap items-center gap-2 mt-1">
            <li className="text-gray-5000 text-xs leading-4 font-normal">{user.email}</li>
            <li className="text-gray-5000 text-xs leading-4 font-normal">·</li>
            <li className="text-gray-5000 text-xs leading-4 font-normal">{user.bank}</li>
            <li className="text-gray-5000 text-xs leading-4 font-normal">·</li>
            <li className="text-gray-5000 text-xs leading-4 font-normal">Last login: {user.lastLogin}</li>
          </ul>

          {/* Permission toggles */}
          <div className="mt-3 flex flex-wrap items-center gap-3">
            {PERMISSION_KEYS.map((key: Permission) => (
              <div
                key={key}
                className="bg-gray-6200/50 rounded-md border border-solid border-grey5800 py-1.5 pl-3 pr-4.25 inline-flex items-center gap-3.5"
              >
                <p className="text-blue1700 text-xs leading-4 font-normal">
                  {PERMISSION_LABELS[key]}
                </p>
                <ToggleSwitch
                  checked={user.permissions[key]}
                  onChange={() => togglePermission(user.id, key)}
                  className={user.permissions[key] ? "bg-royalBlue129" : "bg-grey5800"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Edit button */}
      <Link href="#" className="flex items-center justify-center w-8 h-8 absolute right-5 top-4">
        <Image src="/images/pencile-icon2.svg" width={16} height={16} alt="Edit" className="brightness-0" />
      </Link>
    </div>
  );
}


const AccessControlPage = () => {
  const users = useAccessControlStore((s) => s.users);

  return (
    <div className="font-inter">
      {/* Tab nav */}
      <div className="mt-6">
        <div className="bg-gray-6200/50 inline-flex sm:w-auto w-full border border-solid border-grey5800 rounded-md px-1 py-0.75">
          <ul className="sm:flex grid grid-cols-2 items-center sm:w-auto w-full">
            {menuItems.map((item) => (
              <li key={item.name} className="sm:w-auto w-full">
                <Link
                  href={item.href}
                  className={`inline-flex sm:w-auto w-full sm:justify-start justify-center items-center h-8 px-3 gap-1.5 font-inter font-normal text-sm leading-5 relative rounded ${
                    item.active ? "text-blue1700 bg-white shadow-4xl" : "text-gray-5000"
                  }`}
                >
                  <span className="flex items-center justify-center">
                    <Image
                      src={item.active ? item.iconActive : item.icon}
                      width={16}
                      height={16}
                      alt={item.name}
                    />
                  </span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* RBAC card */}
      <div className="bg-white border border-solid border-grey5800 mt-7 rounded-lg shadow-4xl">
        {/* Card header */}
        <div className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-4 justify-between border-b border-solid border-grey5800 px-5 py-4">
          <div className="flex items-center gap-2">
            <h4 className="text-blue1700 sm:text-base text-sm font-semibold leading-6 flex items-center gap-2">
              <Image src="/images/user-icon.svg" width={16} height={16} alt="" />
              Role-Based Access Control
            </h4>
            <span className="text-blue1700 text-xs font-bold leading-4 font-JetBrainsMono px-2.5 h-5.5 inline-flex items-center justify-center bg-gray-6200 border border-solid border-gray-6200 rounded-full">
              {users.length} users
            </span>
          </div>
          <Button
            onClick={() => {}}
            iconSrc="/images/plus-black.svg"
            label="Add Sub-Login"
            className="text-blue1700 text-sm leading-5 font-medium gap-1.5 h-9 px-3! bg-gray-1500 hover:bg-gray-1500/90 rounded-md border border-solid border-grey5800 m-0!"
          />
        </div>

        {/* User rows */}
        {users.map((user, i) => (
          <UserRow key={user.id} user={user} isLast={i === users.length - 1} />
        ))}
      </div>
    </div>
  );
};

export default AccessControlPage;