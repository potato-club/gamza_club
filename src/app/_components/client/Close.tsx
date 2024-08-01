import React from 'react';

const Close = ({ onClick }: { onClick: () => void }) => {
  return (
    <button className="text-black" onClick={onClick}>
      <img src="/Close.svg" width={24} height={24} />
    </button>
  );
};

export default Close;
