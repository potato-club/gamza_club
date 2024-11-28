'use client';

import React, { Suspense } from 'react';
import ItemList from './ItemList';
import TypeButton from '@/app/_components/client/TypeButton';
import apiClient from '@/app/_utils/api/axiosClient';
import { useSuspenseQuery } from '@tanstack/react-query';
import Loading from '../loading';

interface Props {
  dataType?: string;
}

const InnerBox = ({ dataType }: Props) => {
  const { data } = useGetUserProjects();

  return (
    <div>
      <div className="flex gap-x-4 mb-4">
        <TypeButton
          type="wait"
          text={'대기'}
          total={data?.data.waitProjects.length}
          dataType={dataType ?? ''}
          href={'/mypage?type=wait'}
        />
        <TypeButton
          type="complete"
          text={'완료'}
          total={data?.data.completeProjects.length}
          dataType={dataType ?? ''}
          href={'/mypage?type=complete'}
        />
      </div>
      <div className="flex flex-col gap-y-4 w-[1010px] h-[520px] border border-stone-200 bg-white rounded-lg py-10 px-8 overflow-auto">
        <Suspense fallback={<Loading />}>
          {dataType === 'wait' && <ItemList list={data?.data.waitProjects} />}
          {dataType === 'complete' && (
            <ItemList list={data?.data.completeProjects} />
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default InnerBox;

const getUserProject = async () => {
  const res = await apiClient.get(`/project/user/list`);
  return res;
};

const useGetUserProjects = () => {
  return useSuspenseQuery({
    queryKey: ['user'],
    queryFn: () => getUserProject(),
  });
};
