import apiClient from '@/app/_utils/api/apiClient';
import { queryOptions } from '@tanstack/react-query';

const getPlatformList = async () => {
  const res = await apiClient.get('/platform/list');
  return res;
};

export const createPlatform = async (platformName: string) => {
  const res = await apiClient.post('/platform/create', {
    platformName,
  });
  return res;
};

export const platformQueries = {
  all: () => ['platform'],
  listKey: () => [...platformQueries.all(), 'list'],
  list: () =>
    queryOptions({
      queryKey: [...platformQueries.listKey()],
      queryFn: () => getPlatformList(),
    }),
};
