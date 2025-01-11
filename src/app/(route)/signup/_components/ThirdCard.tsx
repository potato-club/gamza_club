import React from "react";
import { RHFInput } from "@/app/_components/client/RHF";
import { CardButton } from "@/app/_components/server/GamzaCard";

const ThirdCard = () => {
  const inputStyle =
    "w-[350px] h-[45px] rounded-xl border px-[16px] py-[12px] leading-none text-gray-500";

  return (
    <div className="flex flex-col gap-[32px]">
      <div className="flex flex-col gap-[21px]">
        <div className="flex mt-[70px] gap-[30px]">
          <RHFInput name="firstName" size="small" placeholder="성" />
          <RHFInput name="lastName" size="small" placeholder="이름" />
        </div>
        <RHFInput name="major" size="large" placeholder="학과" />
        <RHFInput name="studentNumber" size="large" placeholder="학번" />
      </div>
      <div className="flex items-center justify-end gap-[10px]">
        <CardButton text="이전" value="prev" />
        <CardButton text="가입" color="green" value="submit" />
      </div>
    </div>
  );
};

export default ThirdCard;
