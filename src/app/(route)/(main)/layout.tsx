import React, { ReactNode } from 'react';
import Header from '@/app/_components/client/Header/Header';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="main-background min-h-svh flex flex-col">
      <div className="min-w-full shadow-lg">
        <Header />
      </div>
      <div className="flex justify-center my-auto">{children}</div>
    </div>
  );
};

export default layout;
