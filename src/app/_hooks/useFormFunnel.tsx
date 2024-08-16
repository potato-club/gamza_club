import { ReactNode, isValidElement, FC, useState, useEffect } from 'react';
import { FieldValues } from 'react-hook-form';
import { z } from 'zod';
import { RHFWrapper } from '../_components/client/RHF';
import { useSchemaForm } from './useSchemaForm';

type StepProps = {
  name: string;
  children: ReactNode;
  schema: z.AnyZodObject;
  onNext?: () => void;
  onPrev?: () => void;
  onSubmit?: (data: FieldValues) => void;
};

type FunnelProps = {
  children: ReactNode[] | ReactNode;
};

interface FunnelComponent extends FC<FunnelProps> {
  Step: FC<StepProps>;
}

type UseFormFunnelReturn<T> = {
  FormFunnel: FunnelComponent;
  setStep: (step: T) => void;
};

export function useFormFunnel<T>(initialStep: T): UseFormFunnelReturn<T> {
  const [step, setStep] = useState<T>(initialStep);
  const [formData, setFormData] = useState<any>({});

  const Step: FC<StepProps> = ({ children, schema, ...props }) => {
    const { form } = useSchemaForm(schema);

    useEffect(() => {
      for (const key in formData) {
        if (formData[key]) {
          form.setValue(key, formData[key]);
        }
      }
    }, [formData]);

    return (
      <RHFWrapper
        form={form}
        onSubmit={form.handleSubmit((values, e) => {
          const value = (
            e?.nativeEvent as SubmitEvent
          )?.submitter?.getAttribute('value');

          const result = schema.safeParse(values);
          if (result.success) {
            setFormData((prev: any) => ({
              ...prev,
              ...result.data,
            }));
          }

          if (value === 'next' && props.onNext) props.onNext();
          else if (value === 'prev' && props.onPrev) props.onPrev();
          else if (value === 'submit' && props.onSubmit)
            props.onSubmit({ ...formData, ...result.data });
        })}
      >
        {children}
      </RHFWrapper>
    );
  };

  const FormFunnel: FunnelComponent = ({ children }) => {
    const innerComponent = isValidElement(children)
      ? [children]
      : (children as ReactNode[]);

    const currentStep = innerComponent.find(
      (child: ReactNode) => isValidElement(child) && child.props.name === step
    );

    return <>{currentStep}</> || <></>;
  };

  FormFunnel.Step = Step;
  return { FormFunnel, setStep };
}
