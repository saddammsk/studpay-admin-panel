"use client";

import { useState } from "react";
import Image from "next/image";

interface ColorOption {
  id: string;
  label: string;
  color: string; // tailwind bg color
}

const colors: ColorOption[] = [
  { id: "blue", label: "Brand Blue", color: "bg-blue-600" },
  { id: "green", label: "Success Green", color: "bg-green-600" },
  { id: "purple", label: "Royal Purple", color: "bg-purple-600" },
  { id: "orange", label: "Sunset Orange", color: "bg-orange-500" },
  { id: "teal", label: "Ocean Teal", color: "bg-teal-600" },
  { id: "pink", label: "Rose Pink", color: "bg-pink-600" },
];

export default function ColorSelect() {
  const [selected, setSelected] = useState<string>("blue");

  return (
    <div className="grid grid-cols-1 max-w-[767px] sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {colors.map((item) => {
        const isActive = selected === item.id;

        return (
          <div
            key={item.id}
            onClick={() => setSelected(item.id)}
            className={`
              cursor-pointer
              flex items-center justify-between
              p-3 rounded-xl border-2
              transition-all duration-200
              ${
                isActive
                  ? "border-blue600 bg-blue600/5"
                  : "border-gray-200 bg-white"
              }
            `}
          >
            {/* Left Side */}
            <div className="flex items-center gap-3">
              <div
                className={`w-8 h-8 rounded-xl ${item.color}`}
              />
              <span className="text-xs font-normal text-black-2000">
                {item.label}
              </span>
            </div>

            {/* Check Icon */}
            {isActive && (
              <svg
                className="w-5 h-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
        );
      })}
    </div>
  );
}