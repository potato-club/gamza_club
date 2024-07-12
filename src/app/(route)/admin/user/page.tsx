import { getTest1 } from '@/app/_api/test';
import React from 'react';
import UserItem from '../_components/UserItem';

const page = async () => {
  const item = await getTest1();
  return (
    <>
      {item.map((item: any) => (
        <UserItem key={item.id} {...item} />
      ))}
    </>
  );
};

export default page;
