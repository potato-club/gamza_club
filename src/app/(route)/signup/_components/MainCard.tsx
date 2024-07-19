import React from "react";
import Image from "next/image";
import FirstCard from "./FirstCard";
const MainCard = () => {
  return (
    <div className="w-[626px] h-[416px] rounded-xl border px-[40px] py-[36px] flex gap-[106px] bg-white	">
      <div className="flex flex-col gap-6">
        <Image src="/Logo.svg" width={48} height={48} alt="" />
        <span className="text-black-500 font-bold text-xl">
          회원가입 <br />
          1페이지
        </span>
      </div>
      <FirstCard />
    </div>
  );
};

export default MainCard;
