"use client";

import React from "react";
import {
     Shield,
     Timer,
     FileText,
     TrendingUp,
} from "lucide-react";

type StatCardProps = {
     title: string;
     value: string;
     subtitle: string;
     icon: React.ReactNode;
     variant?: "primary" | "default";
     subtitleIcon?: React.ReactNode;
     subtitleClassName?: string;
     cardClassName?: string;
};

const StatCard: React.FC<StatCardProps> = ({
     title,
     value,
     subtitle,
     icon,
     variant = "default",
     subtitleIcon,
     subtitleClassName = "",
     cardClassName = "",
}) => {
     const isPrimary = variant === "primary";

     return (
          <div
               className={`rounded-xl xl:p-6 p-3 flex justify-between items-start shadow-sm
        ${isPrimary
                         ? "bg-gradient-to-r from-[#1DB1FF] to-[#6274FF] text-white"
                         : "bg-gray-100 text-blue-1300"
                    } ${cardClassName}`}
          >
               <div>
                    <p
                         className={`text-xs uppercase tracking-wide ${isPrimary ? "text-blue-100" : "text-gray-1200"
                              }`}
                    >
                         {title}
                    </p>

                    <h2 className="text-2xl font-bold mt-2">{value}</h2>

                    <div
                         className={`text-sm mt-1 flex items-center gap-1 ${isPrimary ? "text-white" : "text-gray-1200"
                              } ${subtitleClassName}`}
                    >
                         {subtitleIcon}
                         <span>{subtitle}</span>
                    </div>
               </div>

               <div
                    className={`p-3 rounded-lg ${isPrimary ? "bg-white/20" : "bg-white"
                         }`}
               >
                    {icon}
               </div>
          </div>
     );
};

const DashboardStats: React.FC = () => {
     return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {/* Card 1 */}
               <StatCard
                    title="Total Active Guarantees (AUM)"
                    value="€2,847,350"
                    subtitle="+12.5% vs last month"
                    icon={<Shield size={22} />}
                    variant="primary"
               />

               {/* Card 2 (Timer icon + different bg) */}
               <StatCard
                    title="Pending Risk Assessments"
                    value="23"
                    subtitle="5 high priority"
                    icon={<Timer size={22} />}
                    cardClassName="bg-yellow-1100/5 border border-yellow-1100/30"
               />

               {/* Card 3 (FileText main icon + TrendingUp with subtitle) */}
               <StatCard
                    title="Guarantees Issued Today"
                    value="17"
                    subtitle="+8 vs yesterday"
                    icon={<FileText size={22} />}
                    cardClassName="bg-white border border-gray-1000"
                    subtitleClassName="text-green-600"
                    subtitleIcon={<TrendingUp size={16} className="text-green-600" />}
               />
          </div>
     );
};

export default DashboardStats;