import React from 'react';

const ButtonList = () => {
  return (
    <div className="flex gap-x-4 mb-4">
      <button className="flex normal-button text-[rgba(0,0,0,0.4)] ">
        <span>
          생성 <span>20</span>
        </span>
      </button>
      <button className="normal-button text-[rgba(0,0,0,0.4)]">
        <span>
          수정 <span>3</span>
        </span>
      </button>
    </div>
  );
};

export default ButtonList;
