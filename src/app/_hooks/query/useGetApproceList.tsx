import { useQuery } from "@tanstack/react-query";
import { getApproveList } from "@/app/_utils/api/approveList";

export const useApproveList = () => {
  const { isLoading, error, data } = useQuery<any>({
    queryKey: ["userList"],
    queryFn: () => getApproveList(),
  });
  return { isLoading, error, data };
};
