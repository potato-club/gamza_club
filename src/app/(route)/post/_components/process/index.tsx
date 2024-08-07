'use client';

import React, { useEffect } from 'react';
import { useFunnel } from '@/app/_hooks/useFunnel';
import First from './First';
import Second from './Second';
import Third from './Third';
import { PostSchema } from '@/app/_utils/validator/post2';
import { useFormFunnel } from '@/app/_hooks/useFormFunnel';

const Process = () => {
  const { FormFunnel, setStep, formData } = useFormFunnel<
    'First' | 'Second' | 'Third'
  >('First');

  console.log('내가지정한 form : ', formData);
  return (
    <FormFunnel>
      <FormFunnel.Step
        name="First"
        schema={PostSchema.first}
        onNext={() => setStep('Second')}
      >
        <First formData={formData} />
      </FormFunnel.Step>

      <FormFunnel.Step
        name="Second"
        schema={PostSchema.second}
        onNext={() => setStep('Second')}
      >
        <Second onPrev={() => setStep('First')} />
      </FormFunnel.Step>

      <FormFunnel.Step name="Third" schema={PostSchema.third} onNext={() => {}}>
        <Third onPrev={() => setStep('Second')} />
      </FormFunnel.Step>
    </FormFunnel>
  );
};

export default Process;
