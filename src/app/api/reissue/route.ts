import { NextResponse } from "next/server";
import axios from "axios";
import { cookies } from "next/headers";

export async function GET() {
  console.log("리이슈를 실행 했습니다");
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/reissue`,
      {
        headers: {
          refreshToken: `Bearer ${cookies().get("refreshToken")?.value}`,
        },
      }
    );

    const { authorization } = response.headers;

    // 클라이언트로 토큰 반환
    return NextResponse.json({ authorization }, { status: 200 });
  } catch (error) {
    console.error("Error during authentication:", error);

    if (axios.isAxiosError(error)) {
      const status = error.response?.status;

      if (status === 5002 || status === 401 || status === 500) {
        console.error(
          "Refresh Token expired. Clearing tokens and redirecting to login."
        );
        // RT 만료: 토큰 제거 후 로그인 화면으로 이동
        clearTokens();
        NextResponse.redirect(`${"/login"}`);
      }

      const message = error.response?.data?.error || "Failed to authenticate";
      return NextResponse.json({ error: message }, { status });
    }

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

const clearTokens = () => {
  // localStorage에서 accessToken 제거
  if (typeof window !== "undefined") {
    localStorage.removeItem("access");
  }

  // 쿠키에서 refreshToken 제거 (HTTP Response에 Set-Cookie로 제거 명령 추가)
  const response = NextResponse.next();
  response.cookies.set("refreshtoken", "", {
    maxAge: -1, // 즉시 제거
    path: "/",
  });

  return response;
};
