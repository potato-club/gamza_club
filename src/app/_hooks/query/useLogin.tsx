import { useMutation } from "@tanstack/react-query";
import { login, LoginData } from "@/app/_utils/api/login";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";

export const useLogin = () => {
  const router = useRouter();
  const [, setCookie] = useCookies(["accessToken", "refreshToken"]);

  const { mutate, isError, error } = useMutation({
    mutationKey: ["login"],
    mutationFn: (data: LoginData) => login(data),
    onSuccess: (response) => {
      const accessToken = response.headers.authorization;
      const refreshToken = response.headers.refreshtoken;

      if (accessToken) {
        setCookie("accessToken", accessToken, {
          httpOnly: true,
        });
      }

      if (refreshToken) {
        setCookie("refreshToken", refreshToken, {
          httpOnly: true,
        });
      }

      alert("로그인에 성공했습니다.");
      router.push("/");
    },
    onError: (error) => {
      console.error("로그인 실패:", error);
      alert("로그인에 실패했습니다.");
    },
  });

  return { mutate, isError, error };
};
