import React from "react";
import CardNumber from "./CardNumber";
import Number from "./Number";
const MainCard = () => {
  return (
    <div className="w-[626px] h-[416px] rounded-xl border px-[40px] py-[36px] flex gap-[106px] bg-white	">
      <Number />
      <CardNumber />
    </div>
  );
};

export default MainCard;
