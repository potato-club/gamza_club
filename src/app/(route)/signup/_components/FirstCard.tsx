import React from "react";
import { Checkbox } from "@/app/_components/ui/checkbox";
import NextButton from "./NextButton";
const FirstCard = () => {
  return (
    <div className="flex flex-col  gap-[32px]">
      <div className="w-[327px] h-[176px] rounded-xl border px-[16px] py-[12px] leading-none text-gray-500 mt-[70px]">
        약관
        <br />
        1조.
        <br />갑 김효성 을 김성훈 평생 충성을 다할것을 맹세한다
      </div>
      <div className="flex items-center gap-[100px]">
        <div className="flex items-center gap-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-green-500 underline decoration-green-500"
          >
            회원가입 약관 동의
          </label>
        </div>
        <NextButton />
      </div>
    </div>
  );
};

export default FirstCard;
