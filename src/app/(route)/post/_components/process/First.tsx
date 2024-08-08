import { CardButton } from '@/app/_components/server/GamzaCard';
import React from 'react';
import { RHFInput } from '@/app/_components/client/RHForm';
import { useFormContext } from 'react-hook-form';

const First = ({ onNext }: { onNext: () => void }) => {
  const {
    control,
    formState: { errors },
    trigger,
  } = useFormContext();

  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex flex-col gap-y-5 p-7 items-center">
        <RHFInput
          name="title"
          size="large"
          placeholder="프로젝트 이름"
          control={control}
          errors={errors}
        />
        <RHFInput
          name="describe"
          size="large"
          placeholder="프로젝트 설명"
          control={control}
          errors={errors}
        />
      </div>
      <div className="flex justify-end gap-x-3">
        <CardButton
          text="다음"
          color="green"
          onClick={async () => {
            const titleValid = await trigger('title');
            const describeValid = await trigger('describe');
            if (titleValid && describeValid) {
              onNext();
            }
          }}
        />
      </div>
    </div>
  );
};

export default First;
