import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/user/login`,
      { email, password }
    );
    const { authorization, refreshtoken } = response.headers;

    (await cookies()).set("refreshToken", refreshtoken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    return NextResponse.json({ authorization }, { status: 200 });
  } catch (error) {
    console.error("Error during authentication:", error);

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
