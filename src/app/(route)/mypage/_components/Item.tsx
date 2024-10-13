import React from 'react';
import MutateButton from '../../admin/_components/MutateButton';
interface Project {
  id: number;
  title: string;
  describe: string;
  status: string;
  port: number;
  file: string;
}
const Item = ({ ...props }: Project) => {
  return (
    <div className="flex justify-between items-center border border-stone-200 bg-white w-full h-[70px] px-5 py-3 rounded-xl">
      {/* 업로더 이름, 학과 */}
      <div className="flex gap-x-5 h-6">
        <span>{props.id.toString().padStart(4, '0')}</span>
      </div>

      {/* 프로젝트 정보 */}
      <div className="flex justify-between w-[500px] text-ellipsis overflow-hidden">
        <span className="leading-8 ">{props.title}</span>
        <span className="leading-8 ">{props.file}</span>
        <span className="leading-8 ">{props.port}</span>
      </div>

      {/* 버튼 */}
      <div className="flex">
        <MutateButton
          value="삭제"
          color="text-red-400"
          id={props.id}
          type="project"
        />
      </div>
    </div>
  );
};

export default Item;
