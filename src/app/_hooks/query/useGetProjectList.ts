import { getAdminProjectList } from "@/app/_utils/api/approveList";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useGetProjectList = (type: string) => {
  const { data } = useSuspenseQuery<any>({
    queryKey: [`admin${type}ProjectList`],
    queryFn: () => getAdminProjectList(type),
  });
  return { data };
};
