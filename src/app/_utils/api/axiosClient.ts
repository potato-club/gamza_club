import axios, { AxiosError } from "axios";
import { NextResponse } from "next/server";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // 5001: AccessToken 만료 처리
    if (error.response?.data.code === "5001" && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { data } = await axios.get(`/api/reissue`);
        localStorage.setItem("accessToken", data.authorization);

        apiClient.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${data.authorization}`;
        const response = NextResponse.next();
        response.cookies.set("refreshToken", data.refreshToken, {
          path: "/",
          httpOnly: true,
        });
        return apiClient(originalRequest);
      } catch (reissueError: unknown) {
        if (axios.isAxiosError(reissueError)) {
          const { response } = reissueError;
          console.log(response);
          if (response && response.status === 300) {
            localStorage.removeItem("accessToken");
            const response = NextResponse.next();
            response.cookies.set("refreshtoken", "", {
              maxAge: -1,
              path: "/",
            });
            alert("로그인이 만료되었습니다. 다시 로그인 해주세요.");
            window.location.href = "/login";
          }
        } else {
          console.error("예상치 못한 에러 발생:", reissueError);
        }

        return Promise.reject(reissueError);
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
