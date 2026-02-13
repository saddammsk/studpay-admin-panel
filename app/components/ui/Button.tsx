import React from "react";

type ButtonProps = {
     label: string;
     onClick?: () => void;
     iconSrc?: string;
     iconAlt?: string;
     type?: "button" | "submit" | "reset";
     disabled?: boolean;
     className?: string;
     iconPosition?: "start" | "end"; // new prop
};

const Button: React.FC<ButtonProps> = ({
     label,
     onClick,
     iconSrc,
     iconAlt = "",
     type = "button",
     disabled = false,
     className = "",
     iconPosition = "start", // default icon before label
}) => {
     return (
          <button
               type={type}
               onClick={onClick}
               disabled={disabled}
               className={`flex items-center btn-primary cursor-pointer gap-2 py-3 px-4 text-sm font-normal leading-5 rounded-[10px] disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
          >
               {iconSrc && iconPosition === "start" && (
                    <img src={iconSrc} alt={iconAlt} className="shrink-0" />
               )}
               {label}
               {iconSrc && iconPosition === "end" && (
                    <img src={iconSrc} alt={iconAlt} className="shrink-0" />
               )}
          </button>
     );
};

export default Button;
