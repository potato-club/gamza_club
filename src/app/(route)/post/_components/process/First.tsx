import { RHFInput } from '@/app/_components/client/RHF';
import { CardButton } from '@/app/_components/server/GamzaCard';
import React from 'react';

const First = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex flex-col gap-y-5 p-7 items-center">
        <RHFInput name="title" size="large" placeholder="프로젝트 이름" />
        <RHFInput name="describe" size="large" placeholder="프로젝트 설명" />
      </div>
      <div className="flex justify-end gap-x-3">
        <CardButton text="다음" color="green" value="next" />
      </div>
    </div>
  );
};

export default First;
