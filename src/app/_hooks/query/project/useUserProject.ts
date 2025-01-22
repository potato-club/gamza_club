import { getUserProject } from '@/app/_utils/api/mypage';
import { useSuspenseQuery } from '@tanstack/react-query';

const useUserProjects = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['user'],
    queryFn: () => getUserProject(),
  });

  return data;
};

export default useUserProjects;
