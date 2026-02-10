"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebarStore } from "@/app/store/zustand/useSidebarStore";

type MenuItem = {
  label: string;
  icon: string;
  href: string;
};

const mainMenu: MenuItem[] = [
  { label: "Dashboard", 
    icon: "/images/dashboard-icon.svg", 
    href: "/" 
  },
  { label: "Users / Students", 
    icon: "/images/user-icon.svg",
     href: "/users_students" 
    },
  { label: "KYC & Documents", 
    icon: "/images/kyc-icon.svg", 
    href: "/kyc_documents" 
  },
  {
    label: "Identification",
    icon: "/images/user-icon.svg",
    href: "/identification",
  },
  { label: "User Wallets", 
    icon: "/images/wallet-icon.svg", 
    href: "/user_wallets" },
  {
    label: "Blocked AVI Accounts",
    icon: "/images/shield-icon.svg",
    href: "/blocked_avi",
  },
  {
    label: "Transactions History",
    icon: "/images/timer-icon.svg",
    href: "/transactions_history",
  },
  {
    label: "Recharge & Withdraw Logs",
    icon: "/images/dashboard-icon.svg",
    href: "/recharge_withdraw_logs",
  },
  { label: "Crypto Transfers", 
    icon: "/images/btc-icon.svg", 
    href: "/crypto_transfers" },
  {
    label: "Monthly AVI Disburseme…",
    icon: "/images/dollar-icon.svg",
    href: "/monthly_avi_disbursement",
  },
  {
    label: "Refund Requests",
    icon: "/images/recycle-icon.svg",
    href: "/refund_requests",
  },
  {
    label: "Referrals & Rewards",
    icon: "/images/gift-icon.svg",
    href: "/referrals_rewards",
  },
  {
    label: "Cashback Management",
    icon: "/images/percentage-icon.svg",
    href: "/cashback_management",
  },
  {
    label: "Student Discounts & Offers",
    icon: "/images/percentage-icon.svg",
    href: "/student_discount_offers",
  },
  {
    label: "Housing & Insurance Part…",
    icon: "/images/home-icon.svg",
    href: "/housing_insurance_partners",
  },
  {
    label: "AVI Finance Guarantee",
    icon: "/images/shield-icon2.svg",
    href: "/avi_finance_guarantee",
  },
];

const analyticsMenu: MenuItem[] = [
  {
    label: "Finance Analytics",
    icon: "/images/trend-up.svg",
    href: "/finance_analytics",
  },
  {
    label: "User Activity Insights",
    icon: "/images/grapgh.svg",
    href: "/user_activity_insights",
  },
  {
    label: "Country-Based Stats",
    icon: "/images/globe.svg",
    href: "/country_based_statistics",
  },
  {
    label: "Banners / News Manage…",
    icon: "/images/image-icon.svg",
    href: "/banners_news",
  },
  {
    label: "FAQs / Help Articles",
    icon: "/images/question-mark-icon.svg",
    href: "/faqs_help",
  },
  {
    label: "Admin Settings / Roles",
    icon: "/images/setting-icon.svg",
    href: "/admin_settings",
  },
];

const salesMenu: MenuItem[] = [
  { label: "Sales View", icon: "/images/phone-icon.svg", href: "/sales" },
  {
    label: "Interview Report",
    icon: "/images/filetext-icon.svg",
    href: "/interview_report",
  },
  {
    label: "Marketing Campaigns",
    icon: "/images/megaphone-icon.svg",
    href: "/marketing_campaigs",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const { isOpen, close } = useSidebarStore();

  const renderMenu = (menu: MenuItem[]) => {
    return menu.map((item) => {
       const isActive =
      item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

      return (
        <li key={item.href}>
          <Link
            href={item.href}
            className={`flex items-center rounded-lg border-r-2  text-sm font-medium leading-5 gap-3 py-2.5 px-3
              ${isActive ? "bg-gray-1300 text-blue-1000 border-blue-1000" : "text-gray-1100 border-transparent"}
            `}>
            <img src={item.icon} alt="no-img" />
            <span >{item.label}</span>
          </Link>
        </li>
      );
    });
  };

  return (
    <div
      className={`fixed top-0 overflow-y-auto scrollbar-hide z-99 h-screen lg:left-0 w-full max-w-[256px] bg-white border-r border-gray-1000
        transition-all duration-500 ease-in-out
        ${isOpen ? "left-0" : "-left-full"}`}>
      {" "}
      <div className="flex items-center justify-between p-4 border-b border-gray-1000">
        <Link href="/" onClick={close}>
          <img src="/images/logo.svg" alt="Logo" />
        </Link>
        <button onClick={close}>
          <img src="/images/left-arrow.svg" alt="Close sidebar" />
        </button>
      </div>
      <div className="p-2">
        <ul className="space-y-0.5 mb-1">{renderMenu(mainMenu)}</ul>

        <h6 className="font-segoe text-gray-1200 text-xs font-normal leading-4">
          Analytics & reporting
        </h6>
        <ul className="space-y-0.5 mb-1">{renderMenu(analyticsMenu)}</ul>

        <h6 className="font-segoe text-gray-1200 text-xs font-normal leading-4">
          Sales & CRM
        </h6>
        <ul className="space-y-0.5 mb-1">{renderMenu(salesMenu)}</ul>
      </div>
    </div>
  );
};

export default Sidebar;
