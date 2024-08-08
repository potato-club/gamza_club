'use client';

import React from 'react';
import { RHFWrapper } from '@/app/_components/client/RHForm';
import { defaultValue, PostSchema } from '@/app/_utils/validator/post';
import { useFunnel } from '@/app/_hooks/useFunnel';
import First from './First';
import Second from './Second';
import Third from './Third';

const Process = () => {
  const { Funnel, setStep } = useFunnel<'First' | 'Second' | 'Third'>('First');

  return (
    <RHFWrapper
      schema={PostSchema}
      defaultValue={defaultValue}
      submitHandler={(values) => {
        const result = PostSchema.safeParse(values);
        if (result.success) {
          alert('제출완료!!!');
        } else {
          alert('입력 폼을 다시 확인해주세요.');
        }
      }}
    >
      <Funnel>
        <Funnel.Step name="First">
          <First onNext={() => setStep('Second')} />
        </Funnel.Step>
        <Funnel.Step name="Second">
          <Second
            onNext={async () => setStep('Third')}
            onPrev={() => setStep('First')}
          />
        </Funnel.Step>
        <Funnel.Step name="Third">
          <Third onPrev={() => setStep('Second')} />
        </Funnel.Step>
      </Funnel>
    </RHFWrapper>
  );
};

export default Process;
