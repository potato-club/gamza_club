import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { ModifyForm } from '@/app/api/(end-point)/project/project.type';
import { modifyProject } from '@/app/api/(end-point)/project/put';

export const useModifyForm = () => {
  const router = useRouter();
  const { mutate } = useMutation({
    mutationKey: ['modifyForm'],
    mutationFn: ({ id, title, description, status, date }: ModifyForm) =>
      modifyProject({
        id,
        title,
        description,
        status,
        date,
      }),
    onSuccess: () => {
      alert('프로젝트가 정상적으로 수정되었습니다.');
      router.push('/');
    },
    onError: (error) => {
      alert('잠시후에 다시 시도해주세요.');
    },
  });

  return { mutate };
};
