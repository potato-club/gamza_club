import React from "react";

interface WaveProgressBarProps {
  currentStep: number;
  totalSteps?: number;
}

const WaveProgressBar: React.FC<WaveProgressBarProps> = ({
  currentStep,
  totalSteps = 7,
}) => {
  const percentage = (currentStep / totalSteps) * 100;

  return (
    <div className="relative w-full h-2 bg-gray-200 rounded overflow-hidden">
      {/* wave-gradient 클래스로 파도 애니메이션 */}
      <div
        className="absolute top-0 left-0 h-2 wave-gradient"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default WaveProgressBar;
