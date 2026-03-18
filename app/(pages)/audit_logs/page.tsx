// app/audit_logs/page.tsx
'use client'
import TopBar from "@/app/components/common/TopBar";
import Link from "next/link";
import { RefreshCw, FileText, AlertTriangle, Activity, Database, Calendar, Search, Download, X } from "lucide-react";
import Image from "next/image";
import CustomSelect from "@/app/components/CustomSelect";
import StatsCard3 from "@/app/components/StatsCard3";
import ProgressBar from "@/app/components/ProgressBar";
import AuditTable from "@/app/components/AuditTable";
import { useAuditStore } from "@/app/store/zustand/useAuditStore";

const users = [
  { name: "Sarah Chen",      role: "Finance Manager",    time: "Now",    value: 47, status: "online"  },
  { name: "Ahmed Hassan",    role: "Security Lead",      time: "2m ago", value: 32, status: "away"    },
  { name: "Maria Rodriguez", role: "System Admin",       time: "15m ago",value: 28, status: "online"  },
  { name: "James Wilson",    role: "Compliance Officer", time: "5m ago", value: 19, status: "offline" },
  { name: "Priya Sharma",    role: "Operations",         time: "1h ago", value: 12, status: "online"  },
];

export default function AuditLogsPage() {
  const {
    filters,
    setSearch, setSeverity, setModule, setDate,
    resetFilters, filteredData, exportCSV
  } = useAuditStore();

  const total = filteredData().length;
  const hasActiveFilters = Object.values(filters).some(Boolean);

  return (
    <div>
      <div className="bg-[url(/images/body-bg.png)] bg-cover p-4 bg-no-repeat xl:-m-8 -m-4 font-inter">
        <TopBar />
        <div className="bg-gray-1500/60">

          <div className="w-full border-b border-gray-200 px-6 py-3 flex items-center md:flex-nowrap flex-wrap justify-between">
            <div className="flex items-start gap-3">
              <div className="shadow-17xl flex items-center justify-center bg-green-3700/10 rounded-lg w-9 h-9">
                <FileText className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h1 className="text-lg font-bold leading-7 text-black-2000">System Audit Logs</h1>
                <p className="text-xs leading-4 font-normal text-gray-6400">
                  Forensic Activity Tracker • Last sync: 2s ago
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-green-3700/10 text-green-3700 border border-green-3700/20 px-3 py-1.5 rounded-lg text-xs font-normal">
                <span className="w-2 h-2 bg-green-3700 rounded-full animate-pulse"></span>
                LIVE
              </div>
              <button
                onClick={resetFilters}
                className="flex items-center gap-2 border border-gray-1000 px-4 py-2 rounded-md text-xs bg-gray-1500 font-medium text-black-2000 hover:bg-gray-100 transition"
              >
                <RefreshCw className="w-4 h-4" /> Refresh
              </button>
            </div>
          </div>

          <div className="md:p-6 p-2">
            <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-4">
              <StatsCard3 title="TOTAL SYSTEM LOGS (24H)" value="2,847" change="+12% vs yesterday" changeType="positive" icon={<FileText size={18} />} innervalue="actions" iconVariant="green" backgroundImage="/images/bg-1.png" />
              <StatsCard3 title="FLAGGED ADMIN ACTIONS"   value="23"    change="-8% vs yesterday"  changeType="negative" icon={<AlertTriangle size={18} />} innervalue="critical" iconVariant="red" backgroundImage="/images/bg-2.png" />
              <StatsCard3 title="ACTIVE ADMIN SESSIONS"   value="8"     icon={<Activity size={18} />} innervalue="online"   iconVariant="green" backgroundImage="/images/bg-3.png" />
              <StatsCard3 title="DATABASE SYNC STATUS"    value="100%"  change="+8% uptime" changeType="positive" icon={<Database size={18} />} innervalue="healthy" iconVariant="green" backgroundImage="/images/bg-3.png" />
            </div>

            <div className="grid xl:grid-cols-12 my-6 gap-6">
              <div className="2xl:col-span-4 col-span-6 card-bg rounded-xl p-4 border border-gray-1000">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-sm font-bold leading-5 text-black-2000">Admin Activity Heatmap</h2>
                    <p className="text-[10px] leading-3.75 font-normal text-gray-6400">Real-time session monitoring</p>
                  </div>
                  <ul className="flex items-center gap-3">
                    <li className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full block bg-green-3700"></span><h6 className="text-[10px] font-normal leading-3.75 text-gray-6400">Online</h6></li>
                    <li className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full block bg-yellow-1500"></span><h6 className="text-[10px] font-normal leading-3.75 text-gray-6400">Away</h6></li>
                    <li className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full block bg-gray-6400"></span><h6 className="text-[10px] font-normal leading-3.75 text-gray-6400">Offline</h6></li>
                  </ul>
                </div>
                <div className="space-y-4">
                  {users.map((user, i) => (
                    <div key={i} className="flex items-center justify-between p-2 bg-gray-3700/30 rounded-lg">
                      <div className="flex gap-3">
                        <div className="relative">
                          <div className="h-9 w-9 rounded-full bg-green-3700/20 flex items-center justify-center text-xs font-semibold text-green-700">
                            {user.name.split(" ").map((n) => n[0]).join("")}
                          </div>
                          <span className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white ${
                            user.status === "online" ? "bg-green-3700" : user.status === "away" ? "bg-yellow-1500" : "bg-gray-6400"
                          }`} />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-black-2000">{user.name}</p>
                          <p className="text-[10px] text-gray-6400">{user.role}</p>
                        </div>
                      </div>
                      <div className="w-40 text-right flex items-center gap-3">
                        <p className="text-[10px] font-normal text-gray-6400 mb-1">{user.time}</p>
                        <ProgressBar value={user.value} className="h-1.5 w-full flex-1" barColor="bg-lightgreen17" bgColor="bg-gray-100" />
                        <p className="text-xs text-green-600 mt-1 font-medium">{user.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="2xl:col-span-8 col-span-6 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className="flex items-center flex-wrap gap-4 justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <img src="/images/filter-icon2.svg" alt="" />
                    <h2 className="text-sm font-bold leading-5 text-black-2000">Advanced Forensic Filters</h2>
                  </div>

                  <button onClick={exportCSV} className="flex cursor-pointer items-center gap-2 text-xs font-normal py-1.75 rounded-md px-3 bg-gray-1500 border border-gray-1000 text-black-2000 hover:text-gray-900">
                    <Download size={14} /> Export for Audit
                  </button>
                </div>

                <div className="flex items-center 2xl:flex-nowrap flex-wrap gap-3">
                  <div className="relative 2xl:w-[40%] md:w-[48%] w-full">
                    <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      value={filters.search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search by Admin ID, Transaction ID..."
                      className="w-full h-9 pl-9 pr-3 text-sm text-gray-6400 placeholder:text-gray-6400 border border-gray-1000 bg-gray-3700/50 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                    />
                  </div>

                  <div className="2xl:w-[20%] md:w-[48%] w-full">
                    <CustomSelect
                      value={filters.severity}
                      className="h-9 border border-gray-1000 bg-gray-3700/50"
                      onChange={(v) => setSeverity(v === "Severity Level" ? "" : v)}
                      options={[
                        { label: "Severity Level", value: "" },
                        { label: "CRIT", value: "CRIT" },
                        { label: "HIGH", value: "HIGH" },
                        { label: "MED",  value: "MED"  },
                        { label: "LOW",  value: "LOW"  },
                      ]}
                    />
                  </div>

                  <div className="2xl:w-[20%] md:w-[48%] w-full">
                    <CustomSelect
                      value={filters.module}
                      className="h-9 border border-gray-1000 bg-gray-3700/50"
                      onChange={(v) => setModule(v === "Module" ? "" : v)}
                      options={[
                        { label: "Module",     value: ""           },
                        { label: "Payments",   value: "Payments"   },
                        { label: "Users",      value: "Users"      },
                        { label: "Housing",    value: "Housing"    },
                        { label: "Guarantees", value: "Guarantees" },
                        { label: "Crypto",     value: "Crypto"     },
                        { label: "Rewards",    value: "Rewards"    },
                        { label: "System",     value: "System"     },
                      ]}
                    />
                  </div>

                  <div className="relative 2xl:w-[20%] md:w-[48%] w-full">
                    <Calendar size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    <input
                      type="date"
                      value={filters.date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full h-9 appearance-auto! pl-9 pr-3 text-sm text-gray-6400 placeholder:text-gray-6400 border border-gray-1000 bg-gray-3700/50 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-4 text-xs flex-wrap">
                  <span className="text-gray-6400 text-[10px] font-normal block">ACTIVE:</span>
                  {filters.severity && (
                    <button
                      onClick={() => setSeverity("")}
                      className="px-3 py-2 bg-red-2500/10 border border-red-2500/20 text-red-2500 text-[10px] rounded-md flex items-center gap-1.5"
                    >
                      {filters.severity} <X size={12} />
                    </button>
                  )}
                  {filters.module && (
                    <button
                      onClick={() => setModule("")}
                      className="px-3 py-2 bg-green-3700/10 border border-green-3700/20 text-green-3700 text-[10px] rounded-md flex items-center gap-1.5"
                    >
                      {filters.module} <X size={12} />
                    </button>
                  )}
                  {filters.date && (
                    <button
                      onClick={() => setDate("")}
                      className="px-3 py-2 bg-green-3700/10 border border-green-3700/20 text-green-3700 text-[10px] rounded-md flex items-center gap-1.5"
                    >
                      {filters.date} <X size={12} />
                    </button>
                  )}
                  {filters.search && (
                    <button
                      onClick={() => setSearch("")}
                      className="px-3 py-2 bg-green-3700/10 border border-green-3700/20 text-green-3700 text-[10px] rounded-md flex items-center gap-1.5"
                    >
                      {filters.search} <X size={12} />
                    </button>
                  )}
                  {!hasActiveFilters && (
                    <span className="px-3 py-2 bg-green-3700/10 border border-green-3700/20 text-green-3700 text-[10px] rounded-md flex items-center gap-1.5">
                      Last 24h <X size={12} />
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="card-bg rounded-xl p-4 border border-gray-1000">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-sm font-bold leading-5 text-black-2000">Forensic Audit Ledger</h2>
                  <p className="text-[10px] leading-3.75 font-normal text-gray-6400">
                    Showing {Math.min(5, total)} of {total} records
                  </p>
                </div>
                <Link href="/" className="flex items-center gap-1.5 text-xs py-1.5 px-3 font-medium leading-4 text-black-2000">
                  <img src="/images/sorting-icon.svg" alt="" /> Sort
                </Link>
              </div>
              <AuditTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}