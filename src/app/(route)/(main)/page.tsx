import React from 'react';
import Projects from './_components/Projects';
import Header from './_components/Header';
const page = () => {
  return (
    <div className="flex-col gap-6">
      <Header />
      <Projects />
    </div>
  );
};

export default page;
