import { useMutation } from "@tanstack/react-query";
import { login, LoginData } from "@/app/_utils/api/login";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
export const useLogin = () => {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);
  const { mutate, isError, error } = useMutation({
    mutationKey: ["login"],
    mutationFn: (data: LoginData) => login(data),
    onSuccess: (response) => {
      setCookie("accessToken", response.headers.authorization, {
        httpOnly: true,
        maxAge: 3600,
      });
      alert("로그인에 성공했습니다.");
      console.log(cookies);
      router.push("/");
    },
    onError: (error) => {
      alert("로그인에 실패했습니다.");
    },
  });

  return { mutate, isError, error };
};
