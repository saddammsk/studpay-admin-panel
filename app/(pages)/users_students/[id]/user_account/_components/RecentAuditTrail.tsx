import Image from "next/image";
import Link from "next/link";
import RecentAuditTable from '@/app/components/UsersStudent/RecentAuditTable';

import React from "react";

export const RecentAuditTrail = () => {
  return (
    <div>
      <div className="bg-white border border-solid border-gray-3100 shadow-4xl 2xl:p-6 p-4 mt-4 rounded-lg">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-black-1600 font-inter font-semibold text-base leading-6 tracking-[-0.4px] flex items-center gap-2">
            <Image src="/images/clock-gray.svg" width="16" height="16" alt="" />
            Recent Audit Trail
          </h4>
          <Link
            className="inline-flex items-center hover:underline text-blue1400 font-inter font-normal text-sm leading-5"
            href="#"
          >
            View full log
          </Link>
        </div>
        <div className="">
          <RecentAuditTable />
        </div>
      </div>
    </div>
  );
};
