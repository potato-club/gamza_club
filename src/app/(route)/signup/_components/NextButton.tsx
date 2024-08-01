"use client";
import React from "react";
import { Button } from "@/app/_components/ui/button";
import { Checkbox } from "@/app/_components/ui/checkbox";
import useSignupState from "@/app/_store/signup/useSignupState";

const NextButton = () => {
  const { inc, dec, count } = useSignupState();

  const justify = count !== 1 ? "justify-end" : "justify-between";
  const gap = count !== 1 ? "gap-[10px]" : "gap-[20px]";

  return (
    <div className="flex items-center justify-end gap-[10px] ">
      <Button
        size="signup"
        className=" text-black border-[2px] border-gray-300 hover:bg-white hover:text-green-500 hover:border-[2px] hover:border-green-500"
        onClick={dec}
      >
        이전
      </Button>

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
