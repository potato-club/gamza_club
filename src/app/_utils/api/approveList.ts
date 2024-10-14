import axios from "axios";
import apiClient from "./axiosClient";

export const getApproveList = async () => {
  const res = await apiClient.get(
    `${process.env.NEXT_PUBLIC_API_URL}/admin/user/approve/list`
  );
  return res;
};

export const userControl = async (id: number, type: string, value: string) => {
  const status = value === "거부" ? "refuse" : "approve";
  const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/admin`;
  const url = `${baseUrl}/${type}/${status}/${id}`;
  const res = await apiClient.post(url);
  return res;
};
