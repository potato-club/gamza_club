import { userControl } from "@/app/_utils/api/approveList";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAcceptUser = (id: number, type: string, value: string) => {
  const queryClient = useQueryClient();

  const { mutate, isError, error } = useMutation({
    mutationKey: ["userControl"],
    mutationFn: () => userControl(id, type, value),
    onSuccess: () => {
      alert(`${id}의 학생이 ${value} 되었습니다`);
      queryClient.invalidateQueries({ queryKey: ["adminUserList"] }); //데이터를 가져오는 query 에서 queryKey를  queryKey: ["userList"],  이렇게 객체 형식으로 넘겼으면 invalidata 에서도 객체 형식으로 넘겨줘야 한다
    },
    onError: (error) => {
      alert("잠시 후에 다시 시도해주세요.");
    },
  });

  return { mutate, isError, error };
};
