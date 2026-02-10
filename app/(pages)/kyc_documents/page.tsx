"use client";

import Image from "next/image";
import KycDocumentTable from "@/app/components/KycDocumentsTable";
import CustomSelect from "@/app/components/CustomSelect";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  resetFilters,
  setSearch,
  setStatusFilter,
} from "@/app/store/slices/KYCDocuments";

const KycDocumentPage = () => {
  const dispatch = useAppDispatch();
  const { filters } = useAppSelector((state) => state.kycDocuments);

  const handleClear = (e: any) => {
    e.preventDefault();
    dispatch(resetFilters());
  };

  return (
    <div>
      <div>
        <h4 className="text-black12 font-bold md:text-[30px] text-2xl leading-9 mb-2">
          KYC & Documents
        </h4>
        <p className="text-gray-1100 font-normal md:text-base text-sm leading-6">
          Review and approve student document submissions
        </p>
      </div>
      <div className="bg-white mt-6 md:p-6.25 p-4 rounded-xl border border-solid border-gray-1600 shadow-4xl">
        <form className="flex md:flex-row flex-col items-center gap-4">
          <div className="relative flex-1 w-full">
            <input
              value={filters.search}
              onChange={(e) => dispatch(setSearch(e.target.value))}
              type="text"
              className="text-sm font-normal font-neulis-sans text-gray-1400 placeholder:text-gray-1400 px-4 pl-10 h-10 bg-white border border-gray1600 rounded-md w-full outline-0"
              placeholder="Search students, transactions..."
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-3">
              <Image
                src="../images/search-icon.svg"
                width="16"
                height="16"
                alt=""
              />
            </div>
          </div>
          <div className="flex sm:flex-row flex-col items-center gap-4 md:w-auto w-full">
            <div className="flex items-center gap-4 sm:w-auto w-full md:flex-none flex-1">
              <div className="relative xl:w-48 md:w-34 w-full">
                <CustomSelect
                  value={filters.status}
                  onChange={(e) => dispatch(setStatusFilter(e.target.value))}
                  options={[
                    { label: "All Status", value: "Status" },
                    { label: "Verified", value: "Verified" },
                    { label: "Pending", value: "Pending" },
                    { label: "Rejected", value: "Rejected" },
                  ]}
                />
              </div>
            </div>
            <button
              onClick={handleClear}
              className="sm:w-auto cursor-pointer hover:bg-gray-1600 transition-all duration-500 ease-in-out w-full inline-flex items-center justify-center px-4.25 text-black13 font-medium text-sm leading-5 gap-2 border border-gray1600 rounded-md h-10"
            >
              <Image src="../images/filter.svg" width="16" height="16" alt="" />
              Clear
            </button>
          </div>
        </form>
      </div>
      <div className="mt-6.25">
        <KycDocumentTable />
      </div>
    </div>
  );
};

export default KycDocumentPage;
