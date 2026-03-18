"use client";

import { Fragment } from "react";
import Link from "next/link";
import { Dialog, Transition, Menu } from "@headlessui/react";
import {
  LayoutGrid,
  Clock,
  TrendingUp,
  CreditCard,
  RefreshCw,
  CalendarDays,
  Search,
  MoreHorizontal,
  Euro,
  ArrowUpRight,
  ArrowDownRight,
  CheckCircle2,
  XCircle,
  Sparkles,
  Building2,
  X,
} from "lucide-react";
import Studentreservationstable from "@/app/components/Studentreservationstable";
import { useHousingStore, type Listing, type KycStatus } from "@/app/store/zustand/Usehousingstore";
import Pagination from "@/app/components/common/Pagination";

const statCards = [
  {
    label: "Total Live Listings",
    value: "1,284",
    change: "+12.5%",
    positive: true,
    icon: LayoutGrid,
    iconBg: "bg-blue-3000/10",
    iconColor: "text-blue-3000",
  },
  {
    label: "Pending Moderations",
    value: "47",
    change: "-8",
    positive: false,
    icon: Clock,
    iconBg: "bg-gray-1600",
    iconColor: "text-yellow-1100",
  },
  {
    label: "Revenue from Boosted Ads",
    value: "€24,580",
    change: "+23.1%",
    positive: true,
    icon: TrendingUp,
    iconBg: "bg-gray-1600",
    iconColor: "text-green-1600",
  },
  {
    label: "Booking Fees Collected",
    value: "€89,701",
    change: "+18.2%",
    positive: true,
    icon: CreditCard,
    iconBg: "bg-gray-1600",
    iconColor: "text-skyblue23",
  },
];

const regions = [
  { country: "Germany",        flag: "/images/🇩🇪.png", listings: 450 },
  { country: "Canada",         flag: "/images/🇨🇦.png", listings: 312 },
  { country: "Pakistan",       flag: "/images/🇵🇰.png", listings: 189 },
  { country: "United Kingdom", flag: "/images/🇬🇧.png", listings: 523 },
  { country: "UAE",            flag: "/images/🇦🇪.png", listings: 275 },
];

const KycBadge = ({ status }: { status: string }) => {
  if (status === "Verified")
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-1600 text-green-1600 border border-green-1600/20">
        <CheckCircle2 size={14} />
        Verified
      </span>
    );
  if (status === "Pending")
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-1600 text-brown1300 border border-yellow-1100/20">
        <Clock className="text-brown1300" size={14} />
        Pending
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-1300/10 text-red-1300 border border-red-1300/20">
      <XCircle className="text-red-1300" size={14} />
      Rejected
    </span>
  );
};

const KycAction = ({ status, listingId }: { status: string; listingId: string }) => {
  const { openListingDetail } = useHousingStore();
  if (status === "Verified")
    return (
      <button
        onClick={() => openListingDetail(listingId)}
        className="text-sm text-gray-1200 hover:text-slate-800 font-medium transition-colors"
      >
        View
      </button>
    );
  if (status === "Pending")
    return (
      <Link
        href="/housing/property_verification"
        className="px-3 py-1.5 text-sm font-semibold bg-blue-3000 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Verify
      </Link>
    );
  return (
    <button className="px-3 py-1.5 text-sm font-semibold border border-gray-1000 bg-gray-1500 text-blue-1300 rounded-md hover:bg-slate-200 transition-colors">
      Review
    </button>
  );
};

const GlobeViz = () => (
  <div className="relative w-72 h-72 mx-auto">
    <div className="absolute inset-0 rounded-full bg-linear-to-br from-slate-100 via-slate-200 to-slate-300 shadow-inner border border-slate-200/80">
      <div className="absolute inset-2 rounded-full border border-slate-300/40" />
      <div className="absolute inset-6 rounded-full border border-slate-300/30" />
      {[
        { top: "28%", left: "38%", size: "w-3 h-3" },
        { top: "34%", left: "55%", size: "w-2.5 h-2.5" },
        { top: "52%", left: "44%", size: "w-2 h-2" },
        { top: "54%", left: "51%", size: "w-2 h-2" },
      ].map((dot, i) => (
        <div
          key={i}
          className={`absolute ${dot.size} rounded-full bg-blue-500/80 border-2 border-white shadow-md`}
          style={{ top: dot.top, left: dot.left }}
        >
          <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-60" />
        </div>
      ))}
      <div
        className="absolute inset-0 rounded-full opacity-10"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 18px, rgba(0,0,0,0.15) 18px, rgba(0,0,0,0.15) 19px), repeating-linear-gradient(90deg, transparent, transparent 18px, rgba(0,0,0,0.15) 18px, rgba(0,0,0,0.15) 19px)",
        }}
      />
    </div>
  </div>
);

function ListingDetailModal({ listing, onClose }: { listing: Listing; onClose: () => void }) {
  return (
    <Transition appear show as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        </Transition.Child>
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-95 translate-y-2"
            enterTo="opacity-100 scale-100 translate-y-0"
            leave="ease-in duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex items-start justify-between px-6 py-5 border-b border-gray-1000">
                <div>
                  <Dialog.Title className="text-blue-1300 text-base font-bold">{listing.name}</Dialog.Title>
                  <p className="text-gray-1200 text-sm mt-0.5">{listing.id} · {listing.location}</p>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-1600 transition-colors"
                >
                  <X size={16} className="text-gray-1200" />
                </button>
              </div>
              <div className="px-6 py-5 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Landlord", value: listing.landlord },
                    { label: "Price/mo", value: listing.price    },
                    { label: "City",     value: listing.city     },
                    { label: "Status",   value: listing.status   },
                  ].map(({ label, value }) => (
                    <div key={label} className="bg-gray-1600 rounded-xl px-4 py-3">
                      <p className="text-gray-1200 text-xs font-medium uppercase mb-1">{label}</p>
                      <p className="text-blue-1300 text-sm font-semibold">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between py-3 border-t border-gray-1000">
                  <p className="text-gray-1200 text-sm">KYC Status</p>
                  <KycBadge status={listing.kyc} />
                </div>
                {listing.campaign && (
                  <div className="flex items-center justify-between py-3 border-t border-gray-1000">
                    <p className="text-gray-1200 text-sm">Campaign</p>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-1600 text-blue-1300">
                      {listing.campaign}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex justify-end gap-3 px-6 py-4 bg-gray-1600 border-t border-gray-1000">
                {listing.kyc === "Pending" && (
                  <Link
                    href="/housing/property_verification"
                    className="px-4 h-9 inline-flex items-center text-sm font-semibold bg-blue-3000 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Verify KYC
                  </Link>
                )}
                <button
                  onClick={onClose}
                  className="px-4 h-9 text-sm font-semibold text-blue-1300 bg-white border border-gray-1000 rounded-lg hover:bg-gray-1600 transition-colors"
                >
                  Close
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

function ListingActionsMenu({ listing }: { listing: Listing }) {
  const { openListingDetail } = useHousingStore();
  return (
    <Menu as="div" className="relative inline-block">
      <Menu.Button className="text-gray-1200 hover:text-slate-700 ml-auto transition-colors">
        <MoreHorizontal size={16} />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-20 mt-1 w-44 bg-white border border-gray-1000 rounded-xl shadow-lg overflow-hidden focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => openListingDetail(listing.id)}
                className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 text-sm font-medium text-blue-1300 transition-colors ${active ? "bg-gray-1600" : ""}`}
              >
                View Details
              </button>
            )}
          </Menu.Item>
          {listing.kyc === "Pending" && (
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/housing/property_verification"
                  className={`flex items-center gap-2.5 px-3.5 py-2.5 text-sm font-medium text-blue-1300 transition-colors ${active ? "bg-gray-1600" : ""}`}
                >
                  Verify KYC
                </Link>
              )}
            </Menu.Item>
          )}
          <Menu.Item>
            {({ active }) => (
              <button
                className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 text-sm font-medium text-red-1300 transition-colors ${active ? "bg-gray-1600" : ""}`}
              >
                Deactivate
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

function HousingPage() {
  const {
    boostedListings,
    activeTab,
    setActiveTab,
    listingFilters,
    setListingFilter,
    resetListingFilters,
    listingPage,
    listingPageSize,
    paginatedListings,
    totalListingPages,
    filteredListings,
    selectedListing,
    closeListingDetail,
  } = useHousingStore();

  const rows  = paginatedListings();
  const total = filteredListings().length;
  const pages = totalListingPages();

  const hasFilters = Object.values(listingFilters).some(Boolean);

  return (
    <div className="bg-[url(/images/body-bg.png)] bg-cover p-4 bg-no-repeat xl:-mt-11.25 -mt-8.75 xl:-m-8 -m-4 font-inter">
      <div className='bg-white/80 border-b border-solid border-gray1600/50 backdrop-blur-md fixed w-full z-50 top-0 right-0  xl:pl-72 lg:pl-62.5'>
        <div className='flex items-center justify-between md:gap-0 gap-4 py-4.5 xl:px-8 px-4 bg-white border-b border-gray-1000'>
          <div className="flex-1 md:block hidden">
            <h1 className="xl:text-[22px] text-lg font-bold text-slate-900 tracking-tight">
              Housing Master Dashboard
            </h1>
            <p className="text-sm text-slate-500 mt-0.5">
              Manage listings, track bookings, and monitor campaign performance
            </p>
          </div>
          <div className="flex items-center  gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-500 bg-white  rounded-lg px-3 py-2">
              <CalendarDays size={13} className="text-slate-400" />
              Last updated: Today, 14:32 IST
            </div>
            <button className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg px-3 py-2 shadow-sm hover:bg-slate-50 transition-colors">
              <RefreshCw size={13} />
              Refresh
            </button>
          </div>
        </div>
      </div>

      <div className="xl:p-6 md:p-4 xl:mt-0 mt-5">
        {/* Stat Cards */}
        <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-4 mb-6">
          {statCards.map((card) => (
            <div
              key={card.label}
              className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <p className="text-xs font-medium text-slate-500 leading-tight">
                  {card.label}
                </p>
                <div
                  className={`w-11 h-11 rounded-lg flex items-center justify-center ${card.iconBg} shrink-0`}
                >
                  <card.icon size={17} className={card.iconColor} />
                </div>
              </div>
              <p className="text-2xl font-bold text-slate-900 mt-2 tracking-tight">
                {card.value}
              </p>
              <div className="flex items-center gap-1 mt-1">
                {card.positive ? (
                  <ArrowUpRight size={13} className="text-emerald-500" />
                ) : (
                  <ArrowDownRight size={13} className="text-red-500" />
                )}
                <span
                  className={`text-xs font-normal ${card.positive ? "text-green-1600" : "text-red-1300"}`}
                >
                  {card.change}
                </span>
                <span className="text-xs text-slate-400">vs last month</span>
              </div>
            </div>
          ))}
        </div>

        {/* Boosted Listings Ledger */}
        <div className="bg-white rounded-xl border border-amber-200 shadow-sm mb-6 overflow-hidden">
          <div className="flex items-center justify-between bg-gray-1600 px-5 py-4 flex-wrap gap-4 border-b border-amber-100 ">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-yellow-2800/10 flex items-center justify-center">
                <Sparkles size={15} className="text-yellow-2800" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">
                  Boosted Listings Ledger
                </p>
                <p className="text-xs text-slate-500">
                  Properties under paid campaigns • Priority visibility
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-yellow-2800/10 text-amber-700 border border-yellow-2900">
              {boostedListings.length} Active Campaigns
            </span>
          </div>
          <div className="overflow-auto">
            <table className="2xl:w-full w-341.25">
              <thead>
                <tr className="border-b border-gray-1000 bg-gray-1600">
                  {[
                    "Listing ID",
                    "Property Name",
                    "Landlord",
                    "Campaign Source",
                    "Budget Spent",
                    "Bookings",
                    "ROI",
                    "",
                  ].map((h) => (
                    <th
                      key={h}
                      className="text-left text-sm font-semibold text-blue-1300 uppercase tracking-wide px-4 py-3"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {boostedListings.map((row, i) => (
                  <tr
                    key={row.id}
                    className={`border-b border-slate-50 hover:bg-slate-50/70 bg-yellow-3000 transition-colors ${i === 0 ? "border-l-2 border-l-amber-400" : ""}`}
                  >
                    <td className="px-5 py-3.5">
                      <span className="mono text-sm font-normal text-gray-1200">
                        {row.id}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-sm font-semibold text-blue-1300">
                      {row.name}
                    </td>
                    <td className="px-5 py-3.5 text-sm text-blue-1300">
                      {row.landlord}
                    </td>
                    <td className="px-5 py-3.5">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${row.campaignColor}`}
                      >
                        {row.campaign}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-sm font-semibold text-blue-1300">
                      {row.budget}
                    </td>
                    <td className="px-5 py-3.5 text-sm font-semibold text-green-1600 ">
                      <div className="py-1 px-3 rounded-full bg-gray-1600 w-fit min-w-8.25">  {row.bookings}</div>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-green-1600">
                        <TrendingUp size={13} />
                        {row.roi}
                      </span>
                    </td>
                    <td className="px-5 py-3.5">
                      <button className="text-slate-400 hover:text-slate-700 transition-colors">
                        <MoreHorizontal size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("manage")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-semibold transition-all ${activeTab === "manage" ? "bg-white shadow-sm text-slate-800" : "text-slate-500 hover:text-slate-700"}`}
            >
              <Building2 size={16} />
              Manage Listings
            </button>
            <button
              onClick={() => setActiveTab("student")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-semibold transition-all ${activeTab === "student" ? "bg-white shadow-sm text-slate-800" : "text-slate-500 hover:text-slate-700"}`}
            >
              <Euro size={16} />
              Student Reservations
            </button>
          </div>
       
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-400">
                <Search size={12} />
                <input
                  className="bg-transparent outline-none text-slate-600 placeholder-slate-400 w-44"
                  placeholder="Search by Landlord, City, or Car..."
                  value={listingFilters.search}
                  onChange={(e) => setListingFilter("search", e.target.value)}
                />
              </div>
              <select
                value={listingFilters.city}
                onChange={(e) => setListingFilter("city", e.target.value)}
                className="h-9 px-3 text-sm text-slate-600 border border-slate-200 rounded-lg outline-none cursor-pointer bg-white"
              >
                <option value="">City: All</option>
                {["Berlin", "Munich", "Frankfurt", "Hamburg"].map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <select
                value={listingFilters.status}
                onChange={(e) => setListingFilter("status", e.target.value)}
                className="h-9 px-3 text-sm text-slate-600 border border-slate-200 rounded-lg outline-none cursor-pointer bg-white"
              >
                <option value="">Status: All</option>
                <option value="Verified">Verified</option>
                <option value="Pending">Pending</option>
                <option value="Rejected">Rejected</option>
              </select>
              <select
                value={listingFilters.campaign}
                onChange={(e) => setListingFilter("campaign", e.target.value)}
                className="h-9 px-3 text-sm text-slate-600 border border-slate-200 rounded-lg outline-none cursor-pointer bg-white"
              >
                <option value="">Campaign: All</option>
                <option value="Univ-Promotion">Univ-Promotion</option>
                <option value="Summer-Special">Summer-Special</option>
                <option value="Early-Bird">Early-Bird</option>
              </select>
              {hasFilters && (
                <button
                  onClick={resetListingFilters}
                  className="flex items-center gap-1.5 h-9 px-3 text-xs font-medium text-slate-500 hover:text-red-500 border border-slate-200 bg-slate-50 rounded-lg transition-colors"
                >
                  <X size={12} /> Clear
                </button>
              )}
            </div>
        </div>

        <div></div>

        {activeTab === "manage" && (
          <div className="w-full">

            <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-auto">
              <table className="2xl:w-full w-341.25">
                <thead>
                  <tr className="border-b border-gray-1000 bg-gray-1600">
                    {[
                      "Listing ID",
                      "Property Name",
                      "Location",
                      "Price/mo",
                      "Landlord",
                      "KYC Status",
                      "Action",
                      "",
                    ].map((h) => (
                      <th
                        key={h}
                        className="text-left text-sm font-semibold text-blue-1300 uppercase tracking-wide px-4 py-3"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="text-center py-12 text-gray-1200 text-sm">
                        No listings match your filters.
                      </td>
                    </tr>
                  ) : rows.map((row) => (
                    <tr
                      key={row.id}
                      className="border-b border-gray-1000 hover:bg-slate-50/70 transition-colors"
                    >
                      <td className="px-5 py-3.5">
                        <span className="mono text-sm font-medium text-gray-1200">
                          {row.id}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-sm font-semibold text-blue-1300">
                        {row.name}
                      </td>
                      <td className="px-5 py-3.5 text-sm text-gray-1200">
                        {row.location}
                      </td>
                      <td className="px-5 py-3.5 text-sm font-medium text-blue-1300">
                        {row.price}
                      </td>
                      <td className="px-5 py-3.5 text-sm text-blue-1300">
                        {row.landlord}
                      </td>
                      <td className="px-5 py-3.5">
                        <KycBadge status={row.kyc} />
                      </td>
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-2">
                          <KycAction status={row.kyc} listingId={row.id} />
                     
                        </div>
                      </td>
                      <td>
                          <ListingActionsMenu listing={row} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {pages > 1 && (
              <div className="mb-6">
                <Pagination
                  page={listingPage}
                  totalPages={pages}
                  totalItems={total}
                  pageSize={listingPageSize}
                  onPageChange={(p) => useHousingStore.getState().setListingPage(p)}
                />
              </div>
            )}

            <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="flex items-center justify-center py-10 px-8 border-r border-slate-100">
                  <GlobeViz />
                </div>
                <div className="p-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <p className="text-base font-bold text-slate-900">
                          Global Property Intelligence
                        </p>
                        <p className="text-xs text-slate-400 mt-0.5">
                          Top Performing Regions
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-700 border border-green-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        Live
                      </span>
                    </div>
                    <div className="space-y-3">
                      {regions.map((r) => {
                        const max = 523;
                        const pct = Math.round((r.listings / max) * 100);
                        return (
                          <div key={r.country} className="group">
                            <div className="flex items-center justify-between mb-1">
                              <div className="flex items-center gap-2">
                                <img src={r.flag} className="w-4" alt="" />
                                <span className="text-sm font-medium text-slate-700">
                                  {r.country}
                                </span>
                              </div>
                              <span className="text-sm font-normal text-black-2100 mono">
                                {r.listings} Listings
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <button className="mt-6 w-full flex items-center justify-center gap-2 py-2.5 bg-blue-1000 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors">
                    View All Global Property
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </div>

          </div>
        )}

        {activeTab === "student" && (
            <Studentreservationstable />
        )}
      </div>

      {selectedListing && (
        <ListingDetailModal listing={selectedListing} onClose={closeListingDetail} />
      )}
    </div>
  );
}

export default HousingPage;