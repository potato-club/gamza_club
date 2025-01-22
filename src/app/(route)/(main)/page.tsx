import React, { Suspense } from 'react';
import Projects from './_components/Projects';
import Header from './_components/Header';
import Loading from './_components/Loading';

const page = () => {
  return (
    <div className="flex-col gap-6">
      <Header />
      <Suspense fallback={<Loading />}>
        <Projects />
      </Suspense>
    </div>
  );
};

export default page;
