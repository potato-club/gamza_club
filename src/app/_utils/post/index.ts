import { PostData } from '@/app/_hooks/query/usePost';
import axios from 'axios';

export const createProject = async ({ ...props }: PostData) => {
  const formData = new FormData();
  formData.append('zip', props.zip);
  formData.append('name', props.title);
  formData.append('state', props.status);
  formData.append('description', props.description);
  formData.append('startedDate', props.date.from.toISOString().split('T')[0]);
  formData.append('endedDate', props.date.to.toISOString().split('T')[0]);
  formData.append('outerPort', props.port);
  formData.append('tag', 'tag');
  formData.append('variableKey', props.v_key || '');
  formData.append('applicationType', 'CLIENT');

  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/project/create`,
    formData
  );
  return res;
};
