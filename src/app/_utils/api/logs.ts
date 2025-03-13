import apiClient from './apiClient';

export const fetchLogs = async (containerId: string) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const res = await apiClient(`/doc/logs/${containerId}`);
  return res;
};
