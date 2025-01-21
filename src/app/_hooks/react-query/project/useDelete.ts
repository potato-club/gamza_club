import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteProject } from '@/app/api/(end-point)/project/delete';

export const useDeleteUserProject = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ['deleteUserProject'],
    mutationFn: (id: number) => deleteProject(id),
    onSuccess: () => {
      alert('프로젝트가 삭제되었습니다.');
      queryClient.refetchQueries({
        queryKey: ['/project/user/list', localStorage.getItem('accessToken')],
      });
    },
    onError: (error) => {
      alert('잠시후에 다시 시도해주세요.');
    },
  });

  return { mutate };
};
