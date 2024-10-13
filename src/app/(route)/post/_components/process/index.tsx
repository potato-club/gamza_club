'use client';

import React from 'react';
import First from './First';
import Second from './Second';
import Third from './Third';
import { PostSchema } from '@/app/_utils/validator/post';
import { useFormFunnel } from '@/app/_hooks/useFormFunnel';
import { usePostForm } from '@/app/_hooks/query/usePost';

const Process = () => {
  const { FormFunnel, setStep } = useFormFunnel<'First' | 'Second' | 'Third'>(
    'First'
  );
  const { mutate } = usePostForm();

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
        onSubmit={(data) =>
          mutate({
            zip: data.file,
            title: data.title,
            description: data.describe,
            status: data.status,
            date: data.date,
            port: data.port,
            v_key: data.v_key,
            tag: data.tag,
          })
        }
        onPrev={() => setStep('Second')}
      >
        <Third />
      </FormFunnel.Step>
    </FormFunnel>
  );
};

export default Process;
