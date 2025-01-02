"use client";
import React from "react";
import UserItem from "../_components/UserItem";
import { useGetApproveList } from "@/app/_hooks/query/useGetApproceList";

const UserList = () => {
  const { data } = useGetApproveList();

  return (
    <div className="flex flex-col gap-y-4 w-[1010px] h-[520px] border border-stone-200 bg-white rounded-lg py-10 px-8 overflow-auto">
      {data?.data?.content.map((data: any) => (
        <UserItem key={data.id} {...data} />
      ))}
    </div>
  );
};

export default UserList;
