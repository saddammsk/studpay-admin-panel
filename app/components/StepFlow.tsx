"use client";

import { Clock } from "lucide-react";

export type StepItem = {
     id: number;
     title: string;
     description: string;
     badge: string;
     time: string;
     icon: React.ReactNode;
     connectorText?: string;
};

type StepFlowProps = {
     steps: StepItem[];
};

export default function StepFlow({ steps }: StepFlowProps) {
     return (
          <div className="space-y-3">
               {steps.map((step, index) => (
                    <div key={step.id} className="relative flex md:gap-6 gap-2">
                         {/* Left Timeline */}
                         <div className="flex flex-col items-center">
                              <div className="md:w-10 w-8 md:h-10 h-8 flex items-center justify-center rounded-full border-2 border-blue1400 text-blue1400 font-bold bg-gray-5900">
                                   {step.id}
                              </div>

                              {/* Hide line for last item */}
                              {index !== steps.length - 1 && (
                                   <div className="flex-1 w-[2px] bg-blue-200 mt-2" />
                              )}
                         </div>

                         {/* Right Content */}
                         <div className="flex-1">
                              <div className="rounded-2xl border border-blue-2600 bg-blue-2500/50 md:p-4 p-2">
                                   <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                             <div className="text-blue-600">{step.icon}</div>
                                             <h3 className="font-bold text-sm text-black-1600">
                                                  {step.title}
                                             </h3>
                                        </div>

                                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                                             <Clock size={16} />
                                             {step.time}
                                        </div>
                                   </div>

                                   <p className="text-gray-1200 mt-1.5 text-xs">
                                        {step.description}
                                   </p>

                                   <div className="mt-2.5">
                                        <span className="px-2.5 inline-block py-1 md:text-sm text-xs rounded-full border border-blue-2600 text-blue1400 text-xs font-bold">
                                             {step.badge}
                                        </span>
                                   </div>
                              </div>

                              {step.connectorText && (
                                   <div className="text-gray-1200 text-xs mt-3 flex items-center gap-2">
                                        ↓ {step.connectorText}
                                   </div>
                              )}
                         </div>
                    </div>
               ))}
          </div>
     );
}