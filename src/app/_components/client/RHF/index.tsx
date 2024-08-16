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
} from '@/app/_types/RHFProps';
import { Label } from '@/app/_components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/app/_components/ui/radio-group';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/app/_utils/utils';
import { Button } from '@/app/_components/ui/button';
import { Calendar } from '@/app/_components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/app/_components/ui/popover';
import { FileInput, NormalInput } from './ui';
import { useFormContext } from 'react-hook-form';

export const RHFWrapper = ({ children, form, onSubmit }: RHFWrapperProps) => {
  return (
    <Form {...form}>
      <form onSubmit={onSubmit}>{children}</form>
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
}: RHFInputProps) => {
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
}: RHFFileInputProps) => {
  const {
    control,
    formState: { errors },
    getValues,
  } = useFormContext();

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

export const RHFCalendar = ({ name, label, id }: RHFCalendarProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

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
