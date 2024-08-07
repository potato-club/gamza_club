import { HTMLInputTypeAttribute } from 'react';
import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormReturn,
} from 'react-hook-form';

export interface RHFInitTypes {
  control: Control<FieldValues, any>;
  errors: FieldErrors<FieldValues>;
}

export interface RHFWrapperProps {
  children: React.ReactNode;
  form: UseFormReturn;
  onSubmit: () => void;
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
  value?: any;
}

export interface RHFFileInputProps extends RHFInitTypes {
  name: string;
  label?: string;
  placeholder: string;
  fileName: string;
}

type RadioItem = {
  value: string;
  id: string;
  title: string;
  disalbed?: boolean;
  checked?: boolean;
};
export interface RHFRadioGroupProps extends RHFInitTypes {
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
