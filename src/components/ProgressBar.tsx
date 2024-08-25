import React from "react";

interface ProgressBarProps {
  label: string;
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, percentage }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between mb-1">
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 h-2 rounded-full">
        <div
          className="bg-red-600 h-2 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
