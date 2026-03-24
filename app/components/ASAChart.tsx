/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useCallback } from "react";
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ReferenceArea,
  Tooltip,
} from "recharts";
import Link from "next/link";

type RiskLevel = "high" | "medium" | "low";

interface DataPoint {
  x: number;
  y: number;
  risk: RiskLevel;
  label: string;
}

const data: DataPoint[] = [
  { x: 2,   y: 7,   risk: "low",    label: "Zone A" },
  { x: 3,   y: 6,   risk: "medium", label: "Zone B" },
  { x: 4,   y: 5,   risk: "low",    label: "Zone C" },
  { x: 5,   y: 4,   risk: "medium", label: "Zone D" },
  { x: 6,   y: 8,   risk: "high",   label: "Zone E" },
  { x: 6.5, y: 6.8, risk: "high",   label: "Zone F" },
  { x: 7,   y: 5.2, risk: "medium", label: "Zone G" },
  { x: 7.5, y: 3.5, risk: "low",    label: "Zone H" },
  { x: 9,   y: 7.5, risk: "low",    label: "Zone I" },
];

const riskHigh   = data.filter((d) => d.risk === "high");
const riskMedium = data.filter((d) => d.risk === "medium");
const riskLow    = data.filter((d) => d.risk === "low");

const palette: Record<RiskLevel, { fill: string; stroke: string; bg: string }> = {
  high:   { fill: "rgba(226,75,74,0.18)",  stroke: "#E24B4A", bg: "#fef2f2" },
  medium: { fill: "rgba(239,159,39,0.18)", stroke: "#EF9F27", bg: "#fffbeb" },
  low:    { fill: "rgba(29,158,117,0.18)", stroke: "#1D9E75", bg: "#f0fdf4" },
};

const riskLabel: Record<RiskLevel, string> = {
  high: "High Risk",
  medium: "Medium",
  low: "Low",
};

function CustomDot(props: any) {
  const { cx, cy, payload } = props;
  if (!cx || !cy) return null;
  const { fill, stroke } = palette[payload.risk as RiskLevel];
  return (
    <g>
      <circle cx={cx} cy={cy} r={13} fill={fill} />
      <circle cx={cx} cy={cy} r={9} fill={fill} stroke={stroke} strokeWidth={1.5} />
    </g>
  );
}

function CustomTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const pt = payload[0]?.payload as DataPoint;
  if (!pt) return null;
  const { stroke, bg } = palette[pt.risk];
  return (
    <div className="rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-md text-xs">
      <p className="font-medium text-gray-900 mb-1">{pt.label}</p>
      <p style={{ color: stroke }} className="font-medium mb-0.5">
        ● {riskLabel[pt.risk]}
      </p>
      <p className="text-gray-400">
        x: {pt.x.toFixed(1)}, y: {pt.y.toFixed(1)}
      </p>
    </div>
  );
}

export function ASAChart() {
  const [focused, setFocused] = useState(false);
  const chartHeight = focused ? 420 : 260;

  return (
    <div className="w-full">
      <div
        className="w-full border-b border-gray-5100 transition-all duration-300"
        style={{ height: chartHeight }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 16, right: 16, bottom: 16, left: 16 }}>
            <XAxis type="number" dataKey="x" hide domain={[0.5, 10.5]} />
            <YAxis type="number" dataKey="y" hide domain={[1.5, 10]} />

            <ReferenceArea
              x1={5.4}
              x2={8.1}
              y1={2.8}
              y2={9.2}
              fill="#93C5FD"
              fillOpacity={0.18}
              stroke="#93C5FD"
              strokeOpacity={0.35}
              strokeWidth={1}
              ifOverflow="visible"
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={false}
              isAnimationActive={false}
            />

            <Scatter data={riskHigh}   shape={<CustomDot />} isAnimationActive={false} />
            <Scatter data={riskMedium} shape={<CustomDot />} isAnimationActive={false} />
            <Scatter data={riskLow}    shape={<CustomDot />} isAnimationActive={false} />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center gap-6 mt-4">
        {(["high", "medium", "low"] as RiskLevel[]).map((r) => (
          <div key={r} className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: palette[r].stroke }}
            />
            <span className="text-sm text-gray-500">{riskLabel[r]}</span>
          </div>
        ))}
        <span className="ml-auto text-xs text-gray-400">9 zones active</span>
      </div>
    </div>
  );
}

export default function SafetyHeatmapCard() {
  const [focused, setFocused] = useState(false);

  return (
    <div className="border py-5 px-4 border-gray-5100 bg-white rounded-xl shadow-14xl">
      <div className="flex pb-3 items-center justify-between">
        <div>
          <h6 className="text-base font-bold leading-6 text-black-2600">Safety Heatmap</h6>
          <p className="text-sm font-normal leading-5 text-gray-1200">Real-time risk distribution</p>
        </div>
        <button
          onClick={() => setFocused((f) => !f)}
          className="flex items-center gap-1.5 text-xs font-normal leading-4 text-black-2700 py-1.5 px-2.5 bg-gray-5200 rounded-[10px] hover:bg-gray-200 transition-colors"
        >
          {focused ? (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="4 14 10 14 10 20"/>
              <polyline points="20 10 14 10 14 4"/>
              <line x1="10" y1="14" x2="3" y2="21"/>
              <line x1="21" y1="3" x2="14" y2="10"/>
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 3 21 3 21 9"/>
              <polyline points="9 21 3 21 3 15"/>
              <line x1="21" y1="3" x2="14" y2="10"/>
              <line x1="3" y1="21" x2="10" y2="14"/>
            </svg>
          )}
          {focused ? "Exit Focus" : "Focus Mode"}
        </button>
      </div>

      <div className="w-full">
        <div
          className="w-full border-b border-gray-5100 transition-all duration-300"
          style={{ height: focused ? 420 : 260 }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 16, right: 16, bottom: 16, left: 16 }}>
              <XAxis type="number" dataKey="x" hide domain={[0.5, 10.5]} />
              <YAxis type="number" dataKey="y" hide domain={[1.5, 10]} />

              <ReferenceArea
                x1={5.4}
                x2={8.1}
                y1={2.8}
                y2={9.2}
                fill="#93C5FD"
                fillOpacity={0.18}
                stroke="#93C5FD"
                strokeOpacity={0.35}
                strokeWidth={1}
                ifOverflow="visible"
              />

              <Tooltip
                content={<CustomTooltip />}
                cursor={false}
                isAnimationActive={false}
              />

              <Scatter data={riskHigh}   shape={<CustomDot />} isAnimationActive={false} />
              <Scatter data={riskMedium} shape={<CustomDot />} isAnimationActive={false} />
              <Scatter data={riskLow}    shape={<CustomDot />} isAnimationActive={false} />
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        <div className="flex items-center gap-6 mt-4">
          {(["high", "medium", "low"] as RiskLevel[]).map((r) => (
            <div key={r} className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: palette[r].stroke }}
              />
              <span className="text-sm text-gray-500">{riskLabel[r]}</span>
            </div>
          ))}
          <span className="ml-auto text-xs text-gray-400">9 zones active</span>
        </div>
      </div>
    </div>
  );
}