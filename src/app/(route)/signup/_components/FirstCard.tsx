import React from "react";
import { CardButton } from "@/app/_components/server/GamzaCard";
import { RHFCheckbox } from "@/app/_components/client/RHF";

const FirstCard = () => {
  return (
    <div className="flex flex-col gap-[32px]">
      <div className="flex flex-col  ">
        <div className="w-[350px] h-[176px] rounded-xl border px-[16px] py-[12px] leading-none text-gray-500 mt-[70px]">
          <div className="font-bold">약관</div>
          <br />
          1조.
          <br />갑 김효성 을 김성훈 평생 충성을 다할것을 맹세
        </div>
      </div>
      <div className="flex items-center justify-between gap-[30px]">
        <div className="flex justify-between ">
          <RHFCheckbox name="terms" label="회원가입 약관 동의" />
        </div>
        <CardButton text="다음" color="green" value="next" />
      </div>
    </div>
  );
};

export default FirstCard;
