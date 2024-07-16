import React from 'react';
import TypeButton from './TypeButton';

interface Props {
  dataType: 'modify' | 'create';
}
const ButtonList = ({ dataType }: Props) => {
  return (
    <div className="flex gap-x-4 mb-4">
      <TypeButton type="create" total={20} dataType={dataType} />
      <TypeButton type="modify" total={3} dataType={dataType} />
    </div>
  );
};

export default ButtonList;
