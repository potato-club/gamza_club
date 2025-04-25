import { useMutation } from "@tanstack/react-query";
import { login, LoginData } from "@/app/_utils/api/login";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const router = useRouter();

  const { mutate, isError, error } = useMutation({
    mutationKey: ["login"],
    mutationFn: (data: LoginData) => login(data),
    onSuccess: (response) => {
      localStorage.setItem("accessToken", response?.data.authorization);
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
