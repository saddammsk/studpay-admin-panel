'use client';

import React from 'react';

type CohortRow = {
     cohort: string;
     months: (number | null)[];
};

const data: CohortRow[] = [
     { cohort: 'Jan 2024', months: [100, 72, 58, 45, 38, 32] },
     { cohort: 'Feb 2024', months: [100, 75, 62, 51, 42, null] },
     { cohort: 'Mar 2024', months: [100, 78, 65, 54, null, null] },
     { cohort: 'Apr 2024', months: [100, 71, 59, null, null, null] },
     { cohort: 'May 2024', months: [100, 74, null, null, null, null] },
     { cohort: 'Jun 2024', months: [100, null, null, null, null, null] },
];

const getColor = (value: number) => {
     if (value >= 90) return '#18A66A';
     if (value >= 70) return '#4FBF8B';
     if (value >= 60) return '#7ED6A8';
     if (value >= 50) return '#F97316';
     if (value >= 40) return '#FB923C';
     return '#FDBA74';
};

export default function CohortHeatmap() {
     return (
          <div className='-mt-10 px-4 sm:px-6 lg:px-8 overflow-x-auto'>
               {/* Header + Legend */}
               <div className='flex justify-end items-center gap-2 mb-5 min-w-[480px]'>
                    <span className='text-xs text-gray-500'>Low</span>
                    {['#FDBA74', '#FB923C', '#F97316', '#7ED6A8', '#4FBF8B', '#18A66A'].map((c, i) => (
                         <div key={i} className='w-4 h-3 rounded-sm' style={{ background: c }} />
                    ))}
                    <span className='text-xs text-gray-500'>High</span>
               </div>

               {/* Table */}
               <div className='mt-2 min-w-[480px]'>
                    {/* Month Header */}
                    <div className='grid grid-cols-[120px_repeat(6,80px)] gap-3 mb-3 text-xs text-gray-500'>
                         <div></div>
                         {['Month 0', 'Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5'].map((m) => (
                              <div key={m} className='text-center'>{m}</div>
                         ))}
                    </div>

                    {/* Rows */}
                    {data.map((row) => (
                         <div key={row.cohort} className='grid grid-cols-[120px_repeat(6,80px)] gap-3 items-center mb-3'>
                              <div className='text-sm'>{row.cohort}</div>
                              {row.months.map((value, i) => (
                                   <div key={i} className='text-center'>
                                        {value !== null ? (
                                             <div
                                                  className='rounded-full py-2 text-white font-semibold text-xs'
                                                  style={{ background: getColor(value) }}
                                             >
                                                  {value}%
                                             </div>
                                        ) : (
                                             <div className='rounded-full py-2 text-gray-400 text-xs bg-gray-100'>-</div>
                                        )}
                                   </div>
                              ))}
                         </div>
                    ))}
               </div>
          </div>
     );
}