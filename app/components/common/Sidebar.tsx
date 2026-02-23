"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebarStore } from "@/app/store/zustand/useSidebarStore";

type MenuItem = {
  label: string;
  icon: string;
  href: string;
};

const CoreMenu: MenuItem[] = [
  {
    label: "Dashboard",
    icon: "/images/dashboard-icon.svg",
    href: "/"
  },
  {
    label: "Users / Students",
    icon: "/images/group-user.svg",
    href: "/users_students"
  },
];

const mainMenu: MenuItem[] = [
  {
    label: "AVI & Blocked",
    icon: "/images/avi-card.svg",
    href: "/avi_blocked"
  },
  {
    label: "Financing",
    icon: "/images/financing-card.svg",
    href: "/financing"
  },
  {
    label: "Financing Guaranty",
    icon: "/images/financing-card.svg",
    href: "/financing_guaranty"
  },
  {
    label: "Payments & Transfers",
    icon: "/images/transfers-icon.svg",
    href: "/payment_transfer",
  },
  {
    label: "Accounts & Balance",
    icon: "/images/avi-card.svg",
    href: "/accounts_balance"
  },
  {
    label: "FX Management",
    icon: "/images/fx-price-arrow.svg",
    href: "/fx_management",
  },
  {
    label: "Savings & Pots",
    icon: "/images/saving-bar.svg",
    href: "/saving_pot",
  },
];

const ServicesMenu: MenuItem[] = [
  {
    label: "Housing",
    icon: "/images/house-icon.svg",
    href: "/house"
  },
  {
    label: "Guarantees",
    icon: "/images/shield-dark.svg",
    href: "/guarantees"
  },
  {
    label: "Insurance",
    icon: "/images/insurance-paper.svg",
    href: "/insurance"
  },
  {
    label: "Marketplace",
    icon: "/images/marketplace-icon.svg",
    href: "/marketplace"
  },
  {
    label: "Cashback & Rewards",
    icon: "/images/gift-box-icon.svg",
    href: "/cashback_reward"
  },
];

const SafetyMenu: MenuItem[] = [
  {
    label: "Risk & Fraud",
    icon: "/images/risk-icon.svg",
    href: "/risk_fraud",
  },
  {
    label: "Crypto Wallet",
    icon: "/images/crypto-icon.svg",
    href: "/crypto_wallet",
  },
  {
    label: "Stud Safe",
    icon: "/images/stud-pin.svg",
    href: "/stud_safe",
  },
  {
    label: "Audit Logs",
    icon: "/images/audit-building.svg",
    href: "/audit_logs",
  },
];

const platformMenu: MenuItem[] = [
  {
    label: "Support Inbox",
    icon: "/images/index-sms.svg",
    href: "/support_inbox"
  },
  {
    label: "Partnerships",
    icon: "/images/partnership-icon.svg",
    href: "/partnerships",
  },
  {
    label: "Content CMS",
    icon: "/images/speaker.svg",
    href: "/content_cms",
  },
];

const GlobalMenu: MenuItem[] = [
  {
    label: "Finance Analytics",
    icon: "/images/fx-price-arrow.svg",
    href: "/finance_analytics"
  },
  {
    label: "User Activity Insights",
    icon: "/images/Insights-icon.svg",
    href: "/user_activity_insights",
  },
  {
    label: "Country-Based Stats",
    icon: "/images/country-stats-icon.svg",
    href: "/country_based_stats",
  },
  {
    label: "Sale view",
    icon: "/images/sale-view-icon.svg",
    href: "/sale_view",
  },
];

const SettingMenu: MenuItem[] = [
  {
    label: "Settings",
    icon: "/images/setting-icon.svg",
    href: "/setting"
  },
  {
    label: "Support",
    icon: "/images/support-info.svg",
    href: "/support",
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
        <li key={item.href} className="mb-1.5 last:mb-0">
          <Link
            href={item.href}
            className={`flex items-center rounded-xl font-inter text-sm font-medium leading-5 gap-3 py-3 px-4
      ${isActive
                ? "bg-linear-to-r from-gradient1 from-2% via-gradient2 via-34% to-gradient3 text-white shadow-47xl"
                : "text-gray-1400"}
    `}
          >
            <img
              src={item.icon}
              alt="no-img"
              className={`${isActive ? "filter brightness-0 invert" : ""}`}
            />
            <span>{item.label}</span>
          </Link>
        </li>
      );
    });
  };

  return (
    <div
      className={`fixed top-0 overflow-y-auto scrollbar-hide z-1000 h-screen lg:left-0 w-full xl:max-w-[288px] max-w-62.5 bg-white border-r border-gray-1000
        transition-all duration-500 ease-in-out
        ${isOpen ? "left-0" : "-left-full"}`}>
      {" "}
      <div className="xl:px-5 px-2">
        <div className="flex items-center justify-between pt-4.5 pb-4 pl-4 pr-2 border-b border-gray-1000">
          <Link href="/" onClick={close}>
            <img src="/images/logo.svg" alt="Logo" className="h-7.5" />
          </Link>
          <button className="cursor-pointer w-7 h-7 flex items-center justify-center hover:bg-gray-1600 rounded-lg" onClick={close}>
            <img src="/images/left-arrow.svg" alt="Close sidebar" />
          </button>
        </div>
      </div>
      <div className="py-10 xl:px-5 px-2">
        <div className="">
          <div className="flex items-center justify-between mb-1.5">
            <h6 className="font-segoe text-gray-1900 text-[11px] font-medium tracking-[0.55px] uppercase py-1.75 leading-4">
              Core Ops
            </h6>
            <Link href={"#"} className="w-3.5 h-3.5 flex items-center">
              <img src="/images/user-dropfown.svg" alt="" />
            </Link>
          </div>
          <ul className="space-y-0.5 mb-1">{renderMenu(CoreMenu)}</ul>
        </div>
        <div className="">
          <div className="flex items-center justify-between mb-1.5">
            <h6 className="font-segoe text-gray-1900 text-[11px] font-medium tracking-[0.55px] uppercase py-1.75 leading-4">
              FINANCIAL SERVICES
            </h6>
            <Link href={"#"} className="w-3.5 h-3.5 flex items-center">
              <img src="/images/user-dropfown.svg" alt="" />
            </Link>
          </div>
          <ul className="space-y-0.5 mb-1">{renderMenu(mainMenu)}</ul>
        </div>
        <div className="">
          <div className="flex items-center justify-between mb-1.5">
            <h6 className="font-segoe text-gray-1900 text-[11px] font-medium tracking-[0.55px] uppercase py-1.75 leading-4">
              Marketplace & SERVICES
            </h6>
            <Link href={"#"} className="w-3.5 h-3.5 flex items-center">
              <img src="/images/user-dropfown.svg" alt="" />
            </Link>
          </div>
          <ul className="space-y-0.5 mb-1">{renderMenu(ServicesMenu)}</ul>
        </div>
        <div className="">
          <div className="flex items-center justify-between mb-1.5">
            <h6 className="font-segoe text-gray-1900 text-[11px] font-medium tracking-[0.55px] uppercase py-1.75 leading-4">
              COMPLIANCE & SAFETY
            </h6>
            <Link href={"#"} className="w-3.5 h-3.5 flex items-center">
              <img src="/images/user-dropfown.svg" alt="" />
            </Link>
          </div>
          <ul className="space-y-0.5 mb-1">{renderMenu(SafetyMenu)}</ul>
        </div>
        <div className="">
          <div className="flex items-center justify-between mb-1.5">
            <h6 className="font-segoe text-gray-1900 text-[11px] font-medium tracking-[0.55px] uppercase py-1.75 leading-4">
              PLATFORM MANAGEMENT
            </h6>
            <Link href={"#"} className="w-3.5 h-3.5 flex items-center">
              <img src="/images/user-dropfown.svg" alt="" />
            </Link>
          </div>
          <ul className="space-y-0.5 mb-1">{renderMenu(platformMenu)}</ul>
        </div>
        <div className="">
          <div className="flex items-center justify-between mb-1.5">
            <h6 className="font-segoe text-gray-1900 text-[11px] font-medium tracking-[0.55px] uppercase py-1.75 leading-4">
              Global Insights
            </h6>
            <Link href={"#"} className="w-3.5 h-3.5 flex items-center">
              <img src="/images/user-dropfown.svg" alt="" />
            </Link>
          </div>
          <ul className="space-y-0.5 mb-1">{renderMenu(GlobalMenu)}</ul>
        </div>
      </div>
      <div className="px-5 pb-5">
        <ul className="space-y-0.5 mb-1">{renderMenu(SettingMenu)}</ul>
        <div className="border-t border-solid border-gray1700 pt-5 mt-3">
          <Link href={"#"} className="flex items-center gap-3">
            <span className="w-10 h-10 flek items-center justify-center">
              <img src="/images/admin-img.png" alt="" className="border border-solid border-gray1600 rounded-full shadow-4xl" />
            </span>
            <div className="flex-1 w-full">
              <h4 className="text-blue-1200 font-semibold font-inter text-sm leading-5">Admin</h4>
              <p className="text-gray-1400 font-inter font-normal text-xs leading-4">admin@studpay.com</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

