"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import CustomSelect from "@/app/components/CustomSelect";



const menuItems2 = [
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
    active: false,
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
    active: true,
  },
];

const financingapiconsole = () => {
  return (
    <>
      <div className="font-inter">
    
        <div className="mt-6">
          <div className="bg-gray-6200/50 inline-flex sm:w-auto w-full border border-solid border-grey5800 rounded-md px-1 py-0.75">
            <ul className="sm:flex grid grid-cols-2 items-center  sm:w-auto w-full">
              {menuItems2.map((item) => (
                <li key={item.name} className="sm:w-auto w-full">
                  <Link
                    href={item.href}
                    className={`inline-flex sm:w-auto w-full sm:justify-start justify-center items-center h-8 px-3 gap-1.5 font-inter font-normal text-sm leading-5 relative rounded ${item.active
                      ? "text-blue1700 bg-white shadow-4xl"
                      : "text-gray-5000"
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
        <div className="mt-6 border border-solid border-red2100/30 bg-red2100/2 rounded-lg shadow-4xl">
          <div className="p-5 border-b border-solid border-red2100/30">
            <h4 className="text-red2100 text-base font-semibold leading-6 flex items-center gap-2">
              <Image
                src="/images/warning.svg"
                width="16"
                height="16"
                alt=""
              />
              Emergency Controls
            </h4>
          </div>
          <div className="flex xl:flex-row flex-col xl:items-center xl:gap-0 gap-4 justify-between px-5 py-4">
            <div className="2xl:max-w-112.5 xl:max-w-100 max-w-fulll w-full">
              <h4 className="text-blue1700 font-medium text-sm leading-5 mb-1">Immediate Security Lockdown</h4>
              <p className="text-gray-5000 text-xs leading-4 font-normal">
                Instantly revoke all API keys and client secrets. This will disconnect all partner
                bank integrations and require manual re-activation.
              </p>
            </div>
            <ul className="flex sm:flex-row flex-col items-center gap-2">
              <li>
                <Link href={"#"} className="text-red2100 text-sm leading-5 font-medium gap-1.5 bg-gray-1500 rounded-md h-9 px-3 border border-solid border-red2100 inline-flex items-center justify-center">
                  <Image
                    src="/icons/lock-red.svg"
                    width="16"
                    height="16"
                    alt=""
                  />
                  Freeze New Connections
                </Link>
              </li>
              <li>
                <Link href={"#"} className="text-gray22 text-sm leading-5 font-medium gap-1.5 bg-royalBlue129 rounded-md h-9 px-3 border border-solid border-royalBlue129 shadow-72xl inline-flex items-center justify-center">
                  <Image
                    src="/icons/sheild-revoke-icon.svg"
                    width="16"
                    height="16"
                    alt=""
                  />
                  Revoke All Keys
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default financingapiconsole;
