import React from 'react';
import Projects from './_components/Projects';
import Loading from './_components/Loading';
import { Delay, ErrorBoundary, Suspense } from '@suspensive/react';
import Error from './error';

const Mainpage = () => {
  return (
    <div className="flex-col gap-6">
      <ErrorBoundary fallback={<Error />}>
        <Suspense fallback={<Loading />}>
          <Delay ms={500} fallback={<Loading />}>
            <Projects />
          </Delay>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Mainpage;
