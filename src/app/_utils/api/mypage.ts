import apiClient from "./apiClient";

export const getUserProject = async () => {
  const res = await apiClient.get(`/project/user/list`);
  return res;
};
