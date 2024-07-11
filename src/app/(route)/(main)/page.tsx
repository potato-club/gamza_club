import React from 'react';

const page = () => {
  return (
    <div className="flex-col gap-6">
      {/* header */}
      <div className="flex gap-6 justify-center">
        <span className="flex justify-center items-center w-[100px] text-2xl font-bold">
          프로젝트
        </span>
        <img src="/Logo.svg" width={48} height={48} />
        <span className="flex justify-center items-center w-[100px] text-2xl font-light text-[rgba(0,0,0,0.3)]">
          팀원
        </span>
      </div>

      {/* content */}
      <div className="h-[650px] border border-stone-200 bg-white rounded-3xl mt-6 md:w-[750px] sm:w-[400px] w-[200px]"></div>
    </div>
  );
};

export default page;
