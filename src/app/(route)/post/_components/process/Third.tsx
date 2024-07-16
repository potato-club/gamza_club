import Mutate from '@/app/_components/client/Mutate';
import { CardButton, CardInput } from '@/app/_components/server/GamzaCard';
import InnerLayout from '@/app/_components/server/InnerLayout';
import Link from 'next/link';
import React from 'react';

const Third = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex flex-col gap-y-6 items-center p-7">
        <InnerLayout
          title={'애플리케이션 업로드'}
          content={<CardInput size="medium" type="file" />}
        />
        <InnerLayout
          title={'내부 포트'}
          content={<CardInput size="medium" placeholder="포트 번호" />}
        />
      </div>
      <div className="flex justify-end gap-x-3">
        <Link href={'/post?idx=2'}>
          <CardButton text="이전" />
        </Link>
        <Mutate
          text="요청"
          className="normal-button bg-[#36AE5A] text-white font-bold"
        />
      </div>
    </div>
  );
};

export default Third;
