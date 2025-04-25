import { ArrowUpLeftFromCircleIcon } from "lucide-react";
import apiClient from "./apiClient";
import { ClientOnly } from "@suspensive/react";

export const getAdminUserList = async () => {
  const res = await apiClient.get(`/admin/user/approve/list`);
  return res;
};

export const userControl = async (id: number, type: string, value: string) => {
  const status =
    value === "삭제" ? "remove" : value === "승인" ? "approve" : "pending";
  const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/admin`;
  const url = `${baseUrl}/${type}/${status}/${id}`;

  const res =
    status === "remove"
      ? await apiClient.delete(url) // remove는 delete
      : await apiClient.post(url); // approve & pending은 post

  return res;
};

export const getAdminProjectList = async (type: string, page: number) => {
  const res = await apiClient.get(
    `/admin/project/${type}/list?page=${page}&size=5`
  );
  return res.data;
};

export const getAdminTotalList = async () => {
  const createCount = await apiClient.get("/admin/project/create/list");
  const modifyCount = await apiClient.get("/admin/project/modify/list");
  const pendingCount = await apiClient.get("/admin/project/pending/list");
  return {
    create: createCount.data.totalElements,
    modify: modifyCount.data.totalElements,
    pending: pendingCount.data.totalElements,
  };
};
