import React from 'react';
import Projects from './_components/Projects';
import Loading from './_components/Loading';
import { Delay, ErrorBoundary, Suspense } from '@suspensive/react';
import Error from './error';

const Mainpage = () => {
  return (
    <ErrorBoundary fallback={<Error />}>
      <Suspense fallback={<Loading />}>
        <Delay ms={500} fallback={<Loading />}>
          <Projects />
        </Delay>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Mainpage;
