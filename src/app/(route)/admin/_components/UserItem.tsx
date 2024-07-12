import React from 'react';

interface Props {
  id: number;
  name: string;
  email: string;
  major: string;
}
const UserItem = ({ ...props }: Props) => {
  return (
    <div className="flex gap-x-5 justify-between items-center border border-stone-200 bg-white w-full h-[70px] px-5 py-3 rounded-xl">
      {/* 유저이름, 학과 */}
      <div className="flex gap-x-5 h-6 justify-center w-[230px] ">
        <span>{props.id.toString().padStart(4, '0')}</span>
        <span>{props.name}</span>
        <span className="w-[110px] text-ellipsis overflow-hidden">
          {props.major || '학과 없음'}
        </span>
      </div>

      {/* 유저 이메일 */}
      <div className="flex justify-center items-center border border-stone-200 rounded-full bg-white w-8 h-8">
        <img
          src="/character.jpg"
          width={30}
          height={30}
          className="rounded-full"
        />
      </div>
      <div className="w-[380px] text-ellipsis overflow-hidden">
        <span className="leading-8 ">{props.email}</span>
      </div>

      {/* 버튼 */}
      <div className="flex gap-x-4">
        <button className="normal-button text-green-600 hover:shadow-inner">
          승인
        </button>
        <button className="normal-button text-red-400 hover:shadow-inner">
          삭제
        </button>
      </div>
    </div>
  );
};

export default UserItem;