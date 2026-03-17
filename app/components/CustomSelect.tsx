import React from "react";
import Image from "next/image";

type SelectOption = {
  label: string;
  value: string;
};

type CustomSelectProps = {
  options: SelectOption[];
  value?: string;
  onChange?: ((value: string) => void) | ((e: React.ChangeEvent<HTMLSelectElement>) => void);
  className?: string;
};

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  className = ""
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      if (onChange.length === 1) {
        (onChange as (value: string) => void)(e.target.value);
      } else {
        (onChange as (e: React.ChangeEvent<HTMLSelectElement>) => void)(e);
      }
    }
  };

  return (
    <div className="relative">
      <select
        value={value}
        onChange={handleChange}
        className={`appearance-none cursor-pointer text-sm font-normal leading-5 font-neulis-sans text-black13 px-3 h-10 bg-gray-1500 border border-gray-3600 rounded-md w-full outline-0 ${className}`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <div className="w-4 h-4 flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-1.5 pointer-events-none">
        <Image
          src="/images/down-arrow.svg"
          width={10}
          height={10}
          alt=""
        />
      </div>
    </div>
  );
};

export default CustomSelect;