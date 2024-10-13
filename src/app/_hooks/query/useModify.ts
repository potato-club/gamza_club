import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { modifyProject } from '@/app/_utils/modify';
export type ModifyData = {
  id: number;
  title: string;
  description: string;
  status: string;
  date: DateType;
};
type DateType = {
  from: Date;
  to: Date;
};

export const useModifyForm = () => {
  const router = useRouter();
  const { mutate } = useMutation({
    mutationKey: ['modifyForm'],
    mutationFn: ({ id, title, description, status, date }: ModifyData) =>
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
