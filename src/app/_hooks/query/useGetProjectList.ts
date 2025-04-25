import {
  getAdminProjectList,
  getAdminTotalList,
} from "@/app/_utils/api/approveList";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useGetProjectList = (type: string, page: number) => {
  const { data } = useSuspenseQuery<any>({
    queryKey: [`admin${type}ProjectList`, page, type],
    queryFn: () => getAdminProjectList(type, page),
  });
  return { data };
};

export const useGetTotalList = () => {
  const { data } = useSuspenseQuery<any>({
    queryKey: ["adminTotalList"],
    queryFn: () => getAdminTotalList(),
  });
  return { data };
};
