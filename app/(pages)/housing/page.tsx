"use client";
import FilterDropdown from "@/app/components/FilterDropdown"
import { useState } from "react";
import {
     LayoutGrid,
     Clock,
     TrendingUp,
     CreditCard,
     RefreshCw,
     CalendarDays,
     Filter,
     Search,
     MoreHorizontal,
     ChevronDown,
     Euro,
     ArrowUpRight,
     ArrowDownRight,
     CheckCircle2,
     XCircle,
     AlertCircle,
     Globe,
     Zap,
     Sparkles,
     Building2,
} from "lucide-react";

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

const boostedListings = [
     {
          id: "LST-001",
          name: "Modern Studio Apartment",
          landlord: "Hans Müller",
          campaign: "Univ-Promotion",
          campaignColor: "bg-gray-1600 text-blue-1300",
          budget: "€450",
          bookings: 12,
          roi: "267%",
     },
     {
          id: "LST-002",
          name: "Cozy 2BR near Campus",
          landlord: "Anna Schmidt",
          campaign: "Summer-Special",
          campaignColor: "bg-gray-1600 text-blue-1300",
          budget: "€320",
          bookings: 8,
          roi: "175%",
     },
     {
          id: "LST-003",
          name: "Luxury Penthouse Suite",
          landlord: "Michael Weber",
          campaign: "Early-Bird",
          campaignColor: "bg-gray-1600 text-blue-1300",
          budget: "€680",
          bookings: 15,
          roi: "221%",
     },
     {
          id: "LST-004",
          name: "Student Shared House",
          landlord: "Laura Fischer",
          campaign: "Univ-Promotion",
          campaignColor: "bg-gray-1600 text-blue-1300",
          budget: "€280",
          bookings: 9,
          roi: "321%",
     },
];

const listings = [
     {
          id: "LST-101",
          name: "Bright Studio near TU Berlin",
          location: "Berlin, Charlottenburg",
          price: "€650",
          landlord: "Thomas Braun",
          kyc: "Verified",
     },
     {
          id: "LST-102",
          name: "Spacious 3BR Family Apt",
          location: "Munich, Schwabing",
          price: "€1450",
          landlord: "Maria Hoffmann",
          kyc: "Pending",
     },
     {
          id: "LST-103",
          name: "Minimalist Loft Downtown",
          location: "Frankfurt, Sachsenhausen",
          price: "€890",
          landlord: "Klaus Richter",
          kyc: "Verified",
     },
     {
          id: "LST-104",
          name: "Garden View Apartment",
          location: "Hamburg, Eimsbüttel",
          price: "€780",
          landlord: "Sabine Wolf",
          kyc: "Rejected",
     },
     {
          id: "LST-105",
          name: "Modern 2BR with Balcony",
          location: "Berlin, Prenzlauer Berg",
          price: "€1100",
          landlord: "Peter Schneider",
          kyc: "Pending",
     },
     {
          id: "LST-106",
          name: "Cozy Attic Room",
          location: "Munich, Maxvorstadt",
          price: "€520",
          landlord: "Julia Becker",
          kyc: "Verified",
     },
];

const regions = [
     { country: "Germany", flag: "/images/🇩🇪.png", listings: 450 },
     { country: "Canada", flag: "/images/🇨🇦.png", listings: 312 },
     { country: "Pakistan", flag: "/images/🇵🇰.png", listings: 189 },
     { country: "United Kingdom", flag: "/images/🇬🇧.png", listings: 523 },
     { country: "UAE", flag: "/images/🇦🇪.png", listings: 275 },
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
               <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-1600 text-[#624004] border border-yellow-1100/20">
                    <Clock className="text-[#624004]" size={14} />
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

const KycAction = ({ status }: { status: string }) => {
     if (status === "Verified")
          return (
               <button className="text-sm text-gray-1200 hover:text-slate-800 font-medium transition-colors">
                    View
               </button>
          );
     if (status === "Pending")
          return (
               <button className="px-3 py-1.5 text-sm font-semibold bg-blue-3000 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Verify
               </button>
          );
     return (
          <button className="px-3 py-1.5 text-sm font-semibold border border-gray-1000 bg-gray-1500 text-blue-1300 rounded-md hover:bg-slate-200 transition-colors">
               Review
          </button>
     );
};

const GlobeViz = () => (
     <div className="relative w-72 h-72 mx-auto">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 shadow-inner border border-slate-200/80">
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
function page() {
     const [activeTab, setActiveTab] = useState<"manage" | "student">("manage");

     return (
          <div className="bg-[url(/images/body-bg.png)] bg-cover p-4 bg-no-repeat xl:mt-[-45px] mt-[-35px] xl:-m-8 -m-4 font-inter">
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
                    {/* Header */}


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
                                             className={`w-11 h-11 rounded-lg flex items-center justify-center ${card.iconBg} flex-shrink-0`}
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
                                   4 Active Campaigns
                              </span>
                         </div>
                         <div className="overflow-auto">
                              <table className="2xl:w-full w-[1365px]">
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
                                                       <div className="py-1 px-3 rounded-full bg-gray-1600 w-fit min-w-[33px]">  {row.bookings}</div>
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
                              <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-400">
                                   <Search size={12} />
                                   <input
                                        className="bg-transparent outline-none text-slate-600 placeholder-slate-400 w-44"
                                        placeholder="Search by Landlord, City, or Car..."
                                   />
                              </div>
                              {["City", "Status", "Campaign"].map((f) => (
                                   <FilterDropdown key={f} label={f} icon={f === "City"} />
                              ))}
                         </div>
                    </div>
                    {/* Listings Table */}
                    <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm mb-6 overflow-auto">

                         <table className="2xl:w-full w-[1365px]">
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
                                   {listings.map((row) => (
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
                                                       <KycAction status={row.kyc} />
                                                       <button className="text-gray-1200 hover:text-slate-700 ml-auto transition-colors">
                                                            <MoreHorizontal size={16} />
                                                       </button>
                                                  </div>
                                             </td>
                                        </tr>
                                   ))}
                              </tbody>
                         </table>
                    </div>

                    {/* Globe + Regions */}
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
          </div>
     )
}

export default page
