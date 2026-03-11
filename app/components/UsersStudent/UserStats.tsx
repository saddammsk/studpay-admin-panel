'use client';
import Image from 'next/image';

type StatsCard = {
  title: string;
  value: string;
  subText: string;
  icon: string;
  iconBg: string;
  change?: string;
  changeIcon?: string;
  changeColor?: string;
};

const statsCards: StatsCard[] = [
  {
    title: 'Total Balance',
    value: '€12,847.32',
    subText: 'Across 3 accounts',
    change: '+2.4%',
    changeIcon: '/images/price-arrow-green.svg',
    changeColor: 'text-lightgreen17',
    icon: '/images/wallet-blue.svg',
    iconBg: 'bg-blue1400/10',
  },
  {
    title: 'Active AVI',
    value: '2 Active',
    subText: '€500 blocked',
    icon: '/images/block-yellow.svg',
    iconBg: 'bg-yellow-1100/10',
  },
  {
    title: 'Support Tickets',
    value: '1 Open',
    subText: 'Avg. response: 2h',
    icon: '/images/support-blue.svg',
    iconBg: 'bg-skyblue23/10',
  },
  {
    title: 'Risk Flags',
    value: '3 Flags',
    subText: '2 high priority',
    icon: '/images/warning.svg',
    iconBg: 'bg-red1700/10',
  },
];

const StatsCard = ({
  title,
  value,
  subText,
  icon,
  iconBg,
  change,
  changeIcon,
  changeColor,
}: StatsCard) => {
  return (
    <div className="flex items-start justify-between bg-white border border-gray-3100 shadow-4xl rounded-lg p-4">
      <div>
        <span className="text-gray-1900 font-inter font-medium text-sm leading-5 block">
          {title}
        </span>

        <div className="flex items-center gap-2 my-1.5">
          <h4 className="text-black-1600 font-inter font-semibold md:text-2xl text-lg leading-8">
            {value}
          </h4>

          {change && (
            <span
              className={`flex items-center gap-0.5 font-inter font-medium text-xs leading-4 ${changeColor}`}
            >
              {changeIcon && (
                <Image src={changeIcon} width={12} height={12} alt="" />
              )}
              {change}
            </span>
          )}
        </div>

        <p className="text-gray-1900 font-inter font-normal text-xs leading-4">
          {subText}
        </p>
      </div>

      <span
        className={`w-10 h-10 flex items-center justify-center rounded-lg ${iconBg}`}
      >
        <Image src={icon} width={20} height={20} alt="" />
      </span>
    </div>
  );
};

const UserStats = () => {
  return (
    <div className="grid 5xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
      {statsCards.map((item, index) => (
        <StatsCard key={index} {...item} />
      ))}
    </div>
  );
};

export default UserStats;