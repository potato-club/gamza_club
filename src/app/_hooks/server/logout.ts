'use server';

import { cookies } from 'next/headers';

export const logout = async () => {
  try {
    const cookieStore = await cookies();
    // 1. refreshToken get => 백엔드 로그아웃 api 요청
    // (axios 로직)

    // 2. 브라우저 쿠키 삭제
    cookieStore.delete('refreshToken');
  } catch (err) {
    throw new Error('로그아웃 에러');
  }
};
