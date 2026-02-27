"use client";

import { useState } from "react";
import { MapPin, Smartphone, Wifi } from "lucide-react";

type AlertItemProps = {
     title: string;
     description: string;
     icon: React.ReactNode;
};

export default function AlertItem({
     title,
     description,
     icon,
}: AlertItemProps) {
     const [checked, setChecked] = useState(false);

     return (
          <div className="flex items-center justify-between p-4 rounded-xl border border-gray-1000 bg-white shadow-sm">
               {/* Left Section */}
               <div className="flex items-start md:gap-4 gap-2">
                    {/* Checkbox */}
                    <button
                         onClick={() => setChecked(!checked)}
                         className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition
          ${checked ? "bg-black border-blue-1300" : "border-blue-1300"}`}
                    >
                         {checked && <div className="w-2 h-2 bg-white rounded-full" />}
                    </button>

                    {/* Icon + Text */}
                    <div className="flex gap-3  flex-1">
                         <div className="text-orange-500 mt-1">{icon}</div>

                         <div>
                              <h4 className="font-normal leading-5 text-sm text-blue-1300">{title}</h4>
                              <p className="text-xs leading-4 font-normal text-gray-1200">{description}</p>
                         </div>
                    </div>
               </div>

               {/* Trigger Button */}
               <button className="px-2.5 py-1 text-xs font-bold rounded-full bg-gray-5900 border border-yellow-2600 text-yellow-2500 hover:bg-orange-200 transition">
                    Trigger
               </button>
          </div>
     );
}