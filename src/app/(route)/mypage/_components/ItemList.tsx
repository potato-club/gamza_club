import React, { use } from 'react';
import Item from './Item';

interface Props {
  list: any[];
}
const ItemList = ({ list }: Props) => {
  return (
    <>
      {list.length ? (
        list.map((item: any, idx: number) => (
          <Item {...item} id={idx} key={idx} />
        ))
      ) : (
        <div className="flex justify-center items-center h-full">
          <span className="text-xl font-bold">
            프로젝트가 존재하지 않습니다.
          </span>
        </div>
      )}
    </>
  );
};

export default ItemList;
