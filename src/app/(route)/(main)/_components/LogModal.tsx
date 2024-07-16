import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/_components/ui/card';
import PortalWrapper from '@/app/_components/client/PortalWrapper';
import Close from '@/app/_components/client/Close';
import useLogModalState from '@/app/_store/modal/useLogModalState';
import Refresh from '@/app/_components/client/Refresh';
import InputForm from './Form';

const LogModal = ({ ...props }) => {
  const { close } = useLogModalState();

  return (
    <PortalWrapper>
      <Card className="flex-col gap-y-4 w-[626px] px-10 py-9 bg-white rounded-3xl">
        <CardHeader className="flex-row justify-between p-0">
          <div className="flex items-center gap-x-2">
            <CardTitle className="text-xl">{props.title}</CardTitle>
            <Refresh onClick={close} isLoading={false} />
          </div>
          <Close onClick={close} />
        </CardHeader>
        <CardContent className="p-0">
          <textarea
            placeholder="🛠️ 아직 로그 기능 미구현 🛠️"
            className="w-full h-[280px] border border-stone-200 bg-white rounded-xl py-3 px-4"
          />
        </CardContent>
        <CardFooter className="flex justify-between p-0">
          <InputForm projectId={props.id} />
        </CardFooter>
      </Card>
    </PortalWrapper>
  );
};

export default LogModal;
