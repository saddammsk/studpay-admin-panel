import Link from 'next/link';
import React from 'react'
const workflowStages = [
     {
          title: "Intake",
          count: 23,
          items: 23,
          dotColor: "bg-blue-1700",
     },
     {
          title: "Docs Validation",
          count: 15,
          items: 15,
          dotColor: "bg-brown-1100",
     },
     {
          title: "Risk Review",
          count: 8,
          items: 8,
          dotColor: "bg-orange-1000",
     },
     {
          title: "Partner Send",
          count: 12,
          items: 12,
          dotColor: "bg-purple-1100",
     },
     {
          title: "Decision",
          count: 6,
          items: 6,
          dotColor: "bg-green-1500",
     },
     {
          title: "Closing",
          count: 4,
          items: 4,
          dotColor: "bg-gray-1200",
     },
];
function Pipeline() {
     return (
          <div>
               <div className="grid sm:grid-cols-3 grid-cols-2 gap-4">
                    {workflowStages.map((stage, index) => (
                         <div
                              key={index}
                              className="border border-gray-1000 rounded-lg 2xl:p-4 p-2"
                         >
                              <div className="flex items-center justify-between mb-1.5">
                                   <span
                                        className={`${stage.dotColor} w-3 h-3 rounded-full block`}
                                   ></span>
                                   <h6 className="text-xs font-normal leading-4 text-gray-2600">
                                        {stage.items} items
                                   </h6>
                              </div>

                              <h5 className="text-sm font-normal leading-5 text-gray-2500 mb-1">
                                   {stage.title}
                              </h5>

                              <span className="text-2xl font-bold leading-8 text-gray-2500 block">
                                   {stage.count}
                              </span>

                              <div className="text-center">
                                   <Link
                                        href="/"
                                        className="text-xs font-normal leading-4 text-gray-2500 block text-center py-2.5"
                                   >
                                        View All
                                   </Link>
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     )
}

export default Pipeline
