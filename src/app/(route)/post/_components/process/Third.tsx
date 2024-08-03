import { CardButton } from '@/app/_components/server/GamzaCard';
import React from 'react';
import { RHFInput } from '@/app/_components/client/RHForm';
import { useFormContext } from 'react-hook-form';

const Third = ({ onPrev }: { onPrev: () => void }) => {
  const {
    control,
    formState: { errors },
    trigger,
  } = useFormContext();

  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex flex-col gap-y-6 items-center p-7">
        <RHFInput
          control={control}
          errors={errors}
          name="file"
          size="medium"
          placeholder="업로드"
          label="애플리케이션 업로드"
          type="file"
        />
        <RHFInput
          control={control}
          errors={errors}
          name="port"
          size="medium"
          placeholder="포트 번호"
          label="내부 포트"
        />
      </div>
      <div className="flex justify-end gap-x-3">
        <CardButton text="이전" onClick={() => onPrev()} />
        <CardButton type="submit" text="제출" color="green" />
      </div>
    </div>
  );
};

export default Third;
