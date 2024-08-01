import { Suspense } from 'react';
import ButtonList from './_components/ButtonList';
import ItemList from './_components/ItemList';

const page = ({ params, searchParams }: any) => {
  const dataType = searchParams.type;
  const list = getdata(dataType);

  return (
    <div>
      <ButtonList dataType={dataType} />
      <div className="flex flex-col gap-y-4 w-[1010px] h-[520px] border border-stone-200 bg-white rounded-lg py-10 px-8 overflow-auto">
        <Suspense fallback={<div>loading...</div>}>
          <ItemList list={list} />
        </Suspense>
      </div>
    </div>
  );
};

export default page;

const getdata = async (type: undefined | 'wait' | 'complete') => {
  try {
    if (!type) {
      return [];
    } else if (type === 'wait') {
      const res = await fetch(`https://koreanjson.com/posts`, {
        cache: 'no-store',
      });
      return res.json();
    } else {
      const res = await fetch(`https://koreanjson.com/users`, {
        cache: 'no-store',
      });
      return res.json();
    }
  } catch (err) {
    console.log('getTest1 error!');
  }
};
