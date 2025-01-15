import { getUserProject } from '@/app/_utils/api/mypage';
import { useSuspenseQuery } from '@tanstack/react-query';

const useUserProjects = () => {
  const accessToken = localStorage.getItem('accessToken');
  const { data } = useSuspenseQuery({
    queryKey: ['/project/user/list', accessToken],
    queryFn: () => getUserProject(),
  });

  return data;
};

export default useUserProjects;
