import { RHFCalendar, RHFRadioGroup } from '@/app/_components/client/RHF';
import { CardButton } from '@/app/_components/server/GamzaCard';
import React from 'react';
import { useFormContext } from 'react-hook-form';

interface Props {
  onPrev: () => void;
}
const Second = ({ onPrev }: Props) => {
  const {
    control,
    formState: { errors },
    trigger,
  } = useFormContext();

  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex flex-col gap-y-6 py-7">
        <RHFRadioGroup
          control={control}
          errors={errors}
          name="status"
          label="상태"
          itemList={[
            {
              value: 'plan',
              id: 'plan',
              title: '계획',
              disalbed: true,
            },
            {
              value: 'progress',
              id: 'progress',
              title: '진행',
              disalbed: true,
            },
            {
              value: 'complete',
              id: 'complete',
              title: '완료',
              checked: true,
            },
          ]}
        />
        <RHFCalendar
          control={control}
          errors={errors}
          name="date"
          label="프로젝트 기간"
          id="date"
        />
      </div>
      <div className="flex justify-end gap-x-3">
        <CardButton text="이전" onClick={() => onPrev()} />
        <CardButton text="다음" color="green" />
      </div>
    </div>
  );
};

export default Second;
