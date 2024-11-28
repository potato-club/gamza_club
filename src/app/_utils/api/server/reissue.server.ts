import axios from 'axios';
import { cookies } from 'next/headers';

export const getAtFromRt = async () => {
  const refresh = cookies().get('refreshToken')?.value;

  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/reissue`,
      {
        headers: {
          refreshToken: `Bearer ${refresh}`,
        },
      }
    );

    return res.headers;
  } catch (err) {
    console.log('error!');
  }
};
