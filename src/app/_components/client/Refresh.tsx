import React, { useState } from 'react';
import LoadingSpinner from '../server/LoadingSpinner';

interface Props {
  onClick: () => void;
  isLoading: boolean;
}
const Refresh = ({ onClick, isLoading }: Props) => {
  return (
    <button onClick={onClick}>
      {isLoading ? (
        <LoadingSpinner className="text-[rgba(0,0,0,0.6)] w-6 h-6" />
      ) : (
        <img src="/Refresh.svg" width={24} height={24} />
      )}
    </button>
  );
};

export default Refresh;
