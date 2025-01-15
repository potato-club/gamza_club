'use client';

import { useErrorBoundaryFallbackProps } from '@suspensive/react';

const Error = () => {
  const { reset, error } = useErrorBoundaryFallbackProps();

  return (
    <div className="flex justify-center items-center flex-col">
      <button onClick={reset}>Try again</button>
      <span className="text-red-600">{error.message}</span>
    </div>
  );
};

export default Error;
