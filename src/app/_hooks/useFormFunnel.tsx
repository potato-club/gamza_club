import { ReactNode, isValidElement, FC, useState, useEffect } from 'react';
import { z } from 'zod';
import { RHFWrapper } from '../_components/client/RHF';
import { useSchemaForm } from './useSchemaForm';

type StepProps = {
  name: string;
  children: ReactNode;
  schema: z.AnyZodObject;
  onNext: () => void;
};

type FunnelProps = {
  children: ReactNode[];
};

interface FunnelComponent extends FC<FunnelProps> {
  Step: FC<StepProps>;
}

type UseFormFunnelReturn<T> = {
  FormFunnel: FunnelComponent;
  setStep: (step: T) => void;
  formData: object;
};

export function useFormFunnel<T>(initialStep: T): UseFormFunnelReturn<T> {
  const [step, setStep] = useState<T>(initialStep);
  const [formData, setFormData] = useState<any>({});

  const Step: FC<StepProps> = ({ children, schema, onNext }) => {
    const { form } = useSchemaForm(schema);
    console.log('실제 form : ', form.watch());

    useEffect(() => {
      form.setValue('title', formData.title);
      form.setValue('describe', formData.describe);
      console.log(formData);
    }, [formData]);
    return (
      <RHFWrapper
        form={form}
        onSubmit={form.handleSubmit((values) => {
          const result = schema.safeParse(values);
          if (result.success) {
            setFormData((prev: any) => ({ ...prev, ...result.data }));
            onNext();
          }
        })}
      >
        {children}
      </RHFWrapper>
    );
  };

  const FormFunnel: FunnelComponent = ({ children }) => {
    const currentStep = children.find(
      (child: ReactNode) => isValidElement(child) && child.props.name === step
    );
    return <>{currentStep}</> || <></>;
  };

  FormFunnel.Step = Step;
  return { FormFunnel, setStep, formData };
}
