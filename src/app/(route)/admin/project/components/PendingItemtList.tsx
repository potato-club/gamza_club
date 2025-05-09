"use client";
import React, { use } from "react";
import PendingItem from "./PendingItem";

interface Props {
  list: any;
}

const PendingItemList = ({ list }: Props) => {
  return (
    <>
      {list.length ? (
        list.map((item: any, idx: any) => <PendingItem {...item} key={idx} />)
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

export default PendingItemList;
