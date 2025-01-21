import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { AppModifyForm } from '@/app/api/(end-point)/project/project.type';
import { appModifyProject } from '@/app/api/(end-point)/project/put';

export const useAppModify = () => {
  const router = useRouter();
  const { mutate } = useMutation({
    mutationKey: ['modifyForm'],
    mutationFn: ({ id, file, port, v_key, tag }: AppModifyForm) =>
      appModifyProject({
        id,
        file,
        port,
        v_key,
        tag,
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
