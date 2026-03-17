"use client";

import Image from "next/image";
import ProgressBar from "@/app/components/ProgressBar";

interface AgentRating {
  name: string;
  rating: number;
}

const AGENTS: AgentRating[] = [
  { name: "Sophie Martin", rating: 5.0 },
  { name: "Jean-Pierre Blanc", rating: 4.5 },
];

const CustomerSatisfaction = () => {
  return (
    <div className="xl:mt-6 mt-4 border border-solid border-gray-3600 bg-white shadow-64xl xl:p-6 p-4 rounded-lg">
      <h4 className="text-blue-1300 font-semibold text-[17.3px] leading-7 mb-0.5 flex items-center gap-2">
        <Image src="/icons/meter-icon.svg" width={16} height={16} alt="" /> Customer Satisfaction
      </h4>
      <div className="grid grid-cols-2 gap-4 mt-3">
        <div className="bg-gray1700/50 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-1900 font-normal uppercase text-xs leading-4 block">NPS</span>
            <Image src="/images/price-arrow-red.svg" width={14} height={14} alt="" />
          </div>
          <h4 className="text-green56 font-bold text-xl leading-8">+42</h4>
        </div>
        <div className="bg-gray1700/50 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-1900 font-normal uppercase text-xs leading-4 block">Avg Rating</span>
          </div>
          <h4 className="text-blue-1300 flex items-center gap-1.5 font-bold text-[21px] leading-8">
            <Image src="/images/star-icon.svg" width={16} height={16} alt="" />
            4.2
          </h4>
        </div>
      </div>
      <div className="bg-white mt-5 border border-solid border-gray-3600 rounded-lg p-3">
        <div className="flex items-center justify-between  w-full">
          <h4 className="text-blue-1300 flex items-center gap-2 font-bold text-[13px] leading-5">
            <Image src="/icons/warning-yellow.svg" width={16} height={16} alt="" />
            Frustration Level
          </h4>
          <span className="text-green56 font-bold text-[11.4px] leading-4 inline-flex items-center justify-center h-5 rounded-full px-2 bg-Orange57">Medium</span>
        </div>
        <div className=" w-full">
          <div className="mt-3 flex items-center justify-between mb-1.5">
            <h4 className="text-gray-1900 flex items-center gap-1.5 font-normal text-[11.1px] leading-4">
              <Image src="/icons/renew-gray.svg" width={12} height={12} alt="" />
              Reopened tickets
            </h4>
            <span className="text-blue-1300 font-normal text-[11.4px] leading-4 inline-flex items-center">2/15</span>
          </div>
          <ProgressBar value={10} barColor="bg-green56" bgColor="bg-gray-3600" />
        </div>
      </div>
      <div className="mt-6">
        <h4 className="text-gray-1900 flex items-center font-normal text-xs leading-4 uppercase">Reopened tickets</h4>
        <ul className="mt-3">
          {AGENTS.map((agent) => (
            <li key={agent.name} className="bg-gray1700/30 rounded-md px-2 py-1.5 flex items-center justify-between mb-1.5 last:mb-0">
              <h4 className="text-blue-1300 flex items-center font-normal text-[13.2px] leading-5">{agent.name}</h4>
              <span className="text-blue-1300 flex items-center font-normal gap-1 text-[13.5px] leading-5">
                <Image src="/images/star-icon.svg" width={12} height={12} alt="" />{agent.rating}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomerSatisfaction;