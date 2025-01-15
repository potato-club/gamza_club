import GamzaCard from '@/app/_components/server/GamzaCard';
import React from 'react';
import Process from './_components/process';
import { getAtFromRt } from '@/app/_utils/api/server/reissue.server';
import { redirect } from 'next/navigation';

const Postpage = async () => {
  const auth = await authCheck();
  if (!auth) redirect('/login');

  return (
    <div className="flex-col gap-6">
      <GamzaCard title={`프로젝트 등록 페이지`} content={<Process />} />
    </div>
  );
};

export default Postpage;

const authCheck = async () => {
  const resHeader = await getAtFromRt();
  return !!resHeader;
};
