import TypeButton from '@/app/_components/client/TypeButton';
import React from 'react';

interface Props {
  dataType: 'wait' | 'complete';
}
const ButtonList = ({ dataType }: Props) => {
  return (
    <div className="flex gap-x-4 mb-4">
      <TypeButton
        type="wait"
        text={'대기'}
        total={20}
        dataType={dataType}
        href={'/mypage?type=wait'}
      />
      <TypeButton
        type="complete"
        text={'완료'}
        total={3}
        dataType={dataType}
        href={'/mypage?type=complete'}
      />
    </div>
  );
};

export default ButtonList;
