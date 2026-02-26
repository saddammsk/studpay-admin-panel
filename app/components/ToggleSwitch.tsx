"use client";

import React from "react";

type ToggleSwitchProps = {
  checked: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
  className?: string;
};

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked,
  onChange,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type="button"
      onClick={() => !disabled && onChange(!checked)}
      className={`
        relative w-14 h-8 flex items-center rounded-full transition-colors duration-300
        ${checked ? "bg-blue-600" : "bg-gray-300"}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
    >
      <span
        className={`
          absolute left-1 w-6 h-6 bg-white rounded-full shadow-md
          transform transition-transform duration-300
          ${checked ? "translate-x-6" : "translate-x-0"}
        `}
      />
    </button>
  );
};

export default ToggleSwitch;