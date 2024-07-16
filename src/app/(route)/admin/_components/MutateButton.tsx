'use client';
import React from 'react';

interface Props {
  value: string;
  color: string;
  id: number;
  type: 'user' | 'project';
}
const MutateButton = ({ value, color, id, type }: Props) => {
  return (
    <button
      className={`normal-button ${color} hover:shadow-inner`}
      onClick={() => alert(`${id}번 ${type} ${value} 요청`)}
    >
      {value}
    </button>
  );
};

export default MutateButton;
