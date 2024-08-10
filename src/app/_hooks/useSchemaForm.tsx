import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { getDefaultsFromSchema } from '../_utils/getDefaultsFromSchema';

export const useSchemaForm = (schema: z.AnyZodObject) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: getDefaultsFromSchema(schema),
  });

  return { form };
};
