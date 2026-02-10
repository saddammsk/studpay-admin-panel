import Image from "next/image";
import React from "react";

interface InputFieldProps {
     label?: string;
     type?: string;
     placeholder?: string;
     value?: string;
     onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
     iconSrc?: string;
     wrapperClassName?: string;
     inputClassName?: string;
}

const InputField: React.FC<InputFieldProps> = ({
     label,
     type = "text",
     placeholder,
     value,
     onChange,
     iconSrc,
     wrapperClassName = "",
     inputClassName = "",
}) => {
     return (
          <div className={wrapperClassName}>
               {label && (
                    <label className="font-segoe text-sm font-normal leading-5 block mb-2 text-gray-1700">
                         {label}
                    </label>
               )}

               <div className="relative">
                    <input
                         type={type}
                         placeholder={placeholder}
                         value={value}
                         onChange={onChange}
                         className={`font-segoe text-sm font-normal leading-normal text-gray-1400 
          placeholder:text-gray-1400 w-full pl-10 h-10 rounded-md 
          border border-gray-1000 block ${inputClassName}`}
                    />

                    {iconSrc && (
                         <div className="absolute top-1/2 left-3 -translate-y-1/2">
                              <Image src={iconSrc} alt="input icon" width={16} height={16} />
                         </div>
                    )}
               </div>
          </div>
     );
};

export default InputField;
