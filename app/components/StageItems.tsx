import React from 'react'
import ProgressBar from './ProgressBar';
const workflowStages = [
     { title: "Intake", count: 23, color: "bg-blue-1700" },
     { title: "Docs Validation", count: 15, color: "bg-brown-1100" },
     { title: "Risk Review", count: 8, color: "bg-orange-1000" },
     { title: "Partner Send", count: 12, color: "bg-purple-1100" },
     { title: "Decision", count: 6, color: "bg-green-1500" },
     { title: "Closing", count: 4, color: "bg-gray-1200" },
];
function StageItems() {
     const maxCount = Math.max(...workflowStages.map(s => s.count));
     return (
          <div>
               {workflowStages.map((stage, index) => {
                    const percentage = (stage.count / maxCount) * 100;

                    return (
                         <div
                              key={index}
                              className="py-2 flex items-center justify-between"
                         >
                              <div className="flex items-center gap-3">
                                   <span
                                        className={`${stage.color} w-2 h-2 rounded-full block`}
                                   ></span>
                                   <h6 className="text-sm font-normal leading-5 text-gray-2500">
                                        {stage.title}
                                   </h6>
                              </div>

                              <div className="flex items-center gap-3">
                                   <ProgressBar
                                        className="w-20"
                                        value={percentage}
                                   />
                                   <h6 className="text-gray-2500 text-xs font-normal leading-4">
                                        {stage.count}
                                   </h6>
                              </div>
                         </div>
                    );
               })}
          </div>
     )
}

export default StageItems
