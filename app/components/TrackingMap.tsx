"use client";

import React from "react";

type TrackingPoint = {
     x: number; // percentage (0–100)
     y: number; // percentage (0–100)
     status: "active" | "lost";
};

const points: TrackingPoint[] = [
     { x: 10, y: 75, status: "active" },
     { x: 20, y: 65, status: "active" },
     { x: 30, y: 55, status: "lost" },
     { x: 40, y: 45, status: "active" },
     { x: 50, y: 35, status: "lost" },
     { x: 60, y: 25, status: "active" },
     { x: 75, y: 18, status: "active" },
     { x: 85, y: 12, status: "active" },
];

export default function TrackingMap() {
     const pathData = points
          .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x}% ${p.y}%`)
          .join(" ");

     return (
          <div className="relative w-full h-[350px] bg-gray-100 rounded-xl overflow-hidden">
               {/* SVG Path */}
               <svg className="absolute inset-0 w-full h-full">
                    <polyline
                         points={points.map((p) => `${p.x}%,${p.y}%`).join(" ")}
                         fill="none"
                         stroke="#3b82f6"
                         strokeWidth="2"
                         strokeDasharray="6 6"
                    />
               </svg>

               {/* Points */}
               {points.map((point, index) => {
                    const isLast = index === points.length - 1;

                    return (
                         <div
                              key={index}
                              className="absolute"
                              style={{
                                   left: `${point.x}%`,
                                   top: `${point.y}%`,
                                   transform: "translate(-50%, -50%)",
                              }}
                         >
                              {isLast && (
                                   <div className="absolute w-6 h-6 rounded-full border-2 border-blue-500 animate-ping" />
                              )}

                              <div
                                   className={`w-3 h-3 rounded-full ${point.status === "active"
                                             ? "bg-blue-500"
                                             : "bg-gray-400"
                                        }`}
                              />
                         </div>
                    );
               })}

               {/* Legend */}
               <div className="absolute bottom-4 left-4 bg-white shadow-md rounded-lg px-4 py-2 flex gap-4 text-sm">
                    <div className="flex items-center gap-2">
                         <span className="w-3 h-3 rounded-full bg-blue-500" />
                         Active Tracking
                    </div>
                    <div className="flex items-center gap-2">
                         <span className="w-3 h-3 rounded-full bg-gray-400" />
                         Lost Signal
                    </div>
               </div>
          </div>
     );
}