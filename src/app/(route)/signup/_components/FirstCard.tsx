import React from "react";
import { Checkbox } from "@/app/_components/ui/checkbox";
import { Button } from "@/app/_components/ui/button";

type FirstCardProps = {
  setStep: (step: "First" | "Second" | "Third") => void;
};

const FirstCard: React.FC<FirstCardProps> = ({ setStep }) => {
  const handleNext = () => {
    setStep("Second");
  };
  return (
    <div className="flex flex-col gap-[32px]">
      <div className="flex flex-col  gap-[32px]">
        <div className="w-[350px] h-[176px] rounded-xl border px-[16px] py-[12px] leading-none text-gray-500 mt-[70px]">
          <div className="font-bold">약관</div>
          <br />
          1조.
          <br />갑 김효성 을 김성훈 평생 충성을 다할것을 맹세
        </div>
      </div>
      <div className={` flex items-center justify-between gap-[20px] `}>
        <div className="flex items-center gap-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className=" decoration-green-500 hover:cursor-pointer"
          >
            회원가입 약관 동의
          </label>
        </div>
        <Button
          size="signup"
          className="bg-green-500 text-white hover:bg-white hover:text-green-500 hover:border-[2px] hover:border-green-500"
          onClick={handleNext}
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default FirstCard;
