import apiClient from '@/app/_utils/api/apiClient';
import { useQuery } from '@tanstack/react-query';

const getUserList = async () => {
  const res = await apiClient('/user/list');
  return res;
};

export const useUserList = () => {
  const { data } = useQuery({
    queryKey: ['userList'],
    queryFn: () => getUserList(),
  });

  return { data: data?.data };
};
