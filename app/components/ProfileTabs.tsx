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
          href: "/identification/1",
          icon: "/images/user-icon3.svg",
     },
     {
          label: "KYC & Documents",
          href: "/identification/1/kyc_document",
          icon: "/images/document-icon.svg",
     },
     {
          label: "Linked Products",
          href: "/identification/1/linked_products",
          icon: "/images/wallet-icon3.svg",
     },
     {
          label: "Transactions",
          href: "/identification/1/transaction_summary",
          icon: "/images/transaction-icon.svg",
     },
     {
          label: "Contracts",
          href: "/identification/1/contract_signatures",
          icon: "/images/document-icon.svg",
     },
     {
          label: "CRM Notes",
          href: "/identification/1/crm_notes",
          icon: "/images/msg-icon2.svg",
     },
     {
          label: "Interview Reports",
          href: "/identification/1/interview_report",
          icon: "/images/pencile-icon.svg",
     },
     {
          label: "Appointments",
          href: "/identification/1/appointments",
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
                                   href={`${tab.href}`}
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
