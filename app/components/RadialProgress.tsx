"use client";

import React from "react";

interface RadialProgressProps {
     value: number; // percentage (0 - 100)
     size?: number; // circle size
     strokeWidth?: number;
     color?: string;
}

export default function RadialProgress({
     value,
     size = 128,
     strokeWidth = 12,
     color = "#2F6FED",
}: RadialProgressProps) {
     const radius = (size - strokeWidth) / 2;
     const circumference = 2 * Math.PI * radius;
     const progress = (value / 100) * circumference;

     return (
          <div
               style={{ width: size, height: size }}
               className="relative flex items-center justify-center"
          >
               <svg width={size} height={size}>
                    {/* Background Circle */}
                    <circle
                         stroke="#E5E7EB"
                         fill="transparent"
                         strokeWidth={strokeWidth}
                         r={radius}
                         cx={size / 2}
                         cy={size / 2}
                    />

                    {/* Progress Circle */}
                    <circle
                         stroke={color}
                         fill="transparent"
                         strokeWidth={strokeWidth}
                         strokeLinecap="round"
                         strokeDasharray={circumference}
                         strokeDashoffset={circumference - progress}
                         r={radius}
                         cx={size / 2}
                         cy={size / 2}
                         style={{
                              transition: "stroke-dashoffset 0.6s ease",
                              transform: "rotate(-90deg)",
                              transformOrigin: "50% 50%",
                         }}
                    />
               </svg>

               {/* Center Text */}
               <div className="absolute flex flex-col items-center">
                    <span className="text-2xl font-semibold text-black-2800">
                         {value}%
                    </span>
                    <span className="text-[10px] text-gray-5000">Complete</span>
               </div>
          </div>
     );
}