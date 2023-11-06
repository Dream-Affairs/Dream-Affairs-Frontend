'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface DatePickerProps {
  error?: boolean;
  disabled?: boolean;
  date: Date | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

export function DatePicker({ error, disabled, date, setDate }: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger
        disabled={disabled}
        className={cn(
          `flex h-[55px] w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 outline-none ring-0 transition-colors duration-200 ease-in-out hover:border-accent
         ${error && 'border-red-500 bg-red-50 text-red-500 placeholder:text-red-500 focus:border-red-500'}
    
        ${date && 'bg-[hsl(232,52%,94%,0.5)] text-black  focus:border-[hsl(232,52%,94%,0.5)]'}
        `,
        )}
        asChild
      >
        <Button
          variant={'outline'}
          className={cn('w-full justify-start text-left font-normal', !date && 'text-muted-foreground')}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
      </PopoverContent>
    </Popover>
  );
}
