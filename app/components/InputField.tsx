"use client";
import Image from "next/image";
import React, { useState } from "react";

interface InputFieldProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  iconSrc?: string;
  passwordToggleIconSrc?: { show: string; hide: string };
  wrapperClassName?: string;
  ClassName?: string;
  rows?: number;  
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  iconSrc,
  passwordToggleIconSrc,
  wrapperClassName = "",
  ClassName = "",
  rows,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;
  const isTextarea = rows && rows > 1; // If rows prop exists, render textarea

  return (
    <div className={wrapperClassName}>
      {label && (
        <label className="font-segoe text-sm font-normal leading-5 block mb-2 text-gray-1700">
          {label}
        </label>
      )}

      <div className="relative">
        {iconSrc && (
          <div className="absolute top-1/2 left-3 -translate-y-1/2">
            <Image src={iconSrc} alt="input icon" width={16} height={16} />
          </div>
        )}

        {isTextarea ? (
          <textarea
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            rows={rows}
            className={`font-segoe text-sm outline-blue-1000 font-normal leading-normal text-gray-1400 
                         placeholder:text-gray-1400 w-full pl-10 py-2 rounded-2xl 
                         border border-gray-1000 block resize-none ${ClassName}`}
          />
        ) : (
          <input
            type={inputType}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`font-segoe text-sm outline-blue-1000 font-normal leading-normal text-gray-1400 
                         placeholder:text-gray-1400 w-full pl-10 h-10 rounded-2xl 
                         border border-gray-1000 block ${ClassName}`}
          />
        )}

        {!isTextarea && isPassword && passwordToggleIconSrc && (
          <div
            className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            <Image
              src={showPassword ? passwordToggleIconSrc.hide : passwordToggleIconSrc.show}
              alt="toggle password visibility"
              width={16}
              height={16}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;
