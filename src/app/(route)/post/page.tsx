import GamzaCard from '@/app/_components/server/GamzaCard';
import React, { use } from 'react';
import Process from './_components/process';
import { getAtFromRt } from '@/app/_utils/api/server/reissue.server';
import { redirect } from 'next/navigation';
import TokenSetWrapper from '@/app/_components/client/TokenSetWrapper';

const Postpage = () => {
  const accessToken = use(getAtFromRt());
  if (!accessToken) redirect('/login');

  return (
    <TokenSetWrapper token={accessToken}>
      <div className="flex-col gap-6">
        <GamzaCard title={`프로젝트 등록 페이지`} content={<Process />} />
      </div>
    </TokenSetWrapper>
  );
};

export default Postpage;
