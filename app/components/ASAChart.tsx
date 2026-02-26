"use client";

import {
     ResponsiveContainer,
     ScatterChart,
     Scatter,
     XAxis,
     YAxis,
     ReferenceArea,
} from "recharts";

type RiskLevel = "high" | "medium" | "low";

interface DataPoint {
     x: number;
     y: number;
     risk: RiskLevel;
}

const data: DataPoint[] = [
     { x: 2, y: 7, risk: "low" },
     { x: 3, y: 6, risk: "medium" },
     { x: 4, y: 5, risk: "low" },
     { x: 5, y: 4, risk: "medium" },
     { x: 6, y: 8, risk: "high" },
     { x: 6.5, y: 6.8, risk: "high" },
     { x: 7, y: 5.2, risk: "medium" },
     { x: 7.5, y: 3.5, risk: "low" },
     { x: 9, y: 7.5, risk: "low" },
];

const getColor = (risk: RiskLevel) => {
     switch (risk) {
          case "high":
               return "#EF4444";
          case "medium":
               return "#F59E0B";
          case "low":
               return "#10B981";
     }
};

export default function ASAChart() {
     return (
          <div className="w-full">
               {/* Chart */}
               <div className="w-full h-[260px] border-b border-gray-5100">
                    <ResponsiveContainer width="100%" height="100%">
                         <ScatterChart margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>

                              {/* Hide Axes */}
                              <XAxis type="number" dataKey="x" hide />
                              <YAxis type="number" dataKey="y" hide />

                              {/* Blue Area */}
                              <ReferenceArea
                                   x1={5.5}
                                   x2={8}
                                   y1={3}
                                   y2={9}
                                   fill="#93C5FD"
                                   fillOpacity={0.25}
                                   stroke="none"
                              />

                              {/* Scatter Points */}
                              <Scatter
                                   data={data}
                                   shape={(props: any) => {
                                        const { cx, cy, payload } = props;
                                        return (
                                             <circle
                                                  cx={cx}
                                                  cy={cy}
                                                  r={7}
                                                  fill={getColor(payload.risk)}
                                             />
                                        );
                                   }}
                              />
                         </ScatterChart>
                    </ResponsiveContainer>
               </div>

               {/* Legend */}
               <div className="flex items-center gap-6 mt-6 text-sm">
                    <LegendItem color="#EF4444" label="High Risk" />
                    <LegendItem color="#F59E0B" label="Medium" />
                    <LegendItem color="#10B981" label="Low" />
               </div>
          </div>
     );
}

function LegendItem({ color, label }: { color: string; label: string }) {
     return (
          <div className="flex  items-center gap-2">
               <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: color }}
               />
               <span className="text-gray-600">{label}</span>
          </div>
     );
}