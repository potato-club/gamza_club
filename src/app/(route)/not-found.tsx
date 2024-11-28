import Image from 'next/image';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col gap-y-8 justify-center items-center bg-background min-h-screen">
      <Image src="/Logo.svg" width={100} height={100} alt="gamza-logo" />
      <h1 className="font-bold text-4xl">요청한 페이지를 찾을 수 없습니다.</h1>
      <button className="max-w-fit h-11 normal-button px-6 bg-[#36AE5A]">
        <a href="http://localhost:3000" className="font-bold text-white">
          홈으로 가기
        </a>
      </button>
    </div>
  );
};

export default NotFoundPage;
