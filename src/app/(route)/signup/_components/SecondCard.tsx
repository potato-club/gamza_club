import React from "react";
import { RHFInput } from "@/app/_components/client/RHF";
import { CardButton } from "@/app/_components/server/GamzaCard";
import { useFormContext, useWatch } from "react-hook-form";

const SecondCard = () => {
  const { control } = useFormContext();

  const password = useWatch({ control, name: "password" });
  const passwordConfirm = useWatch({ control, name: "passwordConfirm" });

  const passwordsMatch = password === passwordConfirm;
  return (
    <div className="flex flex-col gap-[32px]">
      <div className="flex flex-col gap-[21px] mt-[70px]">
        <RHFInput name="email" size="large" placeholder="이메일" type="email" />
        <RHFInput
          name="password"
          size="large"
          placeholder="비밀번호"
          type="password"
        />
        {!passwordsMatch && <div>비밀번호가 일치해야합니다.</div>}
        <RHFInput
          name="passwordConfirm"
          size="large"
          placeholder="비밀번호 확인"
          type="password"
        />
      </div>
      <div className="flex items-center justify-end gap-[10px]">
        <CardButton text="이전" value="prev" />
        <CardButton
          text="다음"
          color="green"
          value="next"
          disabled={!passwordsMatch}
        />
      </div>
    </div>
  );
};

export default SecondCard;
