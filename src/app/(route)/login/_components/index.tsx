"use client";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { RHFInput } from "@/app/_components/client/RHF";
import { CardButton } from "@/app/_components/server/GamzaCard";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useLogin } from "@/app/_hooks/query/useLogin";

const Login = () => {
  const methods = useForm();
  const { handleSubmit } = methods;

  const { mutate, isError, error } = useLogin();

  const onSubmit = (data: any) => {
    mutate(data);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-[350px] h-[176px] flex flex-col gap-4">
            <RHFInput name="email" placeholder="이메일" size="large" />
            <RHFInput name="password" placeholder="비밀번호" size="large" />
            <div className={` flex items-center justify-end gap-[20px] `}>
              <CardButton
                text="로그인"
                color="green"
                value="submit"
                type="submit"
              />
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Login;
