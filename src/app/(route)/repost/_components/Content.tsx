'use client';

import { RHFFileInput, RHFInput } from '@/app/_components/client/RHF';
import { CardButton } from '@/app/_components/server/GamzaCard';
import { useFormFunnel } from '@/app/_hooks/funnel/useFormFunnel';
import { RepostSchema } from '@/app/_utils/validator/repost';
import Link from 'next/link';
import React from 'react';

const Content = ({ id }: { id: number }) => {
  const { FormFunnel } = useFormFunnel('First');

  return (
    <FormFunnel>
      <FormFunnel.Step
        name="First"
        schema={RepostSchema}
        onSubmit={(data) => console.log('repost submit 요청!', data)}
      >
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
          </div>
          <div className="flex justify-end gap-x-3">
            <Link href={'/'}>
              <CardButton text="이전" />
            </Link>
            <CardButton text="요청" value="submit" color="green" />
          </div>
        </div>
      </FormFunnel.Step>
    </FormFunnel>
  );
};

export default Content;
