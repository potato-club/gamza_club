import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';

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

    if (res.status === 500 || res.status === 401) return;

    return res.headers.get('authorization') || '';
  } catch (err) {
    throw new Error('error!');
  }
};
