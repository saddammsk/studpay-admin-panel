"use client";

import React from "react";

type NodeType = "exchange" | "mixer" | "defi" | "personal" | "unknown" | "target";
type RiskLevel = "low" | "medium" | "high" | null;

interface Node {
     id: string;
     label: string;
     type: NodeType;
     x: number; // original design coordinates
     y: number;
     risk: RiskLevel;
}

interface Edge {
     from: string;
     to: string;
     dashed?: boolean;
     color?: string;
}

const typeColors: Record<NodeType, string> = {
     exchange: "#d1d5db",
     mixer: "#fecaca",
     defi: "#bbf7d0",
     personal: "#e5e7eb",
     unknown: "#fde68a",
     target: "#ffffff",
};

const riskColors: Record<"low" | "medium" | "high" | "null", string> = {
     low: "#16a34a",
     medium: "#f59e0b",
     high: "#dc2626",
     null: "transparent",
};

// Original coordinates (will scale)
const nodes: Node[] = [
     { id: "target", label: "0xA1...1ec7\nTarget Wallet", type: "target", x: 500, y: 220, risk: "low" },
     { id: "exchange", label: "0x74d2...b1e2\nExchange", type: "exchange", x: 500, y: 80, risk: null },
     { id: "mixer", label: "0xdAC1...1ec7\nMixer", type: "mixer", x: 650, y: 170, risk: "high" },
     { id: "defi", label: "0xA8b8...e848\nDeFi", type: "defi", x: 580, y: 350, risk: "low" },
     { id: "personal", label: "0x6817...De89\nPersonal", type: "personal", x: 420, y: 350, risk: null },
     { id: "unknown", label: "0x2260...C599\nUnknown", type: "unknown", x: 350, y: 170, risk: "medium" },
];

const edges: Edge[] = [
     { from: "exchange", to: "target", dashed: true, color: "#9ca3af" },
     { from: "mixer", to: "target", color: "#ef4444" },
     { from: "unknown", to: "target", dashed: true, color: "#f59e0b" },
     { from: "personal", to: "target", dashed: true, color: "#9ca3af" },
     { from: "defi", to: "target", dashed: true, color: "#9ca3af" },
];

const WalletGraph: React.FC = () => {
     const getNode = (id: string) => nodes.find((n) => n.id === id)!;

     return (
          <div className="w-full flex flex-col items-center bg-white py-10">
               <svg
                    className="w-full h-auto"
                    viewBox="0 0 1000 450" // original design width/height
                    preserveAspectRatio="xMidYMid meet"
               >
                    {/* EDGES */}
                    {edges.map((edge, i) => {
                         const from = getNode(edge.from);
                         const to = getNode(edge.to);
                         return (
                              <line
                                   key={i}
                                   x1={from.x}
                                   y1={from.y}
                                   x2={to.x}
                                   y2={to.y}
                                   stroke={edge.color || "#9ca3af"}
                                   strokeWidth={2}
                                   strokeDasharray={edge.dashed ? "5,5" : "0"}
                              />
                         );
                    })}

                    {/* NODES */}
                    {nodes.map((node) => (
                         <g key={node.id}>
                              <circle
                                   cx={node.x}
                                   cy={node.y}
                                   r={node.id === "target" ? 60 : 45}
                                   fill={typeColors[node.type]}
                                   stroke={node.id === "target" ? "#22c55e" : riskColors[node.risk ?? "null"]}
                                   strokeWidth={node.id === "target" ? 4 : 3}
                              />
                              <text
                                   x={node.x}
                                   y={node.y - 5}
                                   textAnchor="middle"
                                   fontSize="12"
                                   fill="#111827"
                                   fontWeight="bold"
                              >
                                   {node.label.split("\n")[0]}
                              </text>
                              <text
                                   x={node.x}
                                   y={node.y + 15}
                                   textAnchor="middle"
                                   fontSize="12"
                                   fill="#374151"
                              >
                                   {node.label.split("\n")[1]}
                              </text>
                         </g>
                    ))}
               </svg>

               {/* LEGEND */}
               <div className="flex gap-6 mt-6 text-sm text-gray-700 flex-wrap justify-center px-5">
                    <Legend color="#d1d5db" label="Exchange" />
                    <Legend color="#fecaca" label="Mixer" />
                    <Legend color="#bbf7d0" label="DeFi" />
                    <Legend color="#e5e7eb" label="Personal" />
                    <Legend color="#fde68a" label="Unknown" />
                    <Legend color="#16a34a" label="Low Risk" dot />
                    <Legend color="#f59e0b" label="Medium Risk" dot />
                    <Legend color="#dc2626" label="High Risk" dot />
               </div>
          </div>
     );
};

const Legend = ({
     color,
     label,
     dot = false,
}: {
     color: string;
     label: string;
     dot?: boolean;
}) => (
     <div className="flex items-center gap-2">
          {dot ? (
               <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
          ) : (
               <span className="w-4 h-4 rounded-full border" style={{ backgroundColor: color }} />
          )}
          <span>{label}</span>
     </div>
);

export default WalletGraph;