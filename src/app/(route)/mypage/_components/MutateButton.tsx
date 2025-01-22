'use client';

import React from 'react';

interface Props {
  value: string;
  color: string;
  onClick: () => void;
}
const MutateButton = ({ value, color, onClick }: Props) => {
  return (
    <button
      className={`normal-button ${color} hover:shadow-inner`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default MutateButton;
