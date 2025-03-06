import apiClient from '@/app/_utils/api/apiClient';
import { PostForm } from './project.type';

export const createProject = async ({ ...props }: PostForm) => {
  const formData = new FormData();

  const fields = {
    zip: props.zip,
    name: props.title,
    state: props.status,
    description: props.description,
    startedDate: props.date.from.toISOString().split('T')[0],
    endedDate: props.date.to.toISOString().split('T')[0],
    outerPort: props.port,
    tag: props.tag,
    variableKey: props.v_key || '',
    collaborators: props.collaborators.join(','),
    projectType: props.projectType,
    platformId: props.platformId.toString(),
  };

  Object.entries(fields).forEach(([key, value]) => {
    formData.append(key, value);
  });

  const res = await apiClient.post(
    `${process.env.NEXT_PUBLIC_API_URL}/project/create`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken') || ''}`,
      },
    }
  );
  return res;
};
