import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/_components/ui/card';
import PortalWrapper from '@/app/_components/client/PortalWrapper';
import Close from '@/app/_components/client/Close';
import useLogModalState from '@/app/_store/modal/useLogModalState';
import Refresh from '@/app/_components/client/Refresh';
import { useContainerLogs } from '@/app/_hooks/react-query/logs';
import { Skeleton } from '@/app/_components/ui/skeleton';

const LogModal = ({ ...props }) => {
  const { close } = useLogModalState();
  const { data, isLoading, refetch, isRefetching } = useContainerLogs(
    props.containerId
  );

  return (
    <PortalWrapper>
      <Card className="flex-col gap-y-4 w-[626px] px-10 py-9 bg-white rounded-3xl">
        <CardHeader className="flex-row justify-between p-0">
          <div className="flex items-center gap-x-2">
            <CardTitle className="text-xl">{props.name}</CardTitle>
            <Refresh onClick={refetch} isLoading={isRefetching} />
          </div>
          <Close onClick={close} />
        </CardHeader>
        <CardContent className="p-0">
          <div className="w-full h-[280px] border border-stone-200 bg-white rounded-xl py-3 px-4 overflow-y-auto ">
            {isLoading || isRefetching ? (
              <SkeletonUI />
            ) : (
              data?.data.map((item: string, idx: number) => (
                <li key={idx} className="my-1 break-words">
                  {item}
                </li>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </PortalWrapper>
  );
};

export default LogModal;

const SkeletonUI = () => {
  return (
    <div className="w-[510px] space-y-2">
      <Skeleton className="block w-[400px] h-6" />
      <Skeleton className="block w-[200px] h-6" />
      <Skeleton className="block w-[250px] h-6" />
      <Skeleton className="block w-[450px] h-6" />
      <Skeleton className="block w-[500px] h-6" />
      <Skeleton className="block w-[510px] h-6" />
      <Skeleton className="block w-[100px] h-6" />
      <Skeleton className="block w-[450px] h-6" />
    </div>
  );
};
