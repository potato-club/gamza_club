"use client";
import React from "react";
import ButtonList from "./components/ButtonList";
import ProjectItemList from "./components/ProjectItemList";
import { useSearchParams } from "next/navigation";
import { useGetProjectList } from "@/app/_hooks/query/useGetProjectList";
import { Suspense } from "@suspensive/react";
import Loading from "../_components/Loading";

const AdminProjectList = () => {
  const searchParams = useSearchParams();
  const dataType =
    (searchParams.get("type") as "create" | "modify") ?? "create";
  const data = useGetProjectList(dataType);

  return (
    <div>
      <ButtonList dataType={dataType} />
      <div className="flex flex-col gap-y-4 w-[1010px] h-[520px] border border-stone-200 bg-white rounded-lg py-10 px-8 overflow-auto">
        <Suspense clientOnly fallback={<Loading />}>
          <ProjectItemList list={data} />
        </Suspense>
      </div>
    </div>
  );
};

export default AdminProjectList;
