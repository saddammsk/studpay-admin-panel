"use client";

import Link from "next/link";
import Image from "next/image";
import CustomSelect from "@/app/components/CustomSelect";
import GuranteeBar from "@/app/components/GuranteeBar";
import DashboardStats from "@/app/components/DashboardStats";
import StudentTable from "@/app/components/StudentTable";
import { useGuaranteesStore } from "@/app/store/zustand/useGuaranteesStore";

const UsersStudentsPage = () => {
  const {
    filters,
    filteredStudents,
    setSearch,
    setTypeFilter,
    setRiskFilter,
    setSourceFilter,
    resetFilters,
  } = useGuaranteesStore();

  const total = filteredStudents().length;
  const hasFilters = Object.values(filters).some(Boolean);

  return (
    <div className="xl:-mt-30.75 md:-mt-27.5! -mt-24 bg-gray-6700 lg:-m-8 -m-4">
      <GuranteeBar />
      <div className="lg:p-8 p-4">
        <DashboardStats />
        <div className="bg-white border my-6 border-gray-1000 rounded-lg p-4">
          <div className="flex flex-wrap items-center gap-3 4xl:flex-1">
            <div className="relative max-w-[384px] w-full">
              <input
                type="text"
                value={filters.search}
                onChange={(e) => setSearch(e.target.value)}
                className="text-sm font-normal text-gray-1900 placeholder:text-gray-1900 px-4 pl-10 h-10 bg-gray-6600 border border-gray-1000 rounded-md w-full outline-0"
                placeholder="Search partners..."
              />
              <div className="absolute top-1/2 -translate-y-1/2 left-3">
                <Image src="../images/search-icon.svg" width={16} height={16} alt="" />
              </div>
            </div>

            <div className="relative w-32.5">
              <CustomSelect
                className="w-full bg-gray-6600 border border-gray-1000"
                value={filters.type}
                onChange={(value: string) => setTypeFilter(value === "Type" ? "" : value)}
                options={[
                  { label: "Type",      value: "Type"      },
                  { label: "Rental",    value: "Rental"    },
                  { label: "Financial", value: "Financial" },
                ]}
              />
            </div>

            <div className="relative w-32.5">
              <CustomSelect
                className="w-full bg-gray-6600 border border-gray-1000"
                value={filters.risk}
                onChange={(value: string) => setRiskFilter(value === "Risk Score" ? "" : value)}
                options={[
                  { label: "Risk Score", value: "Risk Score" },
                  { label: "Low",        value: "Low"        },
                  { label: "Medium",     value: "Medium"     },
                  { label: "High",       value: "High"       },
                ]}
              />
            </div>

            <div className="relative w-40">
              <CustomSelect
                className="w-full bg-gray-6600 border border-gray-1000"
                value={filters.source}
                onChange={(value: string) => setSourceFilter(value === "Source/Campaign" ? "" : value)}
                options={[
                  { label: "Source/Campaign",    value: "Source/Campaign"    },
                  { label: "TU Munich",          value: "TU Munich"          },
                  { label: "Humboldt University",value: "Humboldt University"},
                  { label: "RWTH Aachen",        value: "RWTH Aachen"       },
                  { label: "Direct Application", value: "Direct Application" },
                  { label: "FAU Erlangen",       value: "FAU Erlangen"      },
                  { label: "KIT Karlsruhe",      value: "KIT Karlsruhe"     },
                  { label: "Uni Hamburg",        value: "Uni Hamburg"       },
                  { label: "Uni Frankfurt",      value: "Uni Frankfurt"     },
                  { label: "FU Berlin",          value: "FU Berlin"         },
                  { label: "Uni Köln",           value: "Uni Köln"          },
                ]}
              />
            </div>

            <div>
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 text-blue-1300 font-inter font-normal text-sm leading-5 rounded-md bg-gray-6600 border border-gray-1000 h-9 px-3 hover:bg-gray-3600 transition-all duration-500 ease-in-out"
              >
                <Image src="/images/filter.svg" width={16} height={16} alt="" />
                More Filters
              </Link>
            </div>

            {hasFilters && (
              <button
                onClick={resetFilters}
                className="inline-flex items-center justify-center text-sm text-gray-1200 hover:text-red-500 h-9 px-3 rounded-md border border-gray-1000 bg-gray-6600 transition-colors"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        <div className="flex items-center mb-3 justify-between">
          <h6 className="text-lg font-bold leading-7 text-blue-1300">Application Ledger</h6>
          <p className="text-sm font-normal text-gray-1200">
            Showing {Math.min(8, total)} of {total} applications
          </p>
        </div>

        <StudentTable />
      </div>
    </div>
  );
};

export default UsersStudentsPage;