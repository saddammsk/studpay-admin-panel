"use client";

import {
     FileText,
     DollarSign,
     Clock,
     AlertTriangle,
} from "lucide-react";

interface StatCardProps {
     title: string;
     value: string;
     subtitle?: string;
     subtitleColor?: string;
     icon: React.ReactNode;
     valueColor?: string;
     iconBg: string;
}

const StatCard = ({
     title,
     value,
     subtitle,
     subtitleColor,
     valueColor = "text-gray-900",
     icon,
     iconBg,
}: StatCardProps) => {
     return (
          <div className="bg-white rounded-xl shadow-9xl border border-gray-3600/50 p-6 flex justify-between items-start w-full">
               <div>
                    <p className="text-sm text-gray-1900 mb-2">{title}</p>
                    <h2 className={`text-2xl font-medium leading-8 text-blue-1300 ${valueColor}`}>{value}</h2>
                    {subtitle && (
                         <p className={`text-xs mt-2 ${subtitleColor}`}>{subtitle}</p>
                    )}
               </div>

               <div className={`w-11 h-11 flex items-center justify-center rounded-lg ${iconBg}`}>
                    {icon}
               </div>
          </div>
     );
};

export default function StatsCard4() {
     return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

               <StatCard
                    title="Total Policies"
                    value="1,247"
                    valueColor="text-blue-1300"
                    subtitle="+12.5% from last month"
                    subtitleColor="text-green-600"
                    icon={<FileText className="w-5 h-5 text-blue-1300" />}
                    iconBg="bg-gray-2000"
               />

               <StatCard
                    title="Revenue from Premiums"
                    value="€112,450"
                    valueColor="text-green-3800"
                    subtitle="+8.2% from last month"
                    subtitleColor="text-green-600"
                    icon={<DollarSign className="w-5 h-5 text-green-3800" />}
                    iconBg="bg-gray-2000"
               />

               <StatCard
                    title="Pending Approvals"
                    value="23"
                    valueColor="text-yellow-1100"
                    icon={<Clock className="w-5 h-5 text-yellow-1100" />}
                    iconBg="bg-gray-2000"
               />

               <StatCard
                    title="Expiring in 30 Days"
                    value="45"
                    valueColor="text-red-1300"
                    icon={<AlertTriangle className="w-5 h-5 text-red-1300" />}
                    iconBg="bg-gray-2000"
               />

          </div>
     );
}