'use client';

import React from 'react';
import First from './First';
import Second from './Second';
import Third from './Third';
import { PostSchema } from '@/app/_utils/validator/post2';
import { useFormFunnel } from '@/app/_hooks/useFormFunnel';

const Process = () => {
  const { FormFunnel, setStep } = useFormFunnel<'First' | 'Second' | 'Third'>(
    'First'
  );

  return (
    <FormFunnel>
      <FormFunnel.Step
        name="First"
        schema={PostSchema.first}
        onNext={() => setStep('Second')}
      >
        <First />
      </FormFunnel.Step>

      <FormFunnel.Step
        name="Second"
        schema={PostSchema.second}
        onNext={() => setStep('Third')}
        onPrev={() => setStep('First')}
      >
        <Second />
      </FormFunnel.Step>

      <FormFunnel.Step
        name="Third"
        schema={PostSchema.third}
        onSubmit={(data) => {
          console.log('submit!! : ', data);
        }}
        onPrev={() => setStep('Second')}
      >
        <Third />
      </FormFunnel.Step>
    </FormFunnel>
  );
};

export default Process;
