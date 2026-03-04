"use client";

import { ReactNode } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
type IconVariant = "green" | "red" | "blue" | "emerald";

interface StatsCardProps {
     title: string;
     value: string;
     innervalue: string;
     change?: string;
     changeType?: "positive" | "negative";
     icon: ReactNode;
     backgroundImage?: string;
     iconVariant?: IconVariant;
}

export default function StatsCard3({
     title,
     value,
     change,
     innervalue,
     changeType = "positive",
     icon,
     backgroundImage,
     iconVariant = "green",
}: StatsCardProps) {
     const iconStyles = {
          green: "bg-green-3700/10 text-green-3700",
          red: "bg-red-2500/10 text-red-2500",
          blue: "bg-green-3700/10 text-green-3700",
          emerald: "bg-green-3700/10 text-green-3700",
     };
     return (
          <div
               className="relative rounded-2xl p-4 border-gray-200 border overflow-hidden"
               style={{
                    backgroundImage: backgroundImage
                         ? `url(${backgroundImage})`
                         : undefined,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
               }}
          >


               <div className="relative z-10">
                    <div className="flex justify-between items-start mb-3">
                         <div>
                              <p className="text-xs font-medium text-gray-6400 mb-2">{title}</p>
                              <h3 className="text-2xl font-bold leading-8 text-black-2000">
                                   {value} <span className="text-xs font-normal leading-4 text-gray-6400"> {innervalue}</span>
                              </h3>
                         </div>

                         <div className={`bg-gray-100 w-10 h-10 rounded-lg flex items-center justify-center ${iconStyles[iconVariant]}`}>
                              {icon}
                         </div>
                    </div>

                    {change && (
                         <div
                              className={`flex items-center gap-1 font-bold text-xs ${changeType === "positive"
                                   ? "text-green-3700"
                                   : "text-red-600"
                                   }`}
                         >
                              {changeType === "positive" ? (
                                   <TrendingUp size={14} />
                              ) : (
                                   <TrendingDown size={14} />
                              )}
                              {change}
                         </div>
                    )}
               </div>
          </div>
     );
}