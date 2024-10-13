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
  formData.append('tag', props.tag);
  formData.append('variableKey', props.v_key || '');
  formData.append('applicationType', 'CLIENT');
  formData.append('applicationName', props.title);

  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/project/create`,
    formData,
    {
      headers: {
        Authorization:
          'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3NzlmYzc0NzhkMGQ3YzM2YTdiMzk3OWMxZDUwMjA5MGE1ZDliMjhlZjBiZmFmZjhiOWEyZGRlZDhjNTg0ODg3YjM0ZjBkYTk1MDEzZmY5Mzc4NzNlMzg4YzE0MjQ5YjgiLCJpYXQiOjE3Mjg4MDk0ODMsImV4cCI6MTcyODgxMzA4M30.rajzrShFlSdJqOgCx7dP-zGAT0QXH6RxKNFhDVRR9NyF5yjOCmzq_K3PFRCSxB8jru2FRaxd_fVgfOSzXsH0_Q',
      },
    }
  );
  return res;
};
