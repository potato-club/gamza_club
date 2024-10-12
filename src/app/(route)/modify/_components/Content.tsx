'use client';

import {
  RHFInput,
  RHFCalendar,
  RHFRadioGroup,
} from '@/app/_components/client/RHF';
import { CardButton } from '@/app/_components/server/GamzaCard';
import Link from 'next/link';
import React from 'react';
import { useFormFunnel } from '@/app/_hooks/useFormFunnel';
import { ModifySchema } from '@/app/_utils/validator/modify';

const Content = ({ id }: { id: number }) => {
  const { FormFunnel } = useFormFunnel('First');

  return (
    <FormFunnel>
      <FormFunnel.Step
        name="First"
        schema={ModifySchema}
        onSubmit={(data) => {
          console.log(data);
        }}
      >
        <div className="flex flex-col gap-y-9">
          <div className="flex flex-col gap-y-6 items-center">
            <RHFInput name="title" placeholder="프로젝트 이름" size="large" />
            <RHFInput
              name="describe"
              placeholder="프로젝트 설명"
              size="large"
            />
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
            <RHFCalendar name="date" label="개발 기간" id={'modify-date'} />
          </div>

          <div className="flex justify-end gap-x-3">
            <Link href={'/'}>
              <CardButton text="이전" />
            </Link>
            <CardButton
              text="요청"
              type="submit"
              value="submit"
              color="green"
            />
          </div>
        </div>
      </FormFunnel.Step>
    </FormFunnel>
  );
};

export default Content;
