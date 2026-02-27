"use client";

import { useState } from "react";

const marks = [
     { value: 0, label: "15 min" },
     { value: 33, label: "1h" },
     { value: 66, label: "4h" },
     { value: 100, label: "12h" },
];

export default function TimeRangeSlider() {
     const [value, setValue] = useState<number>(0);

     return (
          <div style={{ width: "100%" }}>
               <input
                    type="range"
                    min={0}
                    max={100}
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                    style={{
                         width: "100%",
                         appearance: "none",
                         height: "6px",
                         borderRadius: "5px",
                         background: `linear-gradient(to right, #0F1729 ${value}%, #F3F4F6 ${value}%)`,
                         outline: "none",
                    }}
               />

               {/* Labels */}
               <div className="text-gray-1200"
                    style={{
                         display: "flex",
                         justifyContent: "space-between",
                         marginTop: "10px",
                         fontSize: "12px",
                    }}
               >
                    {marks.map((mark) => (
                         <span key={mark.value}>{mark.label}</span>
                    ))}
               </div>
          </div>
     );
}