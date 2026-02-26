"use client";

import {
     Chart as ChartJS,
     ArcElement,
     Tooltip,
     Legend,
     ChartOptions,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Chart } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

/* ---------- Center Text Plugin ---------- */
const centerTextPlugin = {
     id: "centerText",
     beforeDraw(chart: Chart) {
          const { width, height } = chart;
          const ctx = chart.ctx;

          ctx.save();
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";

          // 🔹 TOTAL text
          ctx.font = "12px Inter";
          ctx.fillStyle = "#65758B";
          ctx.fillText("TOTAL", width / 2, height / 2 - 15);

          // 🔹 Amount text
          ctx.font = "bold 24px Inter";
          ctx.fillStyle = "#0F1729";
          ctx.fillText("€9.0M", width / 2, height / 2 + 15);

          ctx.restore();
     },
};

export default function FinanceDonutChart() {
     const data = {
          labels: [
               "Insurance",
               "Housing",
               "Marketplace",
               "Banking Fees",
               "Other Services",
          ],
          datasets: [
               {
                    data: [45, 25, 15, 10, 5],
                    backgroundColor: [
                         "#10B981",
                         "#34D399",
                         "#F97316",
                         "#94A3B8",
                         "#475569",
                    ],
                    borderWidth: 0,
                    cutout: "70%",
               },
          ],
     };

     const options: ChartOptions<"doughnut"> = {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
               legend: {
                    display: false,
               },
               tooltip: {
                    callbacks: {
                         label: (context) => `${context.label}: ${context.raw}%`,
                    },
               },
          },
     };

     return (
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full">
               {/* Chart */}
               <div className="w-full max-w-[200px] 4xl:max-w-[224px] aspect-square">
                    <Doughnut
                         data={data}
                         options={options}
                         plugins={[centerTextPlugin]}
                    />
               </div>

               {/* Custom Legend */}
               <div className="space-y-6 flex-1 w-full">
                    {[
                         {
                              label: "Insurance",
                              percent: "45%",
                              value: "€4.05M",
                              color: "#10B981",
                         },
                         {
                              label: "Housing",
                              percent: "25%",
                              value: "€2.25M",
                              color: "#34D399",
                         },
                         {
                              label: "Marketplace",
                              percent: "15%",
                              value: "€1.35M",
                              color: "#F97316",
                         },
                         {
                              label: "Banking Fees",
                              percent: "10%",
                              value: "€0.90M",
                              color: "#94A3B8",
                         },
                         {
                              label: "Other Services",
                              percent: "5%",
                              value: "€0.45M",
                              color: "#475569",
                         },
                    ].map((item, index) => (
                         <div
                              key={index}
                              className="flex items-center justify-between w-full gap-4 4xl:gap-12"
                         >
                              <div className="flex items-center gap-3">
                                   <span
                                        className="w-3 h-3 rounded-full"
                                        style={{ backgroundColor: item.color }}
                                   />
                                   <span className="text-blue-1300 text-sm font-medium">
                                        {item.label}
                                   </span>
                              </div>

                              <div className="flex items-center gap-2">
                                   <span className="font-bold text-sm text-blue-1300">
                                        {item.percent}
                                   </span>
                                   <span className="text-gray-1900 text-xs">
                                        {item.value}
                                   </span>
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     );
}