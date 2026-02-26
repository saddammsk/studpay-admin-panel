"use client";

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

type Status = "active" | "inactive" | "sos";

interface NodeType extends d3.SimulationNodeDatum {
     id: string;
     users: number;
     status: Status;
}

interface LinkType extends d3.SimulationLinkDatum<NodeType> {
     source: string;
     target: string;
}

const nodes: NodeType[] = [
     { id: "Paris", users: 4, status: "active" },
     { id: "Lyon", users: 2, status: "inactive" },
     { id: "Marseille", users: 2, status: "sos" },
     { id: "Toulouse", users: 2, status: "active" },
     { id: "Bordeaux", users: 1, status: "active" },
     { id: "Nantes", users: 1, status: "active" },
];

const links: LinkType[] = [
     { source: "Paris", target: "Lyon" },
     { source: "Lyon", target: "Marseille" },
     { source: "Paris", target: "Nantes" },
     { source: "Toulouse", target: "Lyon" },
];

const getColor = (status: Status) => {
     if (status === "active") return "#22c55e";
     if (status === "inactive") return "#facc15";
     return "#ef4444";
};

export default function NetworkMap() {
     const ref = useRef<SVGSVGElement | null>(null);

     useEffect(() => {
          const width = 1100;
          const height = 650;

          const svg = d3
               .select(ref.current)
               .attr("viewBox", `0 0 ${width} ${height}`)
               .style("background", "#f3f4f6");

          svg.selectAll("*").remove();

          // ===== GRID BACKGROUND =====
          const gridSize = 40;

          for (let i = 0; i < width; i += gridSize) {
               svg.append("line")
                    .attr("x1", i)
                    .attr("y1", 0)
                    .attr("x2", i)
                    .attr("y2", height)
                    .attr("stroke", "#e5e7eb")
                    .attr("stroke-width", 1);
          }

          for (let i = 0; i < height; i += gridSize) {
               svg.append("line")
                    .attr("x1", 0)
                    .attr("y1", i)
                    .attr("x2", width)
                    .attr("y2", i)
                    .attr("stroke", "#e5e7eb")
                    .attr("stroke-width", 1);
          }

          // ===== BLUR FILTER =====
          const defs = svg.append("defs");

          const blur = defs.append("filter").attr("id", "blur");
          blur.append("feGaussianBlur").attr("stdDeviation", 50);

          // Blurred Zones
          svg.append("ellipse")
               .attr("cx", 200)
               .attr("cy", 300)
               .attr("rx", 150)
               .attr("ry", 250)
               .attr("fill", "#d1d5db")
               .attr("opacity", 0.3)
               .attr("filter", "url(#blur)");

          svg.append("ellipse")
               .attr("cx", 850)
               .attr("cy", 550)
               .attr("rx", 300)
               .attr("ry", 120)
               .attr("fill", "#d1d5db")
               .attr("opacity", 0.3)
               .attr("filter", "url(#blur)");

          // ===== SIMULATION =====
          const simulation = d3.forceSimulation(nodes)
               .force("link", d3.forceLink<NodeType, LinkType>(links).id(d => d.id).distance(160))
               .force("charge", d3.forceManyBody().strength(-350))
               .force("center", d3.forceCenter(width / 2, height / 2));

          const link = svg.append("g")
               .selectAll("line")
               .data(links)
               .enter()
               .append("line")
               .attr("stroke", "#d1d5db")
               .attr("stroke-width", 1);

          const node = svg.append("g")
               .selectAll("circle")
               .data(nodes)
               .enter()
               .append("circle")
               .attr("r", d => 8 + d.users * 2)
               .attr("fill", d => getColor(d.status))
               .attr("stroke", "#fff")
               .attr("stroke-width", 2)
               .attr("filter", d =>
                    d.status === "sos"
                         ? "drop-shadow(0px 0px 12px red)"
                         : "none"
               );

          const label = svg.append("g")
               .selectAll("text")
               .data(nodes)
               .enter()
               .append("text")
               .text(d => `${d.id} (${d.users} users)`)
               .attr("font-size", 12)
               .attr("dx", 14)
               .attr("dy", 4)
               .attr("fill", "#374151");

          simulation.on("tick", () => {
               link
                    .attr("x1", (d: any) => d.source.x)
                    .attr("y1", (d: any) => d.source.y)
                    .attr("x2", (d: any) => d.target.x)
                    .attr("y2", (d: any) => d.target.y);

               node
                    .attr("cx", (d: any) => d.x)
                    .attr("cy", (d: any) => d.y);

               label
                    .attr("x", (d: any) => d.x)
                    .attr("y", (d: any) => d.y);
          });

     }, []);

     return (
          <div className="relative">
               <svg ref={ref} className="w-full md:h-[650px] h-[200px]" />

               {/* Legend */}
               <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded shadow text-sm space-y-1">
                    <div className="flex items-center gap-2">
                         <span className="w-3 h-3 bg-green-500 rounded-full" />
                         Active
                    </div>
                    <div className="flex items-center gap-2">
                         <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                         Inactive
                    </div>
                    <div className="flex items-center gap-2">
                         <span className="w-3 h-3 bg-red-500 rounded-full" />
                         SOS
                    </div>
               </div>
          </div>
     );
}