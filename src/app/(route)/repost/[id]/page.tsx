import GamzaCard from '@/app/_components/server/GamzaCard';
import { notFound } from 'next/navigation';
import React, { Suspense, use } from 'react';
import Content from '../_components/Content';
import { getAtFromRt } from '@/app/_utils/api/server/reissue.server';

const RepostPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const accessToken = use(getAtFromRt());
  if (!accessToken) return notFound();

  const { id } = use(params);
  const post = getdata(Number(id), accessToken);
  const data = use(post);

  if (!data) return notFound();

  return (
    <Suspense fallback={<div>loading...</div>}>
      <div className="flex-col gap-6">
        <GamzaCard
          title={`애플리케이션 재등록`}
          content={<Content {...data} />}
        />
      </div>
    </Suspense>
  );
};

export default RepostPage;

const getdata = async (id: number, accessToken: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/project/app/${id}`,
      {
        cache: 'no-store',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (
      res.status === 401 ||
      res.status === 404 ||
      res.status === 403 ||
      res.status === 500
    )
      return notFound();

    return res.json();
  } catch (err) {
    console.log(err);
  }
};
