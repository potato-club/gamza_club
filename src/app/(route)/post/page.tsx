import GamzaCard from '@/app/_components/server/GamzaCard';
import React from 'react';
import Process from './_components/process';

const page = () => {
  return (
    <div className="flex-col gap-6">
      <GamzaCard title={`프로젝트 등록 페이지`} content={<Process />} />
    </div>
  );
};

export default page;
