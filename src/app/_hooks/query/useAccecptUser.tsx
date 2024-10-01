import { useMutation, useQuery } from "@tanstack/react-query";
import { userControl } from "../../_utils/approveList";

export const useAccectUser = (id: number, type: string, value: string) => {
  const { mutate, isError, error } = useMutation({
    mutationKey: ["userControl"],
    mutationFn: () => userControl(id, type, value),
    onSuccess: () => {
      alert(`${id}의 학생이 ${value} 되었습니다`);
    },
    onError: (error) => {
      alert("잠시후에 다시 시도해주세요.");
    },
  });

  return { mutate };
};
