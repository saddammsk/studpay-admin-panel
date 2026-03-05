"use client";

import {
     TrendingUp,
     Users,
     Euro,
     Package,
} from "lucide-react";

type CardProps = {
     title: string;
     value: string;
     subtitle: string;
     subtitleColor?: string;
     icon: React.ReactNode;
     iconBg: string;
};

function StatCard({
     title,
     value,
     subtitle,
     subtitleColor = "text-gray-5000",
     icon,
     iconBg,
}: CardProps) {
     return (
          <div className="flex justify-between items-start bg-white border border-gray-7100 rounded-lg py-5 2xl:px-6 px-4 w-full">

               <div className="flex flex-col gap-1">
                    <p className="text-sm text-gray-5000">{title}</p>
                    <h3 className="text-xl font-bold text-blue-2900">{value}</h3>
                    <p className={`text-xs ${subtitleColor}`}>{subtitle}</p>
               </div>

               <div
                    className={`flex items-center justify-center w-10 h-10 rounded-md ${iconBg}`}
               >
                    {icon}
               </div>

          </div>
     );
}

export default function DashboardStats2() {
     return (
          <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-4 w-full">

               <StatCard
                    title="Total Marketplace Sales"
                    value="€48,392"
                    subtitle="+12.5% from last month"
                    subtitleColor="text-green-3200"
                    icon={<TrendingUp className="w-5 h-5 text-white" />}
                    iconBg="bg-blue-2800"
               />

               <StatCard
                    title="Active Vendors"
                    value="34"
                    subtitle="+3 new this week"
                    subtitleColor="text-green-3200"
                    icon={<Users className="w-5 h-5 text-white" />}
                    iconBg="bg-blue-2800"
               />

               <StatCard
                    title="Commission Earned"
                    value="€4,839"
                    subtitle="10% avg. commission"
                    icon={<Euro className="w-5 h-5 text-white" />}
                    iconBg="bg-green-3200"
               />

               <StatCard
                    title="Pending Fulfillment"
                    value="18"
                    subtitle="5 urgent (>48h)"
                    subtitleColor="text-red2100"
                    icon={<Package className="w-5 h-5 text-white" />}
                    iconBg="bg-yellow-1100"
               />

          </div>
     );
}