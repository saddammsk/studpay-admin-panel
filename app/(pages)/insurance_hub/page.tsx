'use client'
import { useState } from "react";
import TopBar from "@/app/components/common/TopBar";
import Image from "next/image";
import CustomSelect from "@/app/components/CustomSelect";
import Button from "@/app/components/ui/Button";
import StatsCard4 from "@/app/components/StatsCard4";
import PolicyTable from '@/app/components/PolicyTable';
import { useInsuranceHubStore } from "@/app/store/zustand/useInsuranceHubStore";
import { exportToCSV } from "@/app/utils/exportToCSV";
import NewPolicyModal from "@/app/components/Insurance/NewPolicyModal";

export default function InsurancePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const { filters, setSearch, setProviderFilter, filteredPolicies } = useInsuranceHubStore();
  const total = filteredPolicies().length;

  const handleExport = () => exportToCSV(filteredPolicies(), "policies.csv");

  return (
    <div>
      <div className="bg-[url(/images/body-bg.png)] bg-cover bg-no-repeat xl:-m-8 -m-4 font-inter">
        <TopBar />
        <div className="p-6">
          <div className="flex items-center justify-between flex-wrap gap-5 mb-6">
            <div className="xl:flex-1">
              <h6 className="text-xl font-bold leading-7 text-black-1600">Insurance Hub</h6>
              <p className="text-sm font-normal leading-5 text-gray-1900">Manage student insurance policies and applications</p>
            </div>

            <ul className="flex items-center justify-end gap-1">
              <li>
                <button
                  onClick={handleExport}
                  className="inline-flex items-center justify-center gap-2 text-black-1600 font-inter font-normal text-sm leading-5 border border-solid border-gray-3600 rounded-md bg-white h-9 px-3 hover:bg-gray-3600 transition-all duration-500 ease-in-out"
                >
                  <Image src="/images/export-icon4.svg" width={16} height={16} alt="" />
                  Export
                </button>
              </li>
              <li>
                <Button
                  onClick={() => setModalOpen(true)}
                  iconSrc="/images/plus-icon.svg"
                  label="New Policy"
                  className="text-white text-sm font-normal gap-2 h-9 px-3! bg-blue-1000 hover:bg-blue800 rounded-md border border-solid border-gray1600 m-0!"
                />
              </li>
            </ul>
          </div>

          <StatsCard4 />

          <div className="flex flex-wrap items-center gap-3 my-6">
            <div className="relative max-w-md w-full">
              <input
                type="text"
                value={filters.search}
                onChange={(e) => setSearch(e.target.value)}
                className="text-sm font-normal text-gray-1900 placeholder:text-gray-1900 px-4 pl-10 h-10 bg-gray-6600 border border-gray-1000 rounded-md w-full outline-0"
                placeholder="Search by Student ID, Name, or Policy ID..."
              />
              <div className="absolute top-1/2 -translate-y-1/2 left-3">
                <Image src="../images/search-icon.svg" width={16} height={16} alt="" />
              </div>
            </div>
            <div className="relative w-50">
              <CustomSelect
                className="w-full bg-gray-6600 border border-gray-1000"
                value={filters.provider || "All Providers"}
                onChange={(value:string) => setProviderFilter(value === "All Providers" ? "" : value)}
                options={[
                  { label: "All Providers", value: "All Providers" },
                  { label: "Allianz",       value: "Allianz"       },
                  { label: "AXA",           value: "AXA"           },
                  { label: "HanseMerkur",   value: "HanseMerkur"   },
                  { label: "TK",            value: "TK"            },
                ]}
              />
            </div>
          </div>

          <PolicyTable />

          <div className="flex items-center mt-6 justify-between">
            <h6 className="text-sm font-normal leading-5 text-gray-1900">
              Showing {total} of {total} policies
            </h6>
            <h6 className="text-xs font-normal leading-5 text-gray-1900">
              Last updated: Feb 2, 2026, 10:30 PM
            </h6>
          </div>
        </div>
      </div>

      <NewPolicyModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
