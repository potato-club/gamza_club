import { z, ZodObject } from 'zod';
import { Form } from '@/app/_components/ui/form';
import { DefaultValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/app/_components/ui/button';

interface Props<T> {
  children: React.ReactNode;
  schema: z.AnyZodObject;
  defaultValue: DefaultValues<T>; // Add defaultValue prop
}

const FormWrapper = <T extends z.Schema>({
  children,
  schema,
  defaultValue,
}: Props<T>) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValue,
  });

  const onSubmit = (values: z.infer<typeof schema>) => {
    console.log(values);
    console.log('form 제출!!');
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-y-4"
      >
        {children}
      </form>
    </Form>
  );
};

export default FormWrapper;

export const ErrorSpan = ({ message }: { message: string }) => {
  return <span className="text-sm text-rose-500 font-normal">{message}</span>;
};
