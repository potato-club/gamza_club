import React from 'react';
import First from './First';
import Second from './Second';
import Third from './Third';

const Process = ({ idx }: { idx: number | undefined }) => {
  switch (idx) {
    case 1:
      return <First />;
    case 2:
      return <Second />;
    case 3:
      return <Third />;
    default:
      return <First />;
  }
};

export default Process;
