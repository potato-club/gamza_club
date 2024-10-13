import { useMutation, useQuery } from '@tanstack/react-query';
import { createProject } from '@/app/_utils/post';
import { useRouter } from 'next/navigation';
export type PostData = {
  zip: File;
  title: string;
  description: string;
  status: string;
  date: DateType;
  port: string;
  v_key: string | null;
  tag: string;
};
type DateType = {
  from: Date;
  to: Date;
};

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
    }: PostData) =>
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
