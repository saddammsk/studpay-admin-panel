'use client';
import Image from 'next/image';

type Activity = {
  title: string;
  icon: string;
  time: string;
  status: 'completed' | 'pending';
  statusColor: string;
  statusBg: string;
  statusBorder: string;
  amount: string;
};

const recentActivities: Activity[] = [
  {
    title: 'Salary deposit - ABC Corp',
    icon: '/icons/left-down-arrow.svg',
    time: 'Today, 09:15',
    status: 'completed',
    statusColor: 'text-lightgreen17',
    statusBg: 'bg-skyblue2434',
    statusBorder: 'border-lightgreen17/20',
    amount: '+€2,450.00',
  },
  {
    title: 'Amazon.de Purchase',
    icon: '/icons/card-blue.svg',
    time: 'Today, 14:32',
    status: 'completed',
    statusColor: 'text-lightgreen17',
    statusBg: 'bg-skyblue2434',
    statusBorder: 'border-lightgreen17/20',
    amount: '-€89.99',
  },
  {
    title: 'Rent transfer - Landlord',
    icon: '/icons/right-arrow-red.svg',
    time: 'Today, 16:00',
    status: 'pending',
    statusColor: 'text-yellow-1100',
    statusBg: 'bg-skyblue2434',
    statusBorder: 'border-yellow-1100/20',
    amount: '-€850.00',
  },
  {
    title: 'Apple Pay - Rewe',
    icon: '/icons/mobile-blue.svg',
    time: 'Yesterday, 18:45',
    status: 'completed',
    statusColor: 'text-lightgreen17',
    statusBg: 'bg-skyblue2434',
    statusBorder: 'border-lightgreen17/20',
    amount: '-€34.56',
  },
  {
    title: 'Savings transfer',
    icon: '/images/refresh-icon.svg',
    time: 'Yesterday, 20:00',
    status: 'completed',
    statusColor: 'text-lightgreen17',
    statusBg: 'bg-skyblue2434',
    statusBorder: 'border-lightgreen17/20',
    amount: '-€200.00',
  },
];

const ActivityItem = ({
  title,
  icon,
  time,
  status,
  statusColor,
  statusBg,
  statusBorder,
  amount,
}: Activity) => {
  return (
    <div className="flex items-center gap-3 sm:p-3 px-0 py-4 relative z-50">
      <span className="bg-gray-1600 w-8 h-8 flex items-center justify-center rounded-full">
        <Image src={icon} width={16} height={16} alt={title} />
      </span>
      <div className="flex-1 w-full flex items-start justify-between">
        <div>
          <h4 className="text-black-1600 font-inter font-medium text-sm leading-5">{title}</h4>
          <div className="flex items-center gap-2 mt-1">
            <p className="text-gray-1900 font-inter font-normal text-xs leading-4">{time}</p>
            <span
              className={`font-inter font-semibold text-[10px] leading-3.75 h-4.25 px-1.5 ${statusColor} ${statusBg} border border-solid ${statusBorder} rounded-full inline-flex items-center justify-center`}
            >
              {status}
            </span>
          </div>
        </div>
        <span className="text-black-1600 font-inter font-normal sm:text-sm text-xs leading-5 block">{amount}</span>
      </div>
    </div>
  );
};

const RecentActivity = () => {
  return (
    <div className="bg-white border border-gray-3100 shadow-4xl md:p-6 p-4 mt-5 rounded-lg">
      <h4 className="text-black-1600 mb-3 font-inter font-semibold text-sm leading-5">
        Recent Activity
      </h4>
      <div className="relative after:absolute after:content-[''] sm:after:left-6.5 after:left-4 after:top-1/2 after:-translate-y-1/2 after:w-0.5 after:h-[85%] after:bg-gray-3100">
        {recentActivities.map((activity, index) => (
          <ActivityItem key={index} {...activity} />
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;