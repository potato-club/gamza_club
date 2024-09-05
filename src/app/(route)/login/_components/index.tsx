"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { RHFInput } from "@/app/_components/client/RHF";
import { CardButton } from "@/app/_components/server/GamzaCard";
import axios from "axios";

const Login = () => {
  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post("http://3.34.207.58:8080/user/login", {
        email: data.email,
        password: data.password,
      });

      if (response.status === 200) {
        alert("로그인에 성공했습니다!");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Failed to login:",
          error.response?.data || error.message
        );
        alert("로그인에 실패했습니다. 다시 시도해주세요.");
      } else {
        console.error("Error:", error);
      }
    }
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
