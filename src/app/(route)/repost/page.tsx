import GamzaCard from '@/app/_components/server/GamzaCard';
import React from 'react';
import Content from './_components/Content';

const page = ({ searchParams }: any) => {
  const id = searchParams.id;

  return (
    <div className="flex-col gap-6">
      <GamzaCard title={`애플리케이션 재등록`} content={<Content id={id} />} />
    </div>
  );
};

export default page;
