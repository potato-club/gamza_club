'use client';

import * as React from 'react';
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

const DatePicker = ({ placeholder }: { placeholder: string }) => {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[225px] justify-start text-left font-normal bg-white',
            !date && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, 'yyyy-MM-dd') : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-white">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          className=""
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
