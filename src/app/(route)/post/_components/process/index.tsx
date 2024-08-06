'use client';

import React from 'react';
import { useFunnel } from '@/app/_hooks/useFunnel';
import First from './First';
import Second from './Second';
import Third from './Third';
import { PostSchema } from '@/app/_utils/validator/post';
import { RHFWrapper } from '@/app/_components/client/RHF';

const Process = () => {
  const { Funnel, setStep } = useFunnel<'First' | 'Second' | 'Third'>('First');

  const isValid = (validArr: boolean[]) => {
    return validArr.every((valid) => valid);
  };

  return (
    <RHFWrapper
      schema={PostSchema}
      submitHandler={(values) => {
        const result = PostSchema.safeParse(values);
        if (result.success) {
          alert('제출완료!!!');
          console.log(result.data);
        } else {
          alert('입력 폼을 다시 확인해주세요.');
        }
      }}
    >
      <Funnel>
        <Funnel.Step name="First">
          <First
            onNext={(validArr: boolean[]) => {
              if (isValid(validArr)) setStep('Second');
            }}
          />
        </Funnel.Step>
        <Funnel.Step name="Second">
          <Second
            onNext={(validArr: boolean[]) => {
              if (isValid(validArr)) setStep('Third');
            }}
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
