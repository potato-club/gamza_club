import { HTMLInputTypeAttribute } from 'react';
import {
  Control,
  DefaultValues,
  FieldErrors,
  FieldValues,
} from 'react-hook-form';
import { z } from 'zod';

interface RHFInitTypes {
  control: Control<FieldValues, any>;
  errors: FieldErrors<FieldValues>;
}

export interface RHFWrapperProps {
  children: React.ReactNode;
  schema: z.AnyZodObject;
  defaultValue: DefaultValues<z.Schema>;
  submitHandler: (values: FieldValues) => void;
}

export interface RHFErrorSpanProps {
  message: any;
}

export interface RHFInputProps extends RHFInitTypes {
  name: string;
  label?: string;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
  size: 'large' | 'medium';
}

type RadioItem = {
  value: string;
  id: string;
  title: string;
  disalbed?: boolean;
  checked?: boolean;
};
export interface RHFRadiosProps extends RHFInitTypes {
  name: string;
  label: string;
  itemList: RadioItem[];
  description?: string;
  type?: HTMLInputTypeAttribute;
}

export interface RHFCalendarProps extends RHFInitTypes {
  name: string;
  label: string;
  id: string;
}
