import { useMutation, useQuery } from '@tanstack/react-query';
import { createProject } from '@/app/_utils/post';

export type PostData = {
  zip: File;
  title: string;
  description: string;
  status: string;
  date: DateType;
  port: string;
  v_key: string | null;
};
type DateType = {
  from: Date;
  to: Date;
};

export const usePostForm = () => {
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
    }: PostData) =>
      createProject({ zip, title, description, status, date, port, v_key }),
    onSuccess: () => {},
    onError: (error) => {
      alert('잠시후에 다시 시도해주세요.');
    },
  });

  return { mutate };
};
