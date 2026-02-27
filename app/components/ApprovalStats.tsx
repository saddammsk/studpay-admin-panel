"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, ChartOptions } from "chart.js";

ChartJS.register(ArcElement, Tooltip);

type StatItem = {
     label: string;
     value: number;
     percentage: number;
     color: string;
     bg: string;
     icon: string;
};

const stats: StatItem[] = [
     { label: "Approved", value: 142, percentage: 74, color: "#10B981", bg: "rgba(16, 185, 129, 0.08)", icon: "/images/tick-circle6.svg" },
     { label: "Pending", value: 38, percentage: 20, color: "#F59E0B", bg: "rgba(245, 158, 11, 0.08)", icon: "/images/timer-yellow.svg" },
     { label: "Rejected", value: 12, percentage: 6, color: "#EF4444", bg: " rgba(239, 68, 68, 0.08)", icon: "/images/cross-red.svg" },
];

export default function ApprovalStats() {
     const total = stats.reduce((a: number, b: StatItem) => a + b.value, 0);

     const data = {
          datasets: [
               {
                    data: stats.map((s) => s.value),
                    backgroundColor: stats.map((s) => s.color),
                    borderWidth: 0,
                    cutout: "75%",
               },
          ],
     };

     const options: ChartOptions<"doughnut"> = {
          plugins: {
               tooltip: { enabled: false },
          },
     };

     return (
          <div className="md:flex gap-10 items-center">
               {/* Donut */}
               <div style={{ position: "relative", width: 160, height: 160 }}>
                    <Doughnut data={data} options={options} />
                    <div
                         style={{
                              position: "absolute",
                              inset: 0,
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                         }}
                    >
                         <span style={{ fontSize: 12, color: "#6B7280" }}>Total</span>
                         <span style={{ fontSize: 24, fontWeight: 600 }}>{total}</span>
                    </div>
               </div>

               {/* Stats */}
               <div className="flex-1 md:mt-0 mt-5">
                    {stats.map((item) => (
                         <div
                              key={item.label}
                              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}
                         >
                              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                   <div
                                        style={{
                                             width: 32,
                                             height: 32,
                                             borderRadius: 8,
                                             background: item.bg,
                                             color: item.color,
                                             display: "flex",
                                             alignItems: "center",
                                             justifyContent: "center",
                                             fontWeight: 600,
                                        }}
                                   >
                                        <img src={item.icon} className="w-4 h-4" alt="" />
                                   </div>

                                   <div>
                                        <div className="text-sm font-normal leading-5 text-black-1600">{item.label}</div>
                                        <div style={{ fontSize: 12, color: "#6B7280" }}>{item.percentage}% of total</div>
                                   </div>
                              </div>

                              <div className="tetx-lg font-bold leading-7 text-black-1600">{item.value}</div>
                         </div>
                    ))}
               </div>
          </div>
     );
}
