import GamzaCard from '@/app/_components/server/GamzaCard';
import { notFound } from 'next/navigation';
import React, { Suspense, use } from 'react';
import Content from '../_components/Content';
import { getAtFromRt } from '@/app/_utils/api/server/reissue.server';
import LoadingSpinner from '@/app/_components/server/LoadingSpinner';
import { prefetchUserList } from '@/app/_hooks/react-query/user/useUserList';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import TokenSetWrapper from '@/app/_components/client/TokenSetWrapper';

const ModifyPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const accessToken = use(getAtFromRt());
  if (!accessToken) return notFound();

  const { id } = use(params);
  const data = use(getdata(Number(id), accessToken || ''));
  if (!data) return notFound();

  const { queryClient } = use(prefetchUserList());

  return (
    <TokenSetWrapper token={accessToken}>
      <Suspense fallback={<LoadingSpinner className="w-[150px] h-[150px]" />}>
        <div className="flex-col gap-6">
          <GamzaCard
            title={`프로젝트 수정`}
            content={
              <HydrationBoundary state={dehydrate(queryClient)}>
                <Content {...data} />
              </HydrationBoundary>
            }
          />
        </div>
      </Suspense>
    </TokenSetWrapper>
  );
};

export default ModifyPage;

const getdata = async (id: number, accessToken: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/project/${id}`,
      {
        cache: 'no-store',
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
