'use client';

import React from 'react';

type Feature = {
     name: string;
     x: number; // sessions per week
     y: number; // avg minutes
     size: number;
     color: string;
};

const features: Feature[] = [
     { name: 'Insurance', x: 1, y: 8, size: 14, color: '#8B5CF6' },
     { name: 'Housing Search', x: 3, y: 25, size: 16, color: '#10B981' },
     { name: 'Savings Goals', x: 4, y: 15, size: 15, color: '#06B6D4' },
     { name: 'Bill Pay', x: 6, y: 6, size: 18, color: '#EF4444' },
     { name: 'Crypto Wallet', x: 9, y: 12, size: 17, color: '#3B82F6' },
     { name: 'Transfers', x: 12, y: 3, size: 20, color: '#F59E0B' },
];

export default function UsageBubbleChart() {
     const width = 800;
     const height = 400;
     const padding = 60;

     const maxX = 12;
     const maxY = 28;

     const scaleX = (x: number) =>
          padding + (x / maxX) * (width - padding * 2);

     const scaleY = (y: number) =>
          height - padding - (y / maxY) * (height - padding * 2);

     return (
          <div style={{ background: '#F9FAFB', }}>
               <svg width="100%" viewBox={`0 0 ${width} ${height}`}>

                    {/* Y Axis Labels */}
                    {[0, 7, 14, 21, 28].map((tick) => (
                         <text
                              key={tick}
                              x={20}
                              y={scaleY(tick)}
                              fontSize="12"
                              fill="#6B7280"
                         >
                              {tick}min
                         </text>
                    ))}

                    {/* X Axis Labels */}
                    {[0, 3, 6, 9, 12].map((tick) => (
                         <text
                              key={tick}
                              x={scaleX(tick)}
                              y={height - 20}
                              textAnchor="middle"
                              fontSize="12"
                              fill="#6B7280"
                         >
                              {tick}/wk
                         </text>
                    ))}

                    {/* Axis Titles */}
                    <text
                         x={width / 2}
                         y={height - 5}
                         textAnchor="middle"
                         fontSize="13"
                         fill="#6B7280"
                    >
                         Usage Frequency (sessions/week)
                    </text>

                    <text
                         transform={`rotate(-90)`}
                         x={-height / 2}
                         y={15}
                         textAnchor="middle"
                         fontSize="13"
                         fill="#6B7280"
                    >
                         Avg Time (min)
                    </text>

                    {/* Bubbles */}
                    {features.map((f) => (
                         <circle
                              key={f.name}
                              cx={scaleX(f.x)}
                              cy={scaleY(f.y)}
                              r={f.size}
                              fill={f.color}
                              opacity={0.9}
                         />
                    ))}
               </svg>

               {/* Custom Legend */}
               <div
                    style={{
                         marginTop: 30,
                         display: 'flex',
                         justifyContent: 'center',
                         gap: 24,
                         flexWrap: 'wrap',
                    }}
               >
                    {features.map((f) => (
                         <div
                              key={f.name}
                              style={{
                                   display: 'flex',
                                   alignItems: 'center',
                                   gap: 8,
                                   fontSize: 13,
                                   color: '#6B7280',
                              }}
                         >
                              <span
                                   style={{
                                        width: 10,
                                        height: 10,
                                        borderRadius: '50%',
                                        background: f.color,
                                   }}
                              />
                              {f.name}
                         </div>
                    ))}
               </div>
          </div>
     );
}