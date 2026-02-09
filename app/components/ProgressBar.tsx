// components/ProgressBar.tsx
import React from "react";

interface ProgressBarProps {
     value: number; // 0 to 100
     className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, className = "" }) => {
     // Ensure value stays between 0 and 100
     const width = Math.min(100, Math.max(0, value));

     return (
          <div className={`h-2 rounded-full overflow-hidden bg-gray-1000 ${className}`}>
               <div
                    className="h-full bg-blue-1000 transition-all duration-300"
                    style={{ width: `${width}%` }}
               ></div>
          </div>
     );
};

export default ProgressBar;
