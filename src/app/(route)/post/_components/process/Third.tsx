import { CardButton } from '@/app/_components/server/GamzaCard';
import React from 'react';
import { RHFFileInput, RHFInput } from '@/app/_components/client/RHF';
import { useFormContext } from 'react-hook-form';

const Third = () => {
  const {
    control,
    formState: { errors },
    watch,
  } = useFormContext();

  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex flex-col gap-y-6 items-center p-7">
        <RHFFileInput
          name="file"
          placeholder="업로드"
          label="애플리케이션 업로드"
        />
        <RHFInput
          name="port"
          size="medium"
          placeholder="포트 번호"
          label="내부 포트"
        />
        <RHFInput
          name="v_key"
          size="medium"
          placeholder="ex) salt 키"
          label="환경 변수"
          disabled={watch().projectType === 'FRONT'}
        />
        <RHFInput
          name="tag"
          size="medium"
          placeholder="ex) v1.0.0"
          label="태그(버전)"
        />
      </div>
      <div className="flex justify-end gap-x-3">
        <CardButton text="이전" value="prev" />
        <CardButton type="submit" text="제출" color="green" value="submit" />
      </div>
    </div>
  );
};

export default Third;
