"use client";
import React from "react";
import { Button } from "@/app/_components/ui/button";
import { Checkbox } from "@/app/_components/ui/checkbox";
import useSignupState from "@/app/_store/signup/useSignupState";

const NextButton = () => {
  const { inc, dec, count } = useSignupState();

  const justify = count !== 0 ? "justify-end" : "justify-between";
  const gap = count !== 0 ? "gap-[10px]" : "gap-[20px]";

  return (
    <div className={` flex items-center ${justify} ${gap} `}>
      {count === 0 ? (
        <div className="flex items-center gap-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className=" decoration-green-500 hover:cursor-pointer"
          >
            회원가입 약관 동의
          </label>
        </div>
      ) : null}
      {count !== 0 ? (
        <Button
          size="signup"
          className=" text-black border-[2px] border-gray-300 hover:bg-white hover:text-green-500 hover:border-[2px] hover:border-green-500"
          onClick={dec}
        >
          이전
        </Button>
      ) : null}
      <Button
        size="signup"
        className="bg-green-500 text-white hover:bg-white hover:text-green-500 hover:border-[2px] hover:border-green-500"
        onClick={inc}
      >
        다음
      </Button>
    </div>
  );
};

export default NextButton;
