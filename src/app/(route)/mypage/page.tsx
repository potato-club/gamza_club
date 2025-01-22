import { redirect } from 'next/navigation';
import { getAtFromRt } from '@/app/_utils/api/server/reissue.server';
import { ErrorBoundary, Suspense } from '@suspensive/react';
import InnerBox from './_components/InnerBox';
import Error from './error';
import Loading from './_components/Loading';
import { use } from 'react';
import TokenSetWrapper from '@/app/_components/client/TokenSetWrapper';

interface Props {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

const Mypage = ({ searchParams }: Props) => {
  const { type } = use(searchParams);
  const accessToken = use(getAtFromRt());
  if (!accessToken) return redirect('/login');

  return (
    <TokenSetWrapper token={accessToken}>
      <ErrorBoundary fallback={<Error />}>
        <Suspense clientOnly fallback={<Loading />}>
          <InnerBox dataType={type} />
        </Suspense>
      </ErrorBoundary>
    </TokenSetWrapper>
  );
};

export default Mypage;
