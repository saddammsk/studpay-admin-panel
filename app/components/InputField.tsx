'use client'
import Image from "next/image";
import React, { useState } from "react";

interface InputFieldProps {
     label?: string;
     type?: string;
     placeholder?: string;
     value?: string;
     onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
     iconSrc?: string; // optional left icon
     wrapperClassName?: string;
     ClassName?: string;
     passwordToggleIconSrc?: { show: string; hide: string }; // eye icons for password
}

const InputField: React.FC<InputFieldProps> = ({
     label,
     type = "text",
     placeholder,
     value,
     onChange,
     iconSrc,
     wrapperClassName = "",
     ClassName = "",
     passwordToggleIconSrc,
}) => {
     const [showPassword, setShowPassword] = useState(false);

     const isPassword = type === "password";
     const inputType = isPassword ? (showPassword ? "text" : "password") : type;

     return (
          <div className={wrapperClassName}>
               {label && (
                    <label className="font-segoe text-sm font-normal leading-5 block mb-2 text-gray-1700">
                         {label}
                    </label>
               )}

               <div className="relative">
                    {/* Left icon */}
                    {iconSrc && (
                         <div className="absolute top-1/2 left-3 -translate-y-1/2">
                              <Image src={iconSrc} alt="input icon" width={16} height={16} />
                         </div>
                    )}

                    <input
                         type={inputType}
                         placeholder={placeholder}
                         value={value}
                         onChange={onChange}
                         className={`font-segoe text-sm font-normal leading-normal text-gray-1400 
          placeholder:text-gray-1400 w-full h-10 rounded-md border border-gray-1000 
          block ${iconSrc ? "pl-10" : "pl-3"} ${isPassword ? "pr-10" : "pr-3"} ${ClassName}`}
                    />

                    {/* Eye icon for password toggle */}
                    {isPassword && passwordToggleIconSrc && (
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
