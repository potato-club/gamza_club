import { CardButton, CardInput } from '@/app/_components/server/GamzaCard';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useFormContext } from 'react-hook-form';
import { PostSchemaType } from '@/app/_utils/validator/post';
import { FormControl, FormField, FormItem } from '@/app/_components/ui/form';
import { ErrorSpan } from '../FormWrapper';

const First = () => {
  const router = useRouter();
  const {
    formState: { errors },
    trigger,
    control,
  } = useFormContext<PostSchemaType>();

  const next = async () => {
    const titleValid = await trigger('title');
    const describeValid = await trigger('describe');
    if (titleValid && describeValid) {
      router.push('/post?idx=2');
    }
  };

  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex flex-col gap-y-5 p-7 items-center">
        <FormField
          control={control}
          name="title"
          render={({ field }) => (
            <div className="flex flex-col">
              {errors.title?.message && (
                <ErrorSpan message={errors.title.message} />
              )}
              <FormItem className="flex flex-row items-center w-full justify-between">
                <FormControl>
                  <CardInput
                    stringSize="large"
                    placeholder="프로젝트 이름"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            </div>
          )}
        />
        <FormField
          control={control}
          name="describe"
          render={({ field }) => (
            <div className="flex flex-col">
              {errors.describe?.message && (
                <ErrorSpan message={errors.describe.message} />
              )}
              <FormItem className="flex flex-row items-center w-full justify-between">
                <FormControl>
                  <CardInput
                    stringSize="large"
                    placeholder="프로젝트 설명"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            </div>
          )}
        />
      </div>
      <div className="flex justify-end gap-x-3">
        <CardButton text="다음" color="green" onClick={next} />
      </div>
    </div>
  );
};

export default First;
