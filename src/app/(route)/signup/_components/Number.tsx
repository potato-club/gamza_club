"use client";
import React from "react";
import Image from "next/image";
import useSignupState from "@/app/_store/signup/useSignupState";

const Number = () => {
  const { count } = useSignupState();
  return (
    <div className="flex flex-col gap-6">
      <Image src="/Logo.svg" width={48} height={48} alt="" />
      <span className="text-black-500 font-bold text-xl">
        회원가입 <br />
        {count}페이지
      </span>
    </div>
  );
};

export default Number;
