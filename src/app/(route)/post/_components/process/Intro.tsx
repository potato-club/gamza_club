import {
  RHFPlatformSelector,
  RHFRadioGroup,
} from '@/app/_components/client/RHF';
import { CardButton } from '@/app/_components/server/GamzaCard';
import React from 'react';
import { Button } from '@/app/_components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/app/_components/ui/dialog';
import { Input } from '@/app/_components/ui/input';
import { Label } from '@/app/_components/ui/label';

const Intro = () => {
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
          platformList={[
            { platformId: 1, platformName: 'platform1' },
            { platformId: 2, platformName: 'platform2' },
            { platformId: 3, platformName: 'platform3' },
          ]}
        />

        <Dialog>
          <DialogTrigger className="border border-gray-300 rounded-md py-1 w-[150px] hover:shadow-xl mx-auto">
            플랫폼 생성하기
          </DialogTrigger>
          <DialogContent className="bg-white w-[400px]">
            <DialogHeader>
              <DialogTitle>플랫폼 생성</DialogTitle>
            </DialogHeader>
            <input
              placeholder="생설할 플랫폼 이름을 입력하세요."
              className="py-2 px-2 border border-gray-300 rounded-lg w-full outline-none my-2"
            />
            <button
              className="bg-[#36AE5A] rounded-lg px-2 py-1 font-medium text-white mx-auto"
              onClick={() => {}}
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
