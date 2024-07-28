import React from "react";

const ThirdCard = () => {
  const inputStyle =
    "w-[350px] h-[45px] rounded-xl border px-[16px] py-[12px] leading-none text-gray-500";

  return (
    <div className="flex flex-col gap-[21px]">
      <input placeholder="이메일" className={`${inputStyle} mt-[70px]`} />
      <input placeholder="비밀번호" className={inputStyle} />
      <input placeholder="비밀번호 확인" className={inputStyle} />
    </div>
  );
};

export default ThirdCard;
