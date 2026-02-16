interface ProgressBarProps {
  value: number;
  className?: string;
  barColor?: string;
  bgColor?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  className = "",
  barColor = "bg-blue-1000",
  bgColor = "bg-gray-1000",
}) => {
  const width = Math.min(100, Math.max(0, value));

  return (
    <div className={`h-2 rounded-full overflow-hidden ${bgColor} ${className}`}>
      <div
        className={`h-full transition-all rounded-full duration-300 ${barColor}`}
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};
export default ProgressBar;
