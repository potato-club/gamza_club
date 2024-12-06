import { redirect } from 'next/navigation';
import { getAtFromRt } from '@/app/_utils/api/server/reissue.server';
import Loading from './loading';
// import dynamic from 'next/dynamic';

// const InnerBox = dynamic(() => import('./_components/InnerBox'), {
//   ssr: false,
//   loading: () => <Loading />,
// });
import InnerBox from './_components/InnerBox';
import { Suspense } from '@suspensive/react';

const Mypage = async ({ searchParams }: any) => {
  const { type } = await searchParams;
  const auth = await authCheck();

  if (!auth) return redirect('/login');

  return (
    <Suspense fallback={<Loading />}>
      {/* <InnerBox dataType={dataType} /> */}
    </Suspense>
  );
};

export default Mypage;

const authCheck = async () => {
  const resHeader = await getAtFromRt();
  return resHeader;
};
