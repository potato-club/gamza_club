import { CardButton, CardInput } from '@/app/_components/server/GamzaCard';
import Link from 'next/link';
import React from 'react';

const First = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex flex-col gap-y-6 p-7 items-center">
        <CardInput size="large" placeholder="프로젝트 이름" />
        <CardInput size="large" placeholder="프로젝트 설명" />
      </div>
      <div className="flex justify-end gap-x-3">
        <Link href={'/post?idx=2'}>
          <CardButton text="다음" color="green" />
        </Link>
      </div>
    </div>
  );
};

export default First;
