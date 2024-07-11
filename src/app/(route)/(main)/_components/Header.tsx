import React from 'react';

const Header = () => {
  return (
    <div className="flex gap-6 justify-center">
      <span className="flex justify-center items-center w-[100px] text-2xl font-bold">
        프로젝트
      </span>
      <img src="/Logo.svg" width={48} height={48} />
      <span className="flex justify-center items-center w-[100px] text-2xl font-light text-[rgba(0,0,0,0.3)]">
        팀원
      </span>
    </div>
  );
};

export default Header;
