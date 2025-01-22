import { RHFCalendar, RHFRadioGroup } from '@/app/_components/client/RHF';
import { CardButton } from '@/app/_components/server/GamzaCard';
import React from 'react';

const Second = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex flex-col gap-y-6 py-7">
        <RHFRadioGroup
          name="status"
          label="상태"
          itemList={[
            {
              value: 'PLAN',
              id: 'PLAN',
              title: '계획',
              disalbed: true,
            },
            {
              value: 'PROGRESS',
              id: 'PROGRESS',
              title: '진행',
              disalbed: true,
            },
            {
              value: 'DONE',
              id: 'DONE',
              title: '완료',
              checked: true,
            },
          ]}
        />
        <RHFCalendar name="date" label="프로젝트 기간" id="date" />
      </div>
      <div className="flex justify-end gap-x-3">
        <CardButton text="이전" value="prev" />
        <CardButton text="다음" color="green" value="next" />
      </div>
    </div>
  );
};

export default Second;
