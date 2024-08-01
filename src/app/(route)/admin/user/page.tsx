import React from 'react';
import UserItem from '../_components/UserItem';

const getdata = async () => {
  try {
    const res = await fetch('https://koreanjson.com/users');
    return res.json();
  } catch (err) {
    console.log('getTest1 error!');
  }
};

const page = async () => {
  const item = await getdata();
  return (
    <div className="flex flex-col gap-y-4 w-[1010px] h-[520px] border border-stone-200 bg-white rounded-lg py-10 px-8 overflow-auto">
      {item.map((item: any) => (
        <UserItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default page;
