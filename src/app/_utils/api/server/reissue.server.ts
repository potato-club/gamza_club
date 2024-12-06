import { cookies } from 'next/headers';

export const getAtFromRt = async () => {
  const cookie = await cookies();
  const refresh = cookie.get('refreshToken')?.value;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/reissue`, {
      headers: {
        refreshToken: `Bearer ${refresh}`,
      },
      next: { revalidate: 3600 },
    });

    return res.headers;
  } catch (err) {
    console.log('error!');
  }
};
