import React from "react";
import MutateButton from "../../_components/MutateButton";

interface Props {
  id: number;
  userName: string;
  name: string;
  email: string;
  major: string;
  status: string;
  description: string;
  title: string;
  describe: string;
  state: string;
  port: number;
  fileUrl: string;
}

const ProjectItem = ({ ...props }: Props) => {
  return (
    <div className="flex justify-between items-center border border-stone-200 bg-white w-full h-[70px] px-5 py-3 rounded-xl">
      {/* 업로더 이름, 학과 */}
      <div className="flex gap-x-5 h-6">
        <span>{props.id.toString().padStart(2, "0")}</span>
        <span className="flex w-[60px] justify-center">
          {props.userName || "이름"}
        </span>
        <span className="w-[120px] text-ellipsis overflow-hidden whitespace-nowrap">
          {props.major || "컴퓨터공학과안녕하세"}
        </span>
      </div>

      {/* 프로젝트 정보 */}
      <div className="w-[380px] text-ellipsis overflow-hidden whitespace-nowrap">
        <div className="leading-8">
          {props.name}
          <a
            href={props.fileUrl}
            download
            className="text-blue-500 underline ml-2"
          >
            .zip파일 다운로드
          </a>
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
