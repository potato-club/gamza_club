import {
  RHFPlatformSelector,
  RHFRadioGroup,
} from '@/app/_components/client/RHF';
import { CardButton } from '@/app/_components/server/GamzaCard';
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/app/_components/ui/dialog';
import { usePlatformQuery } from '@/app/_hooks/react-query/platform';

const Intro = () => {
  const [name, setName] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const { query, mutation } = usePlatformQuery();

  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex flex-col gap-y-6 py-7">
        <RHFRadioGroup
          name="projectType"
          label="프로젝트 타입"
          itemList={[
            {
              value: 'FRONT',
              id: 'FRONT',
              title: '프론트엔드',
            },
            {
              value: 'BACK',
              id: 'BACK',
              title: '백엔드',
            },
          ]}
        />
        <RHFPlatformSelector
          name="platform"
          label="플랫폼 선택"
          platformList={query.data.data.platformResponseDtos}
        />

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger
            className="border border-gray-300 rounded-md py-1 w-[150px] hover:shadow-xl mx-auto"
            onClick={() => setOpen(true)}
          >
            플랫폼 생성하기
          </DialogTrigger>
          <DialogContent className="bg-white w-[400px]">
            <DialogHeader>
              <DialogTitle>플랫폼 생성</DialogTitle>
            </DialogHeader>
            <input
              placeholder="생설할 플랫폼 이름을 입력하세요."
              className="py-2 px-2 border border-gray-300 rounded-lg w-full outline-none my-2"
              onChange={(e) => setName(e.target.value)}
            />
            <button
              className="bg-[#36AE5A] rounded-lg px-2 py-1 font-medium text-white mx-auto"
              onClick={() => {
                mutation.mutate(name, {
                  onSuccess: () => setOpen(false),
                });
              }}
            >
              생성하기
            </button>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex justify-end gap-x-3">
        <CardButton text="다음" color="green" value="next" />
      </div>
    </div>
  );
};

export default Intro;
