import { FormEventHandler, HTMLInputTypeAttribute } from "react";
import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormReturn,
} from "react-hook-form";

export interface RHFInitTypes {
  control: Control<FieldValues, any>;
  errors: FieldErrors<FieldValues>;
}

export interface RHFWrapperProps {
  children: React.ReactNode;
  form: UseFormReturn;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

export interface RHFErrorSpanProps {
  message: any;
}

export interface RHFInputProps {
  name: string;
  label?: string;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
  size: "large" | "medium" | "small";
}

export interface RHFFileInputProps {
  name: string;
  label?: string;
  placeholder: string;
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
}

export interface RHFCheckBoxProps {
  name: string;
  label: string;
}
