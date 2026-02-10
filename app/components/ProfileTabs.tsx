"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type TabItem = {
     label: string;
     href: string;
     icon: string;
};

const tabs: TabItem[] = [
     {
          label: "Personal Info",
          href: "/Identification/PersonalInfo",
          icon: "/images/user-icon3.svg",
     },
     {
          label: "KYC & Documents",
          href: "/Identification/KycDocument",
          icon: "/images/document-icon.svg",
     },
     {
          label: "Linked Products",
          href: "/Identification/LinkedProducts",
          icon: "/images/wallet-icon3.svg",
     },
     {
          label: "Transactions",
          href: "/Identification/Transactions",
          icon: "/images/transaction-icon.svg",
     },
     {
          label: "Contracts",
          href: "/contracts",
          icon: "/images/document-icon.svg",
     },
     {
          label: "CRM Notes",
          href: "/crm-notes",
          icon: "/images/msg-icon2.svg",
     },
     {
          label: "Interview Reports",
          href: "/interview-reports",
          icon: "/images/pencile-icon.svg",
     },
     {
          label: "Appointments",
          href: "/appointments",
          icon: "/images/calendar-icon3.svg",
     },
];

const ProfileTabs = () => {
     const pathname = usePathname();

     return (
          <div className="overflow-x-auto bg-gray-1600 rounded-md mt-6 py-1 px-2">
               <div className="flex items-center w-307.5">
                    {tabs.map((tab) => {
                         const isActive = pathname === tab.href;

                         return (
                              <Link
                                   key={tab.href}
                                   href={tab.href}
                                   className={`font-segoe font-normal py-1.5 px-2 text-sm leading-5 flex items-center justify-center w-full gap-2 rounded
              ${isActive
                                             ? "bg-white text-black13 shadow-4xl"
                                             : "text-gray-1400"
                                        }
            `}
                              >
                                   <img src={tab.icon} alt="" />
                                   {tab.label}
                              </Link>
                         );
                    })}
               </div>
          </div>
     );
};

export default ProfileTabs;
