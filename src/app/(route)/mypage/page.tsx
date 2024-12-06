import { redirect } from 'next/navigation';
import { getAtFromRt } from '@/app/_utils/api/server/reissue.server';
import { ErrorBoundary, Suspense } from '@suspensive/react';
import InnerBox from './_components/InnerBox';
import Error from './error';
import Loading from './_components/Loading';

const Mypage = async ({ searchParams }: any) => {
  const { type } = await searchParams;
  const auth = await authCheck();

  if (!auth) return redirect('/login');

  return (
    <ErrorBoundary fallback={<Error />}>
      <Suspense clientOnly fallback={<Loading />}>
        <InnerBox dataType={type} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default Mypage;

const authCheck = async () => {
  const resHeader = await getAtFromRt();
  return !!resHeader;
};
