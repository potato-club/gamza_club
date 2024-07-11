'use client';

import useLogModalState from '@/app/_store/modal/useLogModalState';
import React from 'react';
import LogModal from './LogModal';

const LogWatch = ({ ...props }) => {
  const { isOpen, id, open } = useLogModalState();
  return (
    <div className="text-sm font-semibold">
      <button
        onClick={() => open(props.id)}
        className="normal-button bg-slate-200 p-3 hover:shadow-[0_0_0_2px_rgba(0,0,0)] ease-out duration-300 "
      >
        로그보기
      </button>
      {isOpen && id === props.id && <LogModal {...props} />}
    </div>
  );
};

export default LogWatch;
