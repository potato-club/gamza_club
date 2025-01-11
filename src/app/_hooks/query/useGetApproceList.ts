import { useQuery } from "@tanstack/react-query";
import { getAdminUserList } from "@/app/_utils/api/approveList";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useGetApproveList = () => {
  const { data } = useSuspenseQuery<any>({
    queryKey: ["adminUserList"],
    queryFn: () => getAdminUserList(),
  });
  return { data };
};
