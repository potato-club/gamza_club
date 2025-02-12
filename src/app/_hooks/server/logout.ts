'use server';

import { cookies } from 'next/headers';

export const logout = async () => {
  try {
    const cookieStore = await cookies();

    const refreshToken = cookieStore.get('refreshToken')?.value;
    if (!refreshToken) throw new Error('토큰값이 없습니다.');

    // 1. refreshToken get => 백엔드 로그아웃 api 요청
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/logout`, {
      headers: {
        RefreshToken: `Bearer ${refreshToken}`,
      },
    });

    // 2. 브라우저 쿠키 삭제
    if (res.status !== 200) throw new Error('백엔드 측 로그아웃 에러');

    cookieStore.delete('refreshToken');
  } catch (err) {
    console.error(err);
    throw new Error('로그아웃 에러');
  }
};
