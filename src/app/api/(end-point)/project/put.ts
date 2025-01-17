import axios from 'axios';
import { ModifyForm } from './project.type';

export const modifyProject = async ({ ...props }: ModifyForm) => {
  const res = await axios.put(
    `${process.env.NEXT_PUBLIC_API_URL}/project/update/${props.id}`,
    {
      name: props.title,
      state: props.status,
      description: props.description,
      startedDate: props.date.from.toISOString().split('T')[0],
      endedDate: props.date.to.toISOString().split('T')[0],
      collaborators: props.collaborators.join(','),
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }
  );

  return res;
};
