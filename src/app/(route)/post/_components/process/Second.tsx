import {
  RHFCalendar,
  RHFListSelector,
  RHFRadioGroup,
} from '@/app/_components/client/RHF';
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
        <RHFListSelector
          name="collaborators"
          label="공동 작업자"
          userList={[
            { id: 1, name: '동균', studentId: '201910050' },
            { id: 2, name: '효성', studentId: '201910052' },
            { id: 3, name: '성훈', studentId: '201910051' },
            { id: 4, name: '이삭', studentId: '200710060' },
            { id: 5, name: '지현', studentId: '202010050' },
            { id: 6, name: '호빈', studentId: '202010011' },
          ]}
        />
      </div>
      <div className="flex justify-end gap-x-3">
        <CardButton text="이전" value="prev" />
        <CardButton text="다음" color="green" value="next" />
      </div>
    </div>
  );
};

export default Second;
