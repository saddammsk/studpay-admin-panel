


import React from "react";

type StatsCardProps = {
     title: string;
     value: string;
     subtitle?: string;
     subtitleColor?: string;
     icon?: React.ReactNode;
     iconBg?: string;
};

export default function StatsCard({
     title,
     value,
     subtitle,
     subtitleColor = "text-gray-500",
     icon,
     iconBg = "bg-gray-100 text-gray-600",
}: StatsCardProps) {
     return (
          <div className="flex items-start justify-between p-5 bg-white rounded-xl border border-gray-200">
               <div>
                    <p className="text-xs text-gray-1200">{title}</p>
                    <h3 className="text-2xl text-blue-1300 font-bold mt-1">{value}</h3>
                    {subtitle && (
                         <p className={`text-xs mt-1 ${subtitleColor}`}>
                              {subtitle}
                         </p>
                    )}
               </div>

               {icon && (
                    <div
                         className={`flex items-center justify-center w-10 h-10 rounded-lg ${iconBg}`}
                    >
                         {icon}
                    </div>
               )}
          </div>
     );
}