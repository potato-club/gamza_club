'use client';

import { Collaborator } from '@/app/_types/RHFProps';
import Image from 'next/image';
import React from 'react';
import { ControllerRenderProps } from 'react-hook-form';

interface Props {
  field: ControllerRenderProps;
  selectUsers: Collaborator[];
}

const CollaboratorList = (props: Props) => {
  const { field, selectUsers } = props;

  if (!selectUsers.length) return null;

  return (
    <div className="flex flex-col gap-1 mt-1 items-center">
      {selectUsers.map((user) => {
        return (
          <div
            key={user.id}
            className="w-full bg-gray-100 text-[#697183] font-semibold rounded-[14px] text-[12px] flex justify-between p-[5px_12px] hover:bg-gray-200 max-w-[225px] ml-[130px]"
          >
            <span>{`✅ ${user.name} (${user.studentId})`}</span>
            <button
              onClick={() => {
                const filterArr = field.value.filter(
                  (item: Collaborator) => item.id !== user.id
                );
                field.onChange([...filterArr]);
              }}
            >
              <Image src="/Close.svg" width={14} height={14} alt="close" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CollaboratorList;
