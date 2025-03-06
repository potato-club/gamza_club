import {
  useQuery,
  QueryClient,
  useSuspenseQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { createPlatform, platformQueries } from './queries';

export const prefetchUserList = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(platformQueries.list());
  return { queryClient };
};

export const usePlatformQuery = () => {
  const queryClient = useQueryClient();
  const query = useSuspenseQuery(platformQueries.list());

  const mutation = useMutation({
    mutationFn: (platformName: string) => createPlatform(platformName),
    onSuccess: () => {
      queryClient.invalidateQueries(platformQueries.list());
      alert(`플랫폼 생성이 완료되었습니다.`);
    },
  });

  return { query, mutation };
};
