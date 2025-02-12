import React from 'react';
import Projects from './_components/Projects';
import Loading from './_components/Loading';
import { Delay, ErrorBoundary, Suspense } from '@suspensive/react';
import Error from './error';
import Header from '@/app/_components/client/Header/Header';

const Mainpage = () => {
  return (
    <div className="main-background min-h-screen flex flex-col items-center">
      <Header />
      <div className="flex-col gap-6">
        <ErrorBoundary fallback={<Error />}>
          <Suspense fallback={<Loading />}>
            <Delay ms={500} fallback={<Loading />}>
              <Projects />
            </Delay>
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Mainpage;
