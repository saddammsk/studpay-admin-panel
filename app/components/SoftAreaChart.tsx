"use client";

import React from "react";

type Dot = {
     x: number;
     y: number;
     color: string;
};

const dots: Dot[] = [
     { x: 180, y: 110, color: "#10B981" },
     { x: 230, y: 130, color: "#3B82F6" },

     { x: 520, y: 120, color: "#3B82F6" },
     { x: 560, y: 110, color: "#F97316" },

     { x: 680, y: 160, color: "#F97316" },
     { x: 750, y: 170, color: "#10B981" },

     { x: 880, y: 210, color: "#10B981" },
];

export default function SoftAreaChart() {
     return (
          <div className="relative w-full h-[300px] bg-[#f3f4f6] rounded-2xl overflow-hidden">
               <svg
                    viewBox="0 0 1000 300"
                    className="absolute inset-0 w-full h-full"
                    preserveAspectRatio="none"
               >
                    {/* LEFT BLOB */}
                    <path
                         d="M120,60
             C80,100 80,180 200,200
             C320,220 360,140 300,90
             C250,50 170,30 120,60 Z"
                         fill="#93C5FD"
                         opacity="0.35"
                    />

                    {/* CENTER BLOB */}
                    <path
                         d="M420,40
             C380,100 450,220 600,220
             C750,220 720,80 620,40
             C550,10 460,10 420,40 Z"
                         fill="#93C5FD"
                         opacity="0.35"
                    />

                    {/* RIGHT BLOB */}
                    <path
                         d="M650,20
             C600,100 680,260 880,240
             C980,230 980,80 850,40
             C780,10 700,0 650,20 Z"
                         fill="#93C5FD"
                         opacity="0.35"
                    />
               </svg>

               {/* Dots */}
               {dots.map((dot, index) => (
                    <div
                         key={index}
                         className="absolute"
                         style={{
                              left: dot.x,
                              top: dot.y,
                              transform: "translate(-50%, -50%)",
                         }}
                    >
                         <div
                              className="w-5 h-5 rounded-full border-4 bg-white"
                              style={{ borderColor: dot.color }}
                         />
                    </div>
               ))}
          </div>
     );
}