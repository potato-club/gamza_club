import { NextResponse } from 'next/server';
import axios from 'axios';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/reissue`,
      {
        headers: {
          refreshToken: `Bearer ${
            (await cookies()).get('refreshToken')?.value
          }`,
        },
      }
    );

    // 새로 발급받은 at,rt 토큰
    const { authorization, refreshtoken } = response.headers;
    (await cookies()).set('refreshToken', refreshtoken, { httpOnly: true });

    // 클라이언트로 토큰 반환
    return NextResponse.json({ authorization }, { status: 200 });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      const errorCode = error.response?.data?.code;
      const errorMessage = error.response?.data?.error;

      if (errorCode === '5002') {
        return NextResponse.json(
          { error: '로그인이 만료 되었습니다' },
          { status: 450 }
        );
      }

      return NextResponse.json(
        { error: errorMessage || 'Failed to authenticate' },
        { status }
      );
    }

    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
