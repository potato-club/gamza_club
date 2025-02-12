import apiClient from "./apiClient";

export const getAdminUserList = async () => {
  const res = await apiClient.get(`/admin/user/approve/list`);
  return res;
};

export const userControl = async (id: number, type: string, value: string) => {
  const status = value === "거부" ? "refuse" : "approve";
  const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/admin`;
  const url = `${baseUrl}/${type}/${status}/${id}`;
  const res = await apiClient.post(url);
  return res;
};

export const getAdminProjectList = async (type: string) => {
  const res = await apiClient.get(`/admin/project/${type}/list`);
  return res.data.content;
};
export const getAdminApproveList = async () => {
  const res = await apiClient.get(`/admin/project/create/approve/list`);
  return res;
};
