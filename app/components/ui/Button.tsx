import React from "react";

type ButtonProps = {
     label: string;
     onClick?: () => void;
     iconSrc?: string;
     iconAlt?: string;
     type?: "button" | "submit" | "reset";
     disabled?: boolean;
     className?: string;
};

const Button: React.FC<ButtonProps> = ({
     label,
     onClick,
     iconSrc,
     iconAlt = "",
     type = "button",
     disabled = false,
     className = "",
}) => {
     return (
          <button
               type={type}
               onClick={onClick}
               disabled={disabled}
               className={`flex items-center cursor-pointer gap-4 py-3 px-4 text-sm font-normal leading-5 rounded-[10px] disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
          >
               {iconSrc && (
                    <img
                         src={iconSrc}
                         alt={iconAlt}
                         className="shrink-0"
                    />
               )}
               {label}
          </button>
     );
};

export default Button;
