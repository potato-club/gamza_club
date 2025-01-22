import { createProject } from '@/app/api/(end-point)/project/post';
import { PostForm } from '@/app/api/(end-point)/project/project.type';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const usePostForm = () => {
  const router = useRouter();
  const { mutate, isError, error } = useMutation({
    mutationKey: ['postForm'],
    mutationFn: ({
      zip,
      title,
      description,
      status,
      date,
      port,
      v_key,
      tag,
    }: PostForm) =>
      createProject({
        zip,
        title,
        description,
        status,
        date,
        port,
        v_key,
        tag,
      }),
    onSuccess: () => {
      alert(
        '프로젝트가 정상적으로 생성되었습니다.\n 관리자의 승인을 받아주세요.'
      );
      router.push('/');
    },
    onError: (error) => {
      alert('잠시후에 다시 시도해주세요.');
    },
  });

  return { mutate };
};
