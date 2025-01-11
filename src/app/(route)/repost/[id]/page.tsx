import GamzaCard from '@/app/_components/server/GamzaCard';
import { notFound } from 'next/navigation';
import React, { Suspense, use } from 'react';
import Content from '../_components/Content';

const RepostPage = ({ params }: any) => {
  const id = Number(params.id);
  const post = getdata(id);
  const data = use(post);

  if (!data) {
    return notFound();
  }
  return (
    <Suspense fallback={<div>loading...</div>}>
      <div className="flex-col gap-6">
        <GamzaCard
          title={`애플리케이션 재등록`}
          content={<Content id={id} />}
        />
      </div>
    </Suspense>
  );
};

export default RepostPage;

const getdata = async (id: number) => {
  try {
    const res = await fetch(`https://koreanjson.com/users/${id}`, {
      next: { revalidate: 10 },
    });
    return res.json();
  } catch (err) {
    console.log('getTest1 error!');
  }
};
