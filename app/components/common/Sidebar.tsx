"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useSidebarStore } from "@/app/store/zustand/useSidebarStore";

type MenuItem = {
  label: string;
  icon: string;
  href: string;
};

const CoreMenu: MenuItem[] = [
  { label: "Dashboard", icon: "/images/dashboard-icon.svg", href: "/" },
  { label: "Users / Students", icon: "/images/group-user.svg", href: "/users_students" },
];

const mainMenu: MenuItem[] = [
  { label: "AVI & Blocked", icon: "/images/avi-card.svg", href: "/blocked_avi" },
  { label: "Financing", icon: "/images/financing-card.svg", href: "/global_financing" },
  { label: "Financing Guaranty", icon: "/images/financing-card.svg", href: "/financing_guaranty" },
  { label: "Payments & Transfers", icon: "/images/transfers-icon.svg", href: "/payment_transfer" },
  { label: "Accounts & Balance", icon: "/images/avi-card.svg", href: "/accounts_balance" },
  { label: "FX Management", icon: "/images/fx-price-arrow.svg", href: "/fx_management" },
  { label: "Savings & Pots", icon: "/images/saving-bar.svg", href: "/saving_pot" },
];

const ServicesMenu: MenuItem[] = [
  { label: "Housing", icon: "/images/house-icon.svg", href: "/housing" },
  { label: "Guarantees", icon: "/images/shield-dark.svg", href: "/guarantees" },
  { label: "Insurance", icon: "/images/insurance-paper.svg", href: "/insurance_hub" },
  { label: "Marketplace", icon: "/images/marketplace-icon.svg", href: "/marketplace" },
  { label: "Cashback & Rewards", icon: "/images/gift-box-icon.svg", href: "/cashback_rewards" },
];

const SafetyMenu: MenuItem[] = [
  { label: "Risk & Fraud", icon: "/images/risk-icon.svg", href: "/risk_fraud_command_center" },
  { label: "Crypto Wallet", icon: "/images/crypto-icon.svg", href: "/crupto_wallet" },
  { label: "Stud Safe", icon: "/images/stud-pin.svg", href: "/stud_safe" },
  { label: "Audit Logs", icon: "/images/audit-building.svg", href: "/audit_logs" },
];
const studsafeMenu: MenuItem[] = [
  { label: "Dashboard StudSafe", icon: "/images/dashboard-studSafe.svg", href: "/stud_safe_vault_manager" },
  { label: "Live Monitoring", icon: "/images/live-location.svg", href: "/live_monitoring" },
  { label: "Alerts & Incidents", icon: "/images/Alert-Incidents.svg", href: "/alerts_incidents" },
  { label: "Users & Contacts", icon: "/images/users-contacts.svg", href: "/users_contacts" },
  { label: "Inactivity Rules", icon: "/images/inactivity-rules.svg", href: "/inactivity_rules" },
  { label: "History & Positions", icon: "/images/history.svg", href: "/history_positions" },
];
const platformMenu: MenuItem[] = [
  { label: "Support Inbox", icon: "/images/index-sms.svg", href: "/support_inbox" },
  { label: "Partnerships", icon: "/images/partnership-icon.svg", href: "/partnerships" },
  { label: "Content CMS", icon: "/images/speaker.svg", href: "/content_cms" },
];



const GlobalMenu: MenuItem[] = [
  { label: "Finance Analytics", icon: "/images/fx-price-arrow.svg", href: "/finance_analytics" },
  { label: "User Activity Insights", icon: "/images/Insights-icon.svg", href: "/user_activity_insights" },
  { label: "Country-Based Stats", icon: "/images/country-stats-icon.svg", href: "/country_based_stats" },
  { label: "Sale view", icon: "/images/sale-view-icon.svg", href: "/sales_view" },
];

const SettingMenu: MenuItem[] = [
  { label: "Settings", icon: "/images/setting-icon.svg", href: "/platform_settings" },
  { label: "Support", icon: "/images/support-info.svg", href: "/support" },
];

type MenuSectionProps = {
  title: string;
  items: MenuItem[];
  collapsed: boolean; 
  renderMenu: (items: MenuItem[]) => React.ReactNode;
};

const MenuSection = ({ title, items, collapsed, renderMenu }: MenuSectionProps) => {
  const [open, setOpen] = useState(true);

  if (collapsed) {
    return (
      <div className="w-full mb-1">
        <div className="h-px bg-gray-1000 mx-2 my-2" />
        <ul className="space-y-0.5">{renderMenu(items)}</ul>
      </div>
    );
  }

  return (
    <div className="w-full mb-1">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-between w-full mb-1.5 group"
      >
        <h6 className="font-segoe text-gray-1900 text-[11px] font-medium tracking-[0.55px] uppercase py-1.75 leading-4">
          {title}
        </h6>
        <div
          className={`w-3.5 h-3.5 flex items-center transition-transform duration-200 ${
            open ? "rotate-0" : "-rotate-90"
          }`}
        >
          <img src="/images/user-dropfown.svg" alt="" />
        </div>
      </button>

      {/* Animated collapse */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-150 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-0.5">{renderMenu(items)}</ul>
      </div>
    </div>
  );
};

const Sidebar = () => {
  const pathname = usePathname();
  const { isOpen, close, collapsed, setCollapsed } = useSidebarStore();

  const renderMenu = (menu: MenuItem[]) => {
    return menu.map((item) => {
      const isActive =
        item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

      return (
        <li key={item.href} className="mb-1.5 last:mb-0">
          <Link
            href={item.href}
            title={collapsed ? item.label : undefined}
            className={`flex items-center rounded-xl font-inter text-sm font-medium leading-5 gap-3 py-3 px-4
              ${collapsed ? "justify-center px-2" : ""}
              ${
                isActive
                  ? "bg-linear-to-r from-gradient1 from-2% via-gradient2 via-34% to-gradient3 text-white shadow-47xl"
                  : "text-gray-1400"
              }
            `}
          >
            <img
              src={item.icon}
              alt={item.label}
              className={`shrink-0 ${isActive ? "filter brightness-0 invert" : ""}`}
            />
            {!collapsed && <span>{item.label}</span>}
          </Link>
        </li>
      );
    });
  };

  return (
    <div
      className={`fixed top-0 overflow-y-auto scrollbar-hide z-1000 h-screen lg:left-0 bg-white border-r border-gray-1000
        ${collapsed ? "w-18" : "xl:max-w-[288px] w-full max-w-62.5"}
        ${isOpen ? "left-0" : "-left-full"}`}
    >
      {/* Header */}
      <div className={`${collapsed ? "px-2" : "px-2"}`}>
        <div
          className={`flex items-center pt-4.5 pb-4 border-b border-gray-1000
            ${collapsed ? "justify-center px-2" : "justify-between pl-4 pr-2"}`}
        >
          {!collapsed && (
            <Link href="/" onClick={close}>
              <img src="/images/logo.svg" alt="Logo" className="h-7.5" />
            </Link>
          )}

          <button
            className="cursor-pointer w-7 h-7 flex items-center justify-center hover:bg-gray-1600 rounded-lg shrink-0"
            onClick={() => {
              setCollapsed();
              if (window.innerWidth < 1024) {
                close();
              }
            }}
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <img
              src="/images/left-arrow.svg"
              alt={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              className={`transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Menu body */}
      <div className={`py-10 ${collapsed ? "px-2" : "xl:px-5 px-2"}`}>
        <MenuSection title="Core Ops" items={CoreMenu} collapsed={collapsed} renderMenu={renderMenu} />
        <MenuSection title="Financial Services" items={mainMenu} collapsed={collapsed} renderMenu={renderMenu} />
        <MenuSection title="Marketplace & Services" items={ServicesMenu} collapsed={collapsed} renderMenu={renderMenu} />
        <MenuSection title="Compliance & Safety" items={SafetyMenu} collapsed={collapsed} renderMenu={renderMenu} />
        <MenuSection title="StudSafe" items={studsafeMenu} collapsed={collapsed} renderMenu={renderMenu} />
        <MenuSection title="Platform Management" items={platformMenu} collapsed={collapsed} renderMenu={renderMenu} />
        <MenuSection title="Global Insights" items={GlobalMenu} collapsed={collapsed} renderMenu={renderMenu} />
      </div>

      {/* Footer */}
      <div className={`pb-5 ${collapsed ? "px-2" : "px-5"}`}>
        <ul className="space-y-0.5 mb-1">{renderMenu(SettingMenu)}</ul>
        <div className="border-t border-solid border-gray1700 pt-5 mt-3">
          <Link
            href={"#"}
            className={`flex items-center gap-3 ${collapsed ? "justify-center" : ""}`}
            title={collapsed ? "Admin" : undefined}
          >
            <span className="w-10 h-10 shrink-0 flex items-center justify-center">
              <img
                src="/images/admin-img.png"
                alt=""
                className="border border-solid border-gray1600 rounded-full shadow-4xl w-10 h-10 object-cover"
              />
            </span>
            {!collapsed && (
              <div className="flex-1 w-full min-w-0">
                <h4 className="text-blue-1200 font-semibold font-inter text-sm leading-5 truncate">Admin</h4>
                <p className="text-gray-1400 font-inter font-normal text-xs leading-4 truncate">admin@studpay.com</p>
              </div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;