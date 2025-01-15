import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/app/_components/ui/form';
import {
  RHFWrapperProps,
  RHFInputProps,
  RHFErrorSpanProps,
  RHFRadioGroupProps,
  RHFCalendarProps,
  RHFFileInputProps,
  RHFCheckBoxProps,
  RHFListSelectorProps,
  Collaborator,
} from '@/app/_types/RHFProps';
import { Label } from '@/app/_components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/app/_components/ui/radio-group';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/app/_utils/utils';
import { Button } from '@/app/_components/ui/button';
import { Calendar } from '@/app/_components/ui/calendar';
import { Checkbox } from '@/app/_components/ui/checkbox';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/app/_components/ui/popover';
import { FileInput, NormalInput } from './ui';
import { useFormContext } from 'react-hook-form';
import { useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/_components/ui/select';
import CollaboratorList from './ui/CollaboratorList';
import Image from 'next/image';

export const RHFWrapper = ({
  children,
  form,
  onSubmit,
  onClick,
}: RHFWrapperProps) => {
  return (
    <Form {...form}>
      <form onSubmit={onSubmit} onClick={onClick}>
        {children}
      </form>
    </Form>
  );
};

export const RHFErrorSpan = ({ message }: RHFErrorSpanProps) => {
  return <span className="text-sm text-rose-500 font-normal">{message}</span>;
};

export const RHFInput = ({
  name,
  label,
  placeholder,
  size,
  type,
  defaultValue,
}: RHFInputProps) => {
  const {
    control,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  useEffect(() => {
    if (defaultValue) {
      setValue(name, defaultValue);
    }
  }, [defaultValue, name, setValue]);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="flex flex-col">
          {errors[name]?.message && (
            <RHFErrorSpan message={errors[name]?.message} />
          )}
          {label ? (
            <FormItem className="flex gap-x-10 items-center w-full justify-center">
              <FormLabel className="w-[88px] font-normal text-[rgba(0,0,0,0.6)] text-sm">
                {label}
              </FormLabel>
              <FormControl>
                <NormalInput
                  {...field}
                  stringSize={size}
                  type={type}
                  placeholder={placeholder}
                  value={watch(name)}
                />
              </FormControl>
            </FormItem>
          ) : (
            <FormItem className="flex flex-row items-center w-full justify-between">
              <FormControl>
                <NormalInput
                  {...field}
                  stringSize={size}
                  type={type}
                  placeholder={placeholder}
                  value={watch(name)}
                />
              </FormControl>
            </FormItem>
          )}
        </div>
      )}
    />
  );
};

export const RHFFileInput = ({
  name,
  label,
  placeholder,
  defaultValue,
}: RHFFileInputProps) => {
  const {
    control,
    formState: { errors },
    getValues,
    setValue,
  } = useFormContext();

  useEffect(() => {
    if (defaultValue) {
      setValue(name, defaultValue);
    }
  }, [defaultValue, name, setValue]);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="flex flex-col">
          {errors[name]?.message && (
            <RHFErrorSpan message={errors[name]?.message} />
          )}
          {label ? (
            <FormItem className="flex gap-x-10 items-center w-full justify-center">
              <FormLabel className="w-[88px] font-normal text-[rgba(0,0,0,0.6)] text-sm">
                {label}
              </FormLabel>
              <FormControl>
                <FileInput
                  accept="application/zip"
                  field={field}
                  fileName={getValues().file && getValues().file.name}
                />
              </FormControl>
            </FormItem>
          ) : (
            <FormItem className="flex flex-row items-center w-full justify-between">
              <FormControl>
                <FileInput
                  accept="application/zip"
                  field={field}
                  placeholder={placeholder}
                  fileName={getValues().file && getValues().file.name}
                />
              </FormControl>
            </FormItem>
          )}
        </div>
      )}
    />
  );
};

export const RHFRadioGroup = ({
  name,
  label,
  itemList,
}: RHFRadioGroupProps) => {
  const {
    control,
    formState: { errors },
    watch,
  } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="flex flex-col gap-y-4">
          {errors.status?.message && <RHFErrorSpan message={'상태 에러'} />}
          <FormItem className="flex gap-x-10 items-center w-full justify-center">
            <FormLabel className="w-[88px] font-normal text-[rgba(0,0,0,0.6)] text-sm">
              {label}
            </FormLabel>
            <FormControl>
              <RadioGroup
                className="flex justify-between w-[225px]"
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                {itemList.map((radioItem, idx) => (
                  <div className="flex items-center space-x-2" key={idx}>
                    <RadioGroupItem
                      value={radioItem.value}
                      id={radioItem.id}
                      disabled={radioItem.disalbed}
                      checked={radioItem.checked}
                    />
                    <Label className="" htmlFor={radioItem.id}>
                      {radioItem.title}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
          </FormItem>
        </div>
      )}
    />
  );
};

export const RHFCalendar = ({
  name,
  label,
  id,
  defaultValue,
}: RHFCalendarProps) => {
  const {
    control,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext();

  useEffect(() => {
    if (defaultValue) {
      setValue(name, defaultValue);
    }
  }, [defaultValue, name, setValue]);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex gap-x-10 items-center w-full justify-center">
          <FormLabel className="w-[88px] font-normal text-[rgba(0,0,0,0.6)] text-sm">
            {label}
          </FormLabel>
          <div className="flex flex-col">
            {errors.date && (
              <RHFErrorSpan message={'유효한 기간을 선택해주세요'} />
            )}
            <FormControl>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id={id}
                    variant={'outline'}
                    className={cn(
                      'w-[225px] justify-start text-left font-normal bg-white',
                      !field.value && 'text-muted-foreground'
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {field.value?.from ? (
                      field.value.to ? (
                        <>
                          {format(field.value.from, 'yyyy-MM-dd')} -
                          {format(field.value.to, 'yyyy-MM-dd')}
                        </>
                      ) : (
                        format(field.value.from, 'yyyy-MM-dd')
                      )
                    ) : (
                      <span>기간 선택</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white">
                  <Calendar
                    mode="range"
                    selected={{
                      from: field.value.from,
                      to: field.value.to,
                    }}
                    onSelect={field.onChange}
                    className=""
                    disabled={(date) => date > new Date()}
                    numberOfMonths={2}
                  />
                </PopoverContent>
              </Popover>
            </FormControl>
          </div>
        </FormItem>
      )}
    />
  );
};

export const RHFCheckbox = ({ name, label }: RHFCheckBoxProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex items-center ">
          <FormControl>
            <Checkbox
              id={name}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
          <FormLabel htmlFor={name} className="text-sm font-medium">
            {label}
          </FormLabel>
          {errors[name]?.message && (
            <RHFErrorSpan message={errors[name]?.message} />
          )}
        </FormItem>
      )}
    />
  );
};

export const RHFListSelector = ({
  name,
  label,
  userList,
  defaultValue,
}: RHFListSelectorProps) => {
  const {
    control,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext();

  useEffect(() => {
    if (defaultValue) {
      setValue(name, defaultValue);
    }
  }, [defaultValue, name, setValue]);

  const users = userList.filter(
    (user) =>
      !watch()
        .collaborators.map((item: Collaborator) => item.id)
        .includes(user.id)
  );

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="flex flex-col gap-1">
          <FormItem className="flex gap-x-10 items-center w-full justify-center">
            <FormLabel className="w-[88px] font-normal text-[rgba(0,0,0,0.6)] text-sm">
              {label}
            </FormLabel>
            <div className="flex flex-col gap-1">
              <Select
                onValueChange={(value) => {
                  const user = users.find((item) => item.id === Number(value));
                  if (user) field.onChange([...field.value, user]);
                }}
              >
                <FormControl className="w-[225px] bg-white">
                  <SelectTrigger>
                    <SelectValue placeholder="사용자를 선택해 주세요." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white max-h-[130px] h-auto">
                  {users.map((user) => (
                    <SelectItem
                      key={user.id}
                      value={String(user.id)}
                      className="hover:bg-gray-100 hover:cursor-pointer"
                    >
                      <div className="flex gap-3">
                        <Image
                          src={'/Logo.svg'}
                          alt="감자"
                          width={20}
                          height={20}
                        />
                        <span>{`${user.name} (${user.studentId})`}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </FormItem>
          <CollaboratorList field={field} selectUsers={watch().collaborators} />
        </div>
      )}
    />
  );
};
