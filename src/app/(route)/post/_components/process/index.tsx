'use client';

import React from 'react';
import First from './First';
import Second from './Second';
import Third from './Third';
import { PostSchema } from '@/app/_utils/validator/post';
import { useFormFunnel } from '@/app/_hooks/funnel/useFormFunnel';
import { usePostForm } from '@/app/_hooks/react-query/project/usePost';
import { Collaborator } from '@/app/_types/RHFProps';
import Intro from './Intro';

const Process = () => {
  const { FormFunnel, setStep } = useFormFunnel<
    'Intro' | 'First' | 'Second' | 'Third'
  >('Intro');
  const { mutate } = usePostForm();

  return (
    <FormFunnel>
      <FormFunnel.Step
        name="Intro"
        schema={PostSchema.intro}
        onNext={() => setStep('First')}
      >
        <Intro />
      </FormFunnel.Step>

      <FormFunnel.Step
        name="First"
        schema={PostSchema.first}
        onNext={() => setStep('Second')}
        onPrev={() => setStep('Intro')}
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
            collaborators: data.collaborators.map(
              (item: Collaborator) => item.id
            ),
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
