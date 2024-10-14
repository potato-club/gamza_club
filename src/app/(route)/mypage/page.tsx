import { Suspense, use } from 'react';
import ItemList from './_components/ItemList';
import TypeButton from '@/app/_components/client/TypeButton';
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';

const page = ({ params, searchParams }: any) => {
  const dataType = searchParams.type;
  const list = use(getdata());

  console.log(list);

  if (!list) return notFound();

  return (
    <div>
      <div className="flex gap-x-4 mb-4">
        <TypeButton
          type="wait"
          text={'대기'}
          total={list.waitProjects.length}
          dataType={dataType}
          href={'/mypage?type=wait'}
        />
        <TypeButton
          type="complete"
          text={'완료'}
          total={list.completeProjects.length}
          dataType={dataType}
          href={'/mypage?type=complete'}
        />
      </div>
      <div className="flex flex-col gap-y-4 w-[1010px] h-[520px] border border-stone-200 bg-white rounded-lg py-10 px-8 overflow-auto">
        <Suspense fallback={<div>loading...</div>}>
          {dataType === 'wait' && <ItemList list={list.waitProjects} />}
          {dataType === 'complete' && <ItemList list={list.completeProjects} />}
        </Suspense>
      </div>
    </div>
  );
};

export default page;

const getdata = async () => {
  const accessToken = cookies().get('accessToken')?.value;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/project/user/list`,
      {
        cache: 'no-store',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (res.status === 401 || res.status === 500) return;

    return res.json();
  } catch (err) {
    console.log(' error!');
  }
};
