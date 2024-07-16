import React from 'react';
import MutateButton from '../../_components/MutateButton';

interface Props {
  id: number;
  name: string;
  email: string;
  major: string;
}
const ProjectItem = ({ ...props }: Props) => {
  return (
    <div className="flex justify-between items-center border border-stone-200 bg-white w-full h-[70px] px-5 py-3 rounded-xl">
      {/* 프로젝트 이름, 학과 */}
      <div className="flex gap-x-5 h-6">
        <span>{props.id.toString().padStart(4, '0')}</span>
        <span className="flex w-[60px] justify-center">
          {props.name || '이름'}
        </span>
        <span className="w-[120px] text-ellipsis overflow-hidden whitespace-nowrap">
          {props.major || '컴퓨터공학과안녕하세'}
        </span>
      </div>

      {/* 유저 이메일 */}
      <div className="flex gap-x-2">
        <div className="flex justify-center items-center border border-stone-200 rounded-full bg-white w-8 h-8">
          <img
            src="/character.jpg"
            width={30}
            height={30}
            className="rounded-full"
          />
        </div>
        <div className="w-[380px] text-ellipsis overflow-hidden">
          <span className="leading-8 ">
            {props.email || 'rlaehdrbs580@naver.com'}
            {props.email || 'rlaehdrbs580@naver.com'}
            {props.email || 'rlaehdrbs580@naver.com'}
          </span>
        </div>
      </div>

      {/* 버튼 */}
      <div className="flex gap-x-4 w-[180px]">
        <MutateButton
          value="승인"
          color="text-green-600"
          id={props.id}
          type="project"
        />
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

export default ProjectItem;
