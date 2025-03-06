import GamzaCard from '@/app/_components/server/GamzaCard';
import React, { use } from 'react';
import Process from './_components/process';
import { getAtFromRt } from '@/app/_utils/api/server/reissue.server';
import { redirect } from 'next/navigation';
import TokenSetWrapper from '@/app/_components/client/TokenSetWrapper';
import { Suspense } from '@suspensive/react';
import LoadingSpinner from '@/app/_components/server/LoadingSpinner';
import { Skeleton } from '@/app/_components/ui/skeleton';

const Postpage = () => {
  const accessToken = use(getAtFromRt());
  if (!accessToken) redirect('/login');

  return (
    <TokenSetWrapper token={accessToken}>
      <div className="flex-col gap-6">
        <GamzaCard
          title={`프로젝트 등록 페이지`}
          content={
            <Suspense clientOnly fallback={<FallbackUI />}>
              <Process />
            </Suspense>
          }
        />
      </div>
    </TokenSetWrapper>
  );
};

export default Postpage;

const FallbackUI = () => {
  return (
    <div className="flex flex-col gap-y-5 w-full">
      <div className="flex flex-col gap-6 justify-center items-center w-full mx-auto">
        <div className="flex w-full justify-center items-center gap-x-10">
          <Skeleton className="h-5 w-[88px] rounded-md" />
          <Skeleton className="h-10 w-[225px] rounded-md" />
        </div>
        <div className="flex w-full justify-center items-center gap-x-10">
          <Skeleton className="h-5 w-[88px] rounded-md" />
          <Skeleton className="h-10 w-[225px] rounded-md" />
        </div>
        <div className="flex w-full justify-center items-center gap-x-10">
          <Skeleton className="h-5 w-[88px] rounded-md" />
          <Skeleton className="h-10 w-[225px] rounded-md" />
        </div>
      </div>
      <div className="flex justify-end w-full gap-x-3">
        <Skeleton className="h-12 w-[75px] rounded-md" />
        <Skeleton className="h-12 w-[75px] rounded-md" />
      </div>
    </div>
  );
};
