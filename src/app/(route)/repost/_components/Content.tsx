'use client';

import Mutate from '@/app/_components/client/Mutate';
import {
  RHFFileInput,
  RHFInput,
  RHFWrapper,
} from '@/app/_components/client/RHF';
import { CardButton } from '@/app/_components/server/GamzaCard';
import { useSchemaForm } from '@/app/_hooks/useSchemaForm';
import { RepostSchema } from '@/app/_utils/validator/repost';
import Link from 'next/link';
import React from 'react';

const Content = ({ id }: { id: number }) => {
  const { form } = useSchemaForm(RepostSchema);
  const {
    control,
    formState: { errors },
    getValues,
  } = form;

  return (
    <RHFWrapper
      form={form}
      onSubmit={form.handleSubmit((values) => {
        const result = RepostSchema.safeParse(values);
        if (result.success) alert('repost 제출 완료!');
      })}
    >
      <div className="flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-6 items-center p-7">
          <RHFFileInput
            control={control}
            errors={errors}
            name="file"
            placeholder="업로드"
            label="애플리케이션 업로드"
            fileName={getValues().file && getValues().file.name}
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
          <Link href={'/'}>
            <CardButton text="이전" />
          </Link>
          <Mutate
            text="요청"
            className="normal-button bg-[#36AE5A] text-white font-bold"
          />
        </div>
      </div>
    </RHFWrapper>
  );
};

export default Content;
