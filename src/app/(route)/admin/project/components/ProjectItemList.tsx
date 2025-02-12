"use client";
import React, { use } from "react";
import ProjectItem from "./ProjectItem";
interface Props {
  list: any;
}
const ProjectItemList = ({ list }: Props) => {
  return (
    <>
      {list.data.length ? (
        list.data.map((item: any, idx: any) => (
          <ProjectItem {...item} key={idx} />
        ))
      ) : (
        <div className="flex justify-center items-center h-full">
          <span className="text-xl font-bold">
            좌측 상단의 데이터 타입을 선택해 주세요.
          </span>
        </div>
      )}
    </>
  );
};

export default ProjectItemList;
