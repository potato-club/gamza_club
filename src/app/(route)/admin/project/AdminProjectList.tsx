"use client";
import React from "react";
import ButtonList from "./components/ButtonList";
import ProjectItemList from "./components/ProjectItemList";
import PendingItemList from "./components/PendingItemtList";
import { useSearchParams, useRouter } from "next/navigation";
import {
  useGetProjectList,
  useGetTotalList,
} from "@/app/_hooks/query/useGetProjectList";
import { Suspense } from "@suspensive/react";
import Loading from "../_components/Loading";

const AdminProjectList = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const dataType =
    (searchParams.get("type") as "create" | "modify" | "pending") ?? "create";
  const page = Number(searchParams.get("page")) || 0;

  const { data } = useGetProjectList(dataType, page);
  const { data: totalCount } = useGetTotalList();

  const totalPages = data?.totalPages || 1;
  const PAGE_GROUP_SIZE = 10;
  const currentGroup = Math.floor(page / PAGE_GROUP_SIZE);
  const startPage = currentGroup * PAGE_GROUP_SIZE;
  const endPage = Math.min(startPage + PAGE_GROUP_SIZE, totalPages);

  const changePage = (newPage: number) => {
    router.push(`/admin/project?type=${dataType}&page=${newPage}`);
  };

  return (
    <div>
      <div>
        <ButtonList dataType={dataType} total={totalCount} />
      </div>
      <div className="flex flex-col gap-y-4 w-[1010px] h-[520px] border border-stone-200 bg-white rounded-lg py-10 px-8 overflow-auto">
        <Suspense clientOnly fallback={<Loading />}>
          {dataType === "pending" ? (
            <PendingItemList list={data.content} />
          ) : (
            <ProjectItemList list={data.content} />
          )}
        </Suspense>

        <div className="flex justify-center items-center mt-4 gap-2">
          <button
            disabled={page === 0}
            onClick={() => changePage(Math.max(page - 1, 0))}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            이전
          </button>

          {currentGroup > 0 && (
            <button
              onClick={() => changePage(startPage - PAGE_GROUP_SIZE)}
              className="px-3 py-1 border rounded"
            >
              ...
            </button>
          )}

          {Array.from(
            { length: endPage - startPage },
            (_, i) => startPage + i
          ).map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => changePage(pageNum)}
              className={`px-3 py-1 border rounded ${
                page === pageNum ? "bg-blue-500 text-white" : ""
              }`}
            >
              {pageNum + 1}
            </button>
          ))}

          {endPage < totalPages && (
            <button
              onClick={() => changePage(endPage)}
              className="px-3 py-1 border rounded"
            >
              ...
            </button>
          )}

          <button
            disabled={page === totalPages - 1}
            onClick={() => changePage(page + 1)}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminProjectList;
