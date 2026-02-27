"use client";
import React from "react";

type Props = {
  value: number;
  size?: number;
  stroke?: number;
  color?: string;
  label: string;
  sublabel?: string;
};

export default function CircularProgress({
  value,
  size = 120,
  stroke = 10,
  color = "#D4A017",
  label,
  sublabel,
}: Props) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center text-center">
      <div style={{ width: size, height: size }} className="relative">
        <svg width={size} height={size}>
          {/* background */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#eee"
            strokeWidth={stroke}
            fill="none"
          />

          {/* progress */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={stroke}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{
              transition: "stroke-dashoffset 0.6s ease",
              transform: "rotate(-90deg)",
              transformOrigin: "50% 50%",
            }}
          />
        </svg>

        {/* percentage text */}
        <div
          className="absolute inset-0 flex items-center justify-center font-semibold text-lg"
          style={{ color }}
        >
          {value}%
        </div>
      </div>

      <div className="mt-3 text-black-1600 text-sm">{label}</div>

      {sublabel && (
        <div className="text-xs text-gray-1900">{sublabel}</div>
      )}
    </div>
  );
}
