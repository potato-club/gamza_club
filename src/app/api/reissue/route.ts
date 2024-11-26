import { NextResponse } from "next/server";
import axios from "axios";
import { cookies } from "next/headers";

export async function GET() {
  console.log(cookies().get("refreshToken")?.value);
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/reissue`,
      {
        headers: {
          refreshToken: `Bearer ${cookies().get("refreshToken")?.value}`,
        },
      }
    );

    // 새로 발급받은 Authorization 토큰
    const { authorization, refreshToken } = response.headers;

    // 클라이언트로 토큰 반환
    return NextResponse.json({ authorization }, { status: 200 });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      const errorCode = error.response?.data?.code;
      const errorMessage = error.response?.data?.error;

      if (errorCode === "5002") {
        return NextResponse.json(
          { error: "로그인이 만료 되었습니다 움하하" },
          { status: 300 }
        );
      } else if (status === 401 || status === 500) {
        // 토큰 만료 외 다른 상태 코드에 대한 처리
        console.error("Unauthorized or Internal Server Error.");
        return NextResponse.json(
          { error: errorMessage || "Failed to authenticate" },
          { status }
        );
      }

      // 기타 예외 처리
      return NextResponse.json(
        { error: errorMessage || "Failed to authenticate" },
        { status }
      );
    }

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
