import apiClient from '@/app/_utils/api/apiClient';
import { useQuery, QueryClient } from '@tanstack/react-query';

const getUserList = async () => {
  const res = await apiClient('/user/list');
  return res;
};

export const prefetchUserList = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['userList'],
    queryFn: () => getUserList(),
  });
  return { queryClient };
};

export const useUserList = () => {
  const { data } = useQuery({
    queryKey: ['userList'],
    queryFn: () => getUserList(),
  });

  return { data: data?.data };
};
