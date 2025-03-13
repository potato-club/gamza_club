import { FormEventHandler, HTMLInputTypeAttribute } from 'react';
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
  onSubmit: FormEventHandler<HTMLFormElement>;
  onClick: (event: React.MouseEvent<HTMLFormElement>) => void;
}

export interface RHFErrorSpanProps {
  message: any;
}

export interface RHFInputProps {
  name: string;
  label?: string;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
  size: 'large' | 'medium' | 'small';
  defaultValue?: string;
  disabled?: boolean;
}

export interface RHFFileInputProps {
  name: string;
  label?: string;
  placeholder: string;
  defaultValue?: File;
}

type RadioItem = {
  value: string;
  id: string;
  title: string;
  disalbed?: boolean;
  checked?: boolean;
};
export interface RHFRadioGroupProps {
  name: string;
  label: string;
  itemList: RadioItem[];
  description?: string;
  type?: HTMLInputTypeAttribute;
}

export interface RHFCalendarProps {
  name: string;
  label: string;
  id: string;
  defaultValue?: DateType;
}
type DateType = {
  from: Date;
  to: Date;
};

export interface RHFCheckBoxProps {
  name: string;
  label: string;
}

export type Collaborator = {
  id: number;
  name: string;
  studentId: string;
};
export interface RHFListSelectorProps {
  name: string;
  label: string;
  userList: Collaborator[];
  defaultValue?: Collaborator[];
}

type Platform = {
  platformId: number;
  platformName: string;
};
export interface RHFPlatformSelectorProps {
  name: string;
  label: string;
  platformList: Platform[];
  defaultValue?: Platform[];
}
