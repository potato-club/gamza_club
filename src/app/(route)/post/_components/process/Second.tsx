import { CardButton } from '@/app/_components/server/GamzaCard';
import Link from 'next/link';
import React from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/app/_components/ui/form';
import { useRouter } from 'next/navigation';
import { useFormContext } from 'react-hook-form';
import { PostSchemaType } from '@/app/_utils/validator/post';
import { Label } from '@/app/_components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/app/_components/ui/radio-group';
import { addDays, format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/app/_utils/utils';
import { Button } from '@/app/_components/ui/button';
import { Calendar } from '@/app/_components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/app/_components/ui/popover';
import { DateRange } from 'react-day-picker';
import { ErrorSpan } from '../FormWrapper';

const Second = () => {
  const router = useRouter();
  const {
    formState: { errors },
    trigger,
    control,
  } = useFormContext<PostSchemaType>();

  const next = async () => {
    const statusValid = await trigger('status');
    const dateValid = await trigger('date');
    if (statusValid && dateValid) {
      router.push('/post?idx=3');
    }
  };

  console.log(errors);

  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex flex-col gap-y-6 py-7">
        <FormField
          control={control}
          name="status"
          render={({ field }) => (
            <div className="flex flex-col gap-y-4">
              {errors.status?.message && (
                <ErrorSpan message={errors.status.message} />
              )}
              <FormItem className="flex gap-x-10 items-center w-full justify-center">
                <FormLabel className="w-[88px] font-normal text-[rgba(0,0,0,0.6)] text-sm">
                  상태
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    className="flex justify-between w-[225px]"
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="plan" id="plan" disabled={true} />
                      <Label className="" htmlFor="plan">
                        계획
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="progress"
                        id="progress"
                        disabled={true}
                      />
                      <Label htmlFor="progress">진행</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="complete"
                        id="complete"
                        checked={true}
                      />
                      <Label htmlFor="complete">완료</Label>
                    </div>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            </div>
          )}
        />
        <FormField
          control={control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex gap-x-10 items-center w-full justify-center">
              <FormLabel className="w-[88px] font-normal text-[rgba(0,0,0,0.6)] text-sm">
                프로젝트 기간
              </FormLabel>
              <div className="flex flex-col">
                {errors.date && (
                  <ErrorSpan message={'유효한 기간을 선택해주세요'} />
                )}
                <FormControl>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        id="date"
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
      </div>
      <div className="flex justify-end gap-x-3">
        <Link href={'/post?idx=1'}>
          <CardButton text="이전" />
        </Link>
        <CardButton text="다음" color="green" onClick={next} />
      </div>
    </div>
  );
};

export default Second;
