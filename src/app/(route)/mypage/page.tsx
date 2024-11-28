import { Suspense, use } from 'react';
import { redirect } from 'next/navigation';
import { getAtFromRt } from '@/app/_utils/api/server/reissue.server';
import Loading from './loading';
import dynamic from 'next/dynamic';

const InnerBox = dynamic(() => import('./_components/InnerBox'), {
  ssr: false,
  loading: () => <Loading />,
});

const Mypage = ({ searchParams }: any) => {
  const res = use(authCheck());
  const dataType = searchParams.type;

  if (!res) return redirect('/login');

  return (
    <Suspense fallback={<Loading />}>
      <InnerBox dataType={dataType} />
    </Suspense>
  );
};

export default Mypage;

const authCheck = async () => {
  const resHeader = await getAtFromRt();
  return resHeader;
};
