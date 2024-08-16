'use client';

import Link from 'next/link';
import React from 'react';

const ModifyRoute = ({ id }: { id: number }) => {
  return (
    <Link href={`/modify/${id}`}>
      <button className="normal-button bg-slate-200 p-3 hover:shadow-[0_0_0_2px_rgba(0,0,0)] ease-out duration-300 text-sm font-semibold">
        수정하기
      </button>
    </Link>
  );
};

export default ModifyRoute;
