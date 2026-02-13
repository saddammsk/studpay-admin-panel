// components/ProgressBar.tsx
import React from "react";

interface ProgressBarProps {
     value: number;
     className?: string;
     barColor?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
     value,
     className = "",
     barColor = "bg-blue-1000",
}) => {
     const width = Math.min(100, Math.max(0, value));

     return (
          <div className={`h-2 rounded-full overflow-hidden bg-gray-1000 ${className}`}>
               <div
                    className={`h-full transition-all rounded-full duration-300 ${barColor}`}
                    style={{ width: `${width}%` }}
               ></div>
          </div>
     );
};
export default ProgressBar;
