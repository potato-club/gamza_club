import apiClient from '@/app/_utils/api/axiosClient';

export const deleteProject = async (projectId: number) => {
  const res = await apiClient.delete(`/project/user/list/${projectId}`);
  return res;
};
