import DatePicker from '@/app/_components/client/DatePicker';
import Mutate from '@/app/_components/client/Mutate';
import { CardButton, CardInput } from '@/app/_components/server/GamzaCard';
import InnerLayout from '@/app/_components/server/InnerLayout';
import Link from 'next/link';
import React from 'react';
import Radios from '../../post/_components/Radios';

const Content = ({ id }: { id: number }) => {
  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex flex-col gap-y-6 items-center pt-7">
        {/* <CardInput size="large" placeholder="프로젝트 이름" />
        <CardInput size="large" placeholder="프로젝트 설명" /> */}
      </div>
      <div className="flex flex-col gap-y-6 pb-7">
        <InnerLayout title={'상태'} content={<Radios />} />
        <InnerLayout
          title={'시작일'}
          content={<DatePicker placeholder={'시작일 선택'} />}
        />
        <InnerLayout
          title={'종료일'}
          content={<DatePicker placeholder={'종료일 선택'} />}
        />
      </div>
      <div className="flex justify-end gap-x-3">
        <Link href={'/'}>
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

export default Content;
