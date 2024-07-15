import React, { Suspense } from 'react';
import ButtonList from './components/ButtonList';
import ProjectItemList from './components/ProjectItemList';

const getdata = async () => {
  try {
    const res = await fetch('https://koreanjson.com/posts', {
      next: { revalidate: 10 },
    });
    return res.json();
  } catch (err) {
    console.log('getTest1 error!');
  }
};

const page = () => {
  const list = getdata();
  return (
    <div>
      <ButtonList />
      <div className="flex flex-col gap-y-4 w-[1010px] h-[520px] border border-stone-200 bg-white rounded-lg py-10 px-8 overflow-auto">
        <Suspense fallback={<div>loading...</div>}>
          <ProjectItemList list={list} />
        </Suspense>
      </div>
    </div>
  );
};

export default page;
