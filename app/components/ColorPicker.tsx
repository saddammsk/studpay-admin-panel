"use client";

import { useState } from "react";

export default function ColorPicker() {
  const [hex, setHex] = useState("#2563EB");

  const handleChange = (value: string) => {
    // Allow only valid HEX format
    if (/^#?[0-9A-Fa-f]{0,6}$/.test(value)) {
      setHex(value.startsWith("#") ? value : `#${value}`);
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-between mb-2">
        <label className="text-sm font-normal text-black-2000">
          Custom HEX
        </label>
        <span className="text-sm font-normal  text-black-2000">
          Preview
        </span>
      </div>

      <div className="flex items-center gap-3">
        {/* Input */}
        <input
          type="text"
          value={hex}
          onChange={(e) => handleChange(e.target.value)}
          className="flex-1 px-4 py-3 rounded-xl text-black-2000 text-sm placeholder:text-black-2000 w-full bg-green-2100  border border-gray-3900 
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="#000000"
        />

        {/* Preview Box */}
        <div
          className="w-14 h-12 rounded-xl border border-gray-300"
          style={{ backgroundColor: hex }}
        />
      </div>
    </div>
  );
}