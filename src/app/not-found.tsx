import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col gap-y-8 justify-center items-center bg-background min-h-screen">
      <img src="/Logo.svg" width={100} height={100} />
      <h1 className="font-bold text-4xl">요청한 페이지를 찾을 수 없습니다.</h1>
    </div>
  );
};

export default NotFoundPage;
