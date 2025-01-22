import React from 'react';
import Item from './Item';

interface Props {
  list: Project[];
}
interface Project {
  id: number;
  title: string;
  port: number;
  file: string;
}

const ItemList = ({ list }: Props) => {
  return (
    <>
      {list.length ? (
        list.map((item, idx: number) => (
          <Item {...item} key={item.id} countId={idx + 1} />
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
