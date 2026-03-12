'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type RiskFlag = {
  level: string;
  levelColor: string;
  levelBg: string;
  levelBorder: string;
  message: string;
  time: string;
};

const riskFlags: RiskFlag[] = [
  {
    level: 'high',
    levelColor: 'text-red1700',
    levelBg: 'bg-red1800',
    levelBorder: 'border-red1700/20',
    message: 'Large international transfer detected',
    time: '2h ago',
  },
  {
    level: 'high',
    levelColor: 'text-red1700',
    levelBg: 'bg-red1800',
    levelBorder: 'border-red1700/20',
    message: 'Login from new location (Russia)',
    time: '5h ago',
  },
  {
    level: 'medium',
    levelColor: 'text-yellow-1100',
    levelBg: 'bg-skyblue2434',
    levelBorder: 'border-yellow-1100/20',
    message: 'Multiple failed card transactions',
    time: '1d ago',
  },
];

const RiskFlagItem = ({
  level,
  levelColor,
  levelBg,
  levelBorder,
  message,
  time,
}: RiskFlag) => {
  return (
    <div className="bg-gray-1600/50 mb-2 rounded-lg p-3 flex sm:flex-row flex-col sm:items-center items-start justify-between">
      <div className="flex items-center gap-3">
        <span
          className={`font-inter font-semibold text-[10px] leading-3.75 ${levelColor} ${levelBg} ${levelBorder} rounded-full h-5.25 px-2.5 uppercase inline-flex items-center justify-center`}
        >
          {level}
        </span>
        <p className="text-black-1600 font-inter font-normal sm:text-sm text-xs leading-5">
          {message}
        </p>
      </div>
      <span className="text-gray-1900 font-inter font-normal text-sm leading-4 block sm:mt-0 mt-4 sm:w-auto w-full sm:text-left text-right">
        {time}
      </span>
    </div>
  );
};

const ActiveRiskFlags = () => {
  return (
    <div className="bg-white mb-4 border border-gray-3100 shadow-4xl md:p-6 p-4 mt-4 rounded-lg">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-black-1600 font-inter font-semibold text-base leading-6 tracking-[-0.4px] flex items-center gap-2">
          <Image src="/images/warning.svg" width={16} height={16} alt="" />
          Active Risk Flags
        </h4>
        <Link
          href="#"
          className="inline-flex items-center gap-1 text-blue1400 font-inter font-normal text-sm leading-5"
        >
          View all <Image src="/images/view-arrow.svg" width={16} height={16} alt="" />
        </Link>
      </div>

      {riskFlags.map((flag, index) => (
        <RiskFlagItem key={index} {...flag} />
      ))}
    </div>
  );
};

export default ActiveRiskFlags;