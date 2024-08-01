import { z } from 'zod';
import { Form } from '@/app/_components/ui/form';
import { DefaultValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

interface Props {
  children: React.ReactNode;
  schema: z.AnyZodObject;
  defaultValue: DefaultValues<z.Schema>;
}

const FormWrapper = ({ children, schema, defaultValue }: Props) => {
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
      <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
    </Form>
  );
};

export default FormWrapper;

export const ErrorSpan = ({ message }: { message: string }) => {
  return <span className="text-sm text-rose-500 font-normal">{message}</span>;
};
