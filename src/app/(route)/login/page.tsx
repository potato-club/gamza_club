"use client";
import React from "react";
import GamzaCard from "@/app/_components/server/GamzaCard";
import Login from "./_components";
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();

  const navigateToSignup = () => {
    router.push("/signup");
  };
  return (
    <div className="flex flex-col gap-6">
      <GamzaCard title={"로그인"} content={<Login />} />
      <div className="flex justify-center text-gray-400 gap-2">
        아직 계정이 없나요?{" "}
        <p className="text-green-600 cursor-pointer" onClick={navigateToSignup}>
          회원가입
        </p>
      </div>
    </div>
  );
};

export default Page;
