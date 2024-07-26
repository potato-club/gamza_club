import Mutate from '@/app/_components/client/Mutate';
import { CardButton, CardInput } from '@/app/_components/server/GamzaCard';
import Link from 'next/link';
import React from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/app/_components/ui/form';
import { useFormContext } from 'react-hook-form';
import { PostSchemaType } from '@/app/_utils/validator/post';
import { useRouter } from 'next/navigation';

const Third = () => {
  const router = useRouter();

  const {
    formState: { errors },
    trigger,
    control,
  } = useFormContext<PostSchemaType>();

  const submit = async () => {
    const fileValid = await trigger('file');
    const portValid = await trigger('port');
    if (fileValid && portValid) {
      console.log('submit');
    }
  };

  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex flex-col gap-y-6 items-center p-7">
        <FormField
          control={control}
          name="file"
          render={({ field }) => (
            <FormItem className="flex gap-x-10 items-center w-full justify-center">
              <FormLabel className="w-[88px] font-normal text-[rgba(0,0,0,0.6)] text-sm">
                애플리케이션 업로드
              </FormLabel>
              <FormControl>
                {/* <input
                  type={'file'}
                  placeholder="업로드"
                  onChange={(e) => {
                    if (e.target.files) {
                      field.onChange(e.target.files[0]);
                      console.log(e.target.files[0]);
                    }
                  }}
                /> */}
                <CardInput
                  stringSize="medium"
                  type={'file'}
                  placeholder="업로드"
                  onChange={(e) => {
                    if (e.target.files) field.onChange(e.target.files[0]);
                  }}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="port"
          render={({ field }) => (
            <FormItem className="flex gap-x-10 items-center w-full justify-center">
              <FormLabel className="w-[88px] font-normal text-[rgba(0,0,0,0.6)] text-sm">
                내부 포트
              </FormLabel>
              <FormControl>
                <CardInput
                  stringSize="medium"
                  placeholder="포트 번호"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
      <div className="flex justify-end gap-x-3">
        <Link href={'/post?idx=2'}>
          <CardButton text="이전" />
        </Link>
        <CardButton text="제출" color="green" onClick={() => submit()} />
      </div>
    </div>
  );
};

export default Third;
