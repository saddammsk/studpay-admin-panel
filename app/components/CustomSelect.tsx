import React from "react";
import Image from "next/image";
type SelectOption = {
     label: string;
     value: string;
};

type CustomSelectProps = {
     options: SelectOption[];
     value?: string;
     onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
     className?: string;
};

const CustomSelect: React.FC<CustomSelectProps> = ({
     options,
     value,
     onChange,
     className = "",
}) => {
     return (
          <div className="relative ">
               <select
                    value={value}
                    onChange={onChange}
                    className={`appearance-none cursor-pointer text-sm font-normal leading-5 font-neulis-sans text-black13 xl:pr-11 pr-8 pl-4 h-10 bg-white border border-gray1600 rounded-md w-full outline-0 ${className}`}
               >
                    {options.map((option) => (
                         <option key={option.value} value={option.value}>
                              {option.label}
                         </option>
                    ))}
               </select>
               <div className='w-4 h-4 opacity-50 flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-3'>
                    <Image
                         src="../images/down-arrow.svg"
                         width='10'
                         height='10'
                         alt=""
                    />
               </div>
          </div>
     );
};

export default CustomSelect;
