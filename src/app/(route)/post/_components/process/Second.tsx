import DatePicker from '@/app/_components/client/DatePicker';
import { CardButton, CardInput } from '@/app/_components/server/GamzaCard';
import InnerLayout from '@/app/_components/server/InnerLayout';
import Link from 'next/link';
import React from 'react';
import Radios from '../RadioGroup';

const Second = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex flex-col gap-y-6 py-7">
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
        <Link href={'/post?idx=1'}>
          <CardButton text="이전" />
        </Link>
        <Link href={'/post?idx=3'}>
          <CardButton text="다음" color="green" />
        </Link>
      </div>
    </div>
  );
};

export default Second;
