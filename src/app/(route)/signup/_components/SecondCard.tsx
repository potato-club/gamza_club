import React from "react";
import { RHFInput } from "@/app/_components/client/RHF";
import { CardButton } from "@/app/_components/server/GamzaCard";

const SecondCard = () => {
  const inputStyle =
    "w-[350px] h-[45px] rounded-xl border px-[16px] py-[12px] leading-none text-gray-500";

  return (
    <div className="flex flex-col gap-[32px]">
      <div className="flex flex-col gap-[21px] mt-[70px]">
        <RHFInput name="email" size="large" placeholder="이메일" />
        <RHFInput name="password" size="large" placeholder="비밀번호" />
        <RHFInput
          name="passwordConfirm"
          size="large"
          placeholder="비밀번호 확인"
        />
      </div>
      <div className="flex items-center justify-end gap-[10px]">
        <CardButton text="이전" value="prev" />
        <CardButton text="다음" color="green" value="next" />
      </div>
    </div>
  );
};

export default SecondCard;
