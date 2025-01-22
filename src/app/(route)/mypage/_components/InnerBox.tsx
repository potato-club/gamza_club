'use client';

import React from 'react';
import ItemList from './ItemList';
import TypeButton from '@/app/_components/client/TypeButton';
import useUserProjects from '@/app/_hooks/query/project/useUserProject';

interface Props {
  dataType?: string;
}

const InnerBox = ({ dataType }: Props) => {
  const { data: projects } = useUserProjects();

  return (
    <div>
      <div className="flex gap-x-4 mb-4">
        <TypeButton
          type="wait"
          text={'대기'}
          total={projects.waitProjects.length}
          dataType={dataType ?? ''}
          href={'/mypage?type=wait'}
        />
        <TypeButton
          type="complete"
          text={'완료'}
          total={projects.completeProjects.length}
          dataType={dataType ?? ''}
          href={'/mypage?type=complete'}
        />
      </div>
      <div className="flex flex-col gap-y-4 w-[1010px] h-[520px] border border-stone-200 bg-white rounded-lg py-10 px-8 overflow-auto">
        {dataType === 'wait' && <ItemList list={projects.waitProjects} />}
        {dataType === 'complete' && (
          <ItemList list={projects.completeProjects} />
        )}
      </div>
    </div>
  );
};

export default InnerBox;
