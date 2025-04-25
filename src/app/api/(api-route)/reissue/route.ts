import { NextResponse } from "next/server";
import axios from "axios";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get("refreshToken")?.value;

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/reissue`,
      {
        headers: {
          refreshToken: `Bearer ${refreshToken}`,
        },
      }
    );

    const { authorization, refreshtoken } = response.headers;

    cookieStore.set("refreshToken", refreshtoken, { httpOnly: true });

    return NextResponse.json({ authorization }, { status: 200 });
  } catch (error: any) {
    console.error(" reissue 요청 실패:", error);

    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      const errorCode = error.response?.data?.code;
      const errorMessage = error.response?.data?.error;

      if (errorCode === "5002") {
        return NextResponse.json(
          { error: "로그인이 만료 되었습니다" },
          { status: 450 }
        );
      }

      return NextResponse.json(
        {
          error: errorMessage || `refreshToken: ${refreshToken}`,
        },
        { status }
      );
    }

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
