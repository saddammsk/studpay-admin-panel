import Image from "next/image";

import { RecentTransactions } from "./_components/RecentTransactions";
import { UserAccounts } from "./_components/UserAccounts";
import { RecentAuditTrail } from "./_components/RecentAuditTrail";
import AdminActions from "@/app/components/UsersStudent/AdminActions";

const UsersStudentsPage = () => {
  return (
    <div className="font-inter">
      <div className="flex xl:flex-row flex-col items-start gap-4">
        <div className="xl:w-[calc(100%-300px)] w-full">
          <div className="grid 5xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex items-start justify-between gradient-bg border border-solid border-blue1400/20 shadow-4xl rounded-lg p-6">
              <div className="">
                <span className="text-gray-1900 font-inter font-medium text-sm leading-5 tracking-[-0.35px] block">
                  Total Balance
                </span>
                <div className="flex items-center mt-2 mb-1">
                  <h4 className="text-black-1600 font-inter font-bold md:text-2xl text-lg leading-8">
                    €30.905,88
                  </h4>
                </div>
                <p className="text-gray-1900 font-inter font-normal text-xs leading-4">
                  Across 4 accounts
                </p>
              </div>
              <button className="w-6 h-6 cursor-pointer flex items-center justify-center">
                <Image
                  src="/images/eye-icon.svg"
                  width="24"
                  height="24"
                  alt=""
                />
              </button>
            </div>
            <div className="bg-white border border-solid border-gray-3100 shadow-4xl rounded-lg p-6">
              <span className="text-gray-1900 font-inter font-medium text-sm leading-5 block tracking-[-0.35px]">
                Active Accounts
              </span>
              <h4 className="text-black-1600 font-inter font-bold md:text-2xl text-lg leading-8 mt-2 mb-1">
                3
              </h4>
              <p className="text-lightgreen17 font-inter font-normal text-xs leading-4 flex items-center gap-1">
                <Image
                  src="/images/price-arrow-green.svg"
                  width="12"
                  height="12"
                  alt=""
                />{" "}
                All accounts in good standing
              </p>
            </div>
            <div className="bg-white border border-solid border-gray-3100 shadow-4xl rounded-lg p-6">
              <span className="text-gray-1900 font-inter font-medium text-sm leading-5 block tracking-[-0.35px]">
                Monthly Inflow
              </span>
              <h4 className="text-lightgreen17 font-inter font-bold md:text-2xl text-lg leading-8 mt-2 mb-1">
                +€3,450.00
              </h4>
              <p className="text-gray-1900 font-inter font-normal text-xs leading-4">
                +12% from last month
              </p>
            </div>
            <div className="bg-white border border-solid border-gray-3100 shadow-4xl rounded-lg p-6">
              <span className="text-gray-1900 font-inter font-medium text-sm leading-5 block tracking-[-0.35px]">
                Monthly Outflow
              </span>
              <h4 className="text-red1700 font-inter font-bold md:text-2xl text-lg leading-8 mt-2 mb-1">
                -€1,892.45
              </h4>
              <p className="text-gray-1900 font-inter font-normal text-xs leading-4">
                -5% from last month
              </p>
            </div>
          </div>
          <UserAccounts />
          <RecentTransactions />
          <RecentAuditTrail />
        </div>
        <AdminActions />
      </div>
    </div>
  );
};

export default UsersStudentsPage;
