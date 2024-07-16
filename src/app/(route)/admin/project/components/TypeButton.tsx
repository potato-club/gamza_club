'use client';

import React from 'react';
import Link from 'next/link';

interface Props {
  type: 'create' | 'modify';
  total: number;
  dataType: 'create' | 'modify';
}
const TypeButton = ({ type, total, dataType }: Props) => {
  const classVariants = {
    on: 'flex normal-button text-black border-black',
    off: 'flex normal-button text-[rgba(0,0,0,0.4)]',
  };
  const fontVariants = {
    on: 'flex gap-x-1 font-bold',
    off: 'flex gap-x-1',
  };
  const colorVariants = {
    on: 'text-[#36AE5A]',
    off: '',
  };

  const kr = {
    create: '생성',
    modify: '수정',
  };

  return (
    <Link
      href={`/admin/project?type=${type}`}
      className={dataType === type ? classVariants.on : classVariants.off}
    >
      <div className={dataType === type ? fontVariants.on : fontVariants.off}>
        <span>{kr[type]}</span>
        <span
          className={dataType === type ? colorVariants.on : colorVariants.off}
        >
          {total}
        </span>
      </div>
    </Link>
  );
};

export default TypeButton;
