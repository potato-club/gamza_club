import { ModifyData } from '@/app/_hooks/query/useModify';
import axios from 'axios';

export const modifyProject = async ({ ...props }: ModifyData) => {
  const res = await axios.put(
    `${process.env.NEXT_PUBLIC_API_URL}/project/update/${props.id}`,
    {
      name: props.title,
      state: props.status,
      description: props.description,
      startedDate: props.date.from.toISOString().split('T')[0],
      endedDate: props.date.to.toISOString().split('T')[0],
    },
    {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3NzlmYzc0NzhkMGQ3YzM2YTdiMzk3OWMxZDUwMjA5MGE1ZDliMjhlZjBiZmFmZjhiOWEyZGRlZDhjNTg0ODg3YjM0ZjBkYTk1MDEzZmY5Mzc4NzNlMzg4YzE0MjQ5YjgiLCJpYXQiOjE3Mjg4MjYxNjUsImV4cCI6MTcyODgyOTc2NX0.8KrsapjqPiE-ER_uBoie-05vw93Jfz0zq7gokYU3-oVm01IWn9h3-xh96_DTvk5nq1-hSHxoSliRJnC8sBOuHQ',
      },
    }
  );

  return res;
};
