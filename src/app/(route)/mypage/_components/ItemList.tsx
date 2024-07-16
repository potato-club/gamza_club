import React, { use } from 'react';
import Item from './Item';

interface Props {
  list: Promise<any[]>;
}
const ItemList = ({ list }: Props) => {
  const projectData = {
    title: 'HENEIN',
    describe: '헤네인입니다요.',
    status: '완료',
    port: 8080,
    file: 'donggyun.zip',
  };
  const data = use(list);
  console.log(data);
  return (
    <>
      {data.length ? (
        data.map((item, idx) => (
          <Item {...item} project={projectData} key={idx} />
        ))
      ) : (
        <div className="flex justify-center items-center h-full">
          <span className="text-xl font-bold">
            좌측 상단의 데이터 타입을 선택해 주세요.
          </span>
        </div>
      )}
    </>
  );
};

export default ItemList;