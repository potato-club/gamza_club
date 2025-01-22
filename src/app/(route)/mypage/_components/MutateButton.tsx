'use client';
import React from 'react';

interface Props {
  value: string;
  color: string;
}
const MutateButton = ({ value, color }: Props) => {
  return (
    <button
      className={`normal-button ${color} hover:shadow-inner`}
      onClick={() => {}}
    >
      {value}
    </button>
  );
};

export default MutateButton;
