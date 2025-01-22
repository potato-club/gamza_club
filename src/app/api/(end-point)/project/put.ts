import axios from 'axios';
import { AppModifyForm, ModifyForm } from './project.type';
import apiClient from '@/app/_utils/api/apiClient';

export const modifyProject = async ({ ...props }: ModifyForm) => {
  const res = await axios.put(
    `${process.env.NEXT_PUBLIC_API_URL}/project/update/${props.id}`,
    {
      name: props.title,
      state: props.status,
      description: props.description,
      startedDate: props.date.from.toISOString().split('T')[0],
      endedDate: props.date.to.toISOString().split('T')[0],
      collaborators: props.collaborators,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }
  );

  return res;
};

export const appModifyProject = async ({ ...props }: AppModifyForm) => {
  const formData = new FormData();

  const fields = {
    zip: props.file,
    outerPort: props.port,
    tag: props.tag,
    variableKey: props.v_key || '',
  };

  Object.entries(fields).forEach(([key, value]) => {
    formData.append(key, value);
  });

  const res = await apiClient.put(
    `${process.env.NEXT_PUBLIC_API_URL}/project/app/update/${props.id}`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken') || ''}`,
      },
    }
  );
  return res;
};
