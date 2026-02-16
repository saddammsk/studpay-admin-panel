import ProfileTabs from "@/app/components/ProfileTabs";
import Link from "next/link";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const IdentificationLayout = ({ children }: Props) => {
  return (
    <div>
      <div className="flex md:flex-row flex-col md:items-center items-start gap-4">
        <Link
          href="/identification"
          className="flex items-center gap-2 py-1.5 px-3 bg-white rounded-md border border-gray1600 text-sm font-normal leading-5 font-segoe text-black13"
        >
          <img src="/images/left-arrow3.svg" alt="" /> Back to Search
        </Link>
        <div className="flex items-center sm:gap-4 gap-2.5">
          <div className="flex items-center sm:gap-4 gap-2.5">
            <img src="/images/profile-img.png" alt="" />
            <div>
              <h6 className="sm:text-2xl text-xl font-segoe font-normal leading-8 text-black-1200">
                Sarah Johnson
              </h6>
              <span className="block font-segoe font-normal leading-6 sm:text-base text-sm text-gray-1200">
                sarah.johnson@email.com • ID: 2345234
              </span>
            </div>
          </div>
          <div className="font-segoe font-normal leading-5 sm:text-[13.78px] text-xs text-green-1100 py-1 px-3 bg-green-1200 rounded-full">
            verified
          </div>
        </div>
      </div>
      <ProfileTabs />
      {children}
    </div>
  );
};

export default IdentificationLayout;
