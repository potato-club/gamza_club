import { NextResponse } from "next/server";
import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/reissue`,
      {
        headers: {
          Authorization: cookies().get("refresh")?.value,
        },
      }
    );

    const { authorization } = response.headers;

    // 클라이언트로 토큰 반환
    return NextResponse.json({ authorization }, { status: 200 });
  } catch (error) {
    console.error("Error during authentication:", error);

    // 에러 응답 처리
    if (axios.isAxiosError(error)) {
      const status = error.response?.status || 500;
      const message = error.response?.data?.error || "Failed to authenticate";
      return NextResponse.json({ error: message }, { status });
    }

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
