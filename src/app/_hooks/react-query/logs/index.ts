import { fetchLogs } from '@/app/_utils/api/logs';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const useContainerLogs = (containerId: string) =>
  useQuery(logsQueries.detail(containerId));

const logsQueries = {
  all: () => ['logs'],
  detail: (containerId: string) =>
    queryOptions({
      queryKey: [...logsQueries.all(), containerId],
      queryFn: () => fetchLogs(containerId),
    }),
};
