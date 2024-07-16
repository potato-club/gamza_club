'use client';
import React from 'react';

interface Props {
  className: string;
  text: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
}
const Mutate = ({ className, text, ...props }: Props) => {
  return (
    <button
      className={className}
      onClick={() => {
        alert('mutate!');
      }}
      {...props}
    >
      {text}
    </button>
  );
};

export default Mutate;
