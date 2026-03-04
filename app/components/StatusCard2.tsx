"use client";

import { ReactNode } from "react";

type Variant = "default" | "success" | "danger" | "info";

type StatusCardProps = {
     title: string;
     value: string;
     subtitle2: string;
     subtitle: string;
     positive?: boolean;
     icon: ReactNode;
     variant?: Variant;
     highlight?: boolean;
};

export default function StatusCard2({
     title,
     value,
     subtitle,
     subtitle2,
     positive = true,
     icon,
     variant = "default",
     highlight = false,
}: StatusCardProps) {
     const variantStyles = {
          default: "bg-gray-6100 text-blue-1300",
          success: "bg-yellow-2700/10 text-yellow-2700",
          danger: "bg-gray-6100 text-blue-1300",
          info: "bg-gray-6100 text-blue-1300",
     };

     return (
          <div
               className={`bg-white border border-grey-5400 rounded-xl p-5 shadow-sm flex flex-col gap-3
      ${highlight ? "border-yellow-2700/30 ring-1 ring-yellow-2700" : ""}
      `}
          >
               {/* Top Row */}
               <div className="flex items-start justify-between">
                    <div>
                         <p className="text-sm mb-2 text-gray-1900">{title}</p>
                         {/* Value */}
                         <h3 className="text-2xl mb-2 font-bold text-blue-1300">{value}</h3>
                         <p className="text-xs mb-2 font-normal leading-4 text-gray-1900">{subtitle2}</p>
                         {/* Subtitle */}
                         <p
                              className={`text-xs font-medium ${positive ? "text-emerald-500" : "text-red-500"
                                   }`}
                         >
                              {subtitle}
                         </p>
                    </div>
                    <div
                         className={`w-11 h-11 flex items-center justify-center rounded-lg ${variantStyles[variant]}`}
                    >
                         {icon}
                    </div>


               </div>
          </div>
     );
}