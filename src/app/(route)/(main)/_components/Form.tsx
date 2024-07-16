'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/app/_components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/app/_components/ui/form';
import { Input } from '@/app/_components/ui/input';
import Link from 'next/link';

const FormSchema = z.object({
  id: z.string().min(2, {
    message: 'id must be at least 2 characters.',
  }),
  password: z.string().min(2, {
    message: 'password must be at least 2 characters.',
  }),
});

export default function InputForm({ projectId }: { projectId: number }) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      id: '',
      password: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    alert('기능 미구현');
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-y-4"
      >
        <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <div className="flex flex-col gap-y-4">
              <FormItem className="flex flex-row items-center w-full justify-between">
                <FormLabel className="w-fit text-sm font-normal text-[rgba(0,0,0,0.6)]">
                  DB 아이디
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="아이디 입력"
                    {...field}
                    className="bg-white w-[352px]"
                  />
                </FormControl>
              </FormItem>
            </div>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <div className="flex flex-col gap-y-4">
              <FormItem className="flex flex-row items-center w-full justify-between">
                <FormLabel className="w-fit text-sm font-normal text-[rgba(0,0,0,0.6)]">
                  DB 비밀번호
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="비밀번호 입력"
                    {...field}
                    className="bg-white w-[352px]"
                    type="password"
                  />
                </FormControl>
              </FormItem>
            </div>
          )}
        />
        <div className="flex justify-between w-full">
          <Link href={`/repost?id=${projectId}`}>
            <Button type="button" className="normal-button px-6 h-12">
              재등록
            </Button>
          </Link>
          <Button
            type="submit"
            className="normal-button px-6 bg-[#36AE5A] text-white h-12"
          >
            확인
          </Button>
        </div>
      </form>
    </Form>
  );
}
