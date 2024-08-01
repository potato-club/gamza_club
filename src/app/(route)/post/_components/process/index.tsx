'use client';

import React from 'react';
import FormWrapper from '@/app/_components/client/FormWrapper';
import First from './First';
import Second from './Second';
import Third from './Third';
import { PostSchema, defaultValue } from '@/app/_utils/validator/post';

const Process = ({ idx }: { idx: number | undefined }) => {
  return (
    <FormWrapper schema={PostSchema} defaultValue={defaultValue}>
      {idx === 1 ? (
        <First />
      ) : idx === 2 ? (
        <Second />
      ) : idx === 3 ? (
        <Third />
      ) : (
        <First />
      )}
    </FormWrapper>
  );
};

export default Process;
