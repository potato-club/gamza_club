import GamzaCard from '@/app/_components/server/GamzaCard';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import React, { Suspense, use } from 'react';
import Content from '../_components/Content';

const ModifyPage = ({ params }: any) => {
  const id = Number(params.id);
  const post = getdata(id);
  const data = use(post);

  if (!data) return notFound();

  return (
    <Suspense fallback={<div>loading...</div>}>
      <div className="flex-col gap-6">
        <GamzaCard title={`프로젝트 수정`} content={<Content {...data} />} />
      </div>
    </Suspense>
  );
};

export default ModifyPage;

const getdata = async (id: number) => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/project/${id}`,
      {
        next: { revalidate: 10 },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (res.status === 401 || res.status === 404 || res.status === 500) return;

    return res.json();
  } catch (err) {
    console.log(err);
  }
};
