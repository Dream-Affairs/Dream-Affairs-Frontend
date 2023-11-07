'use client';
import * as React from 'react';
import { PiWarningLight } from 'react-icons/pi';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const page = () => {
  return (
    <div className="flex flex-col justify-center items-start w-full gap-10 p-20">
      <div className="max-w-[700px]">
        <h1 className="text-lg font-semibold mb-3">
          Before building your component from scratch check{' '}
          <a target="_blank" href="https://ui.shadcn.com/docs/components/accordion" className="font-bold text-primary">
            Here (ui library shadcn)
          </a>{' '}
          they probably have what you need, everything is fully customizable, just add classname and style accordingly.
          <br />
          <p className="text-red-500">Please note:</p>
        </h1>
        <ul className="list-decimal list-inside flex flex-col gap-1 text-sm">
          <li>I have not added all the components from the UI library, just the ones I can and i have used.</li>
          <li>
            Please avoid editing the root styles, if you need to change the root styles, please create a new variant or
            just use a clasname on any variant.
          </li>
          <li>Avoid editing the root/component/{'{components}'} folder</li>
          <li>I take God beg you oo, Thank you!</li>
        </ul>
      </div>
      {/* colors */}
      <div className="flex flex-col gap-3 flex-wrap">
        <h1 className="text-2xl font-bold">Colors</h1>
        <div className="flex gap-3 flex-wrap">
          <p className="text-primary font-bold">Primary</p>
          <p className="text-secondary font-bold">Secondary</p>
          <p className="text-accent font-bold">Accent</p>
          <p className="text-background font-bold">Background</p>
          <p className="text-muted font-bold">Muted</p>
        </div>
      </div>
      {/* inputs */}
      <div className="flex flex-col gap-3 flex-wrap">
        <h1 className="text-2xl font-bold">Inputs</h1>
        <div className="flex gap-3 flex-wrap">
          <InputDemo />
        </div>
      </div>
      {/* selects */}
      <div className="flex flex-col gap-3 flex-wrap">
        <h1 className="text-2xl font-bold">Dropdowns</h1>
        <div className="flex gap-3 flex-wrap">
          <div className="flex gap-3 flex-wrap">
            <SelectDemo />
          </div>
          <CalendarDemo />
        </div>
      </div>
      {/* btns */}
      <div className="flex flex-col gap-3 flex-wrap">
        <h1 className="text-2xl font-bold">Buttons</h1>
        <div className="flex gap-3 flex-wrap">
          <ButtonDemo />
        </div>
      </div>
      {/* checkbox */}
      <div className="flex flex-col gap-3 flex-wrap">
        <h1 className="text-2xl font-bold">Checkbox</h1>
        <div className="flex gap-3 flex-wrap">
          <CheckboxDemo />
        </div>
      </div>
    </div>
  );
};

export default page;

const SelectDemo = () => {
  return (
    <>
      <div className="flex flex-col">
        <Label className="mb-3">Dropdown default State</Label>
        <Select>
          <SelectTrigger className="w-full h-[55px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col relative">
        <Label className="mb-3">Dropdown error State</Label>
        <Select>
          <SelectTrigger className="w-full h-[55px] border-red-500">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {true && <p className="text-xs text-red-500">Error</p>}
      </div>
      <div className="flex flex-col">
        <Label className="mb-3">Dropdown hover State</Label>
        <Select>
          <SelectTrigger className="w-full h-[55px]">
            <SelectValue placeholder="Select a fruit">Banana</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {false && <p className="text-xs text-red-500">Error</p>}
      </div>
    </>
  );
};

const InputDemo = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">{'{Label}'}</Label>
        <Input
          id="email"
          type="text"
          placeholder="Empty state no value/error"
          errorMessage="Please fill out this field"
          error={false}
          hasValue={false}
          value={''}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="text"
          placeholder="Empty state no with error"
          errorMessage="{customizable error message}"
          error={true}
          hasValue={false}
          value={''}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="text"
          placeholder="Email"
          errorMessage="Please fill out this field"
          error={false}
          hasValue={true}
          value={'Filled State'}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="text"
          placeholder="Email"
          errorMessage="Please fill out this field"
          error={false}
          hasValue={true}
          value={'Hover State'}
          className="border-primary placeholder:text-gray-200"
        />
      </div>
    </>
  );
};

const ButtonDemo = () => {
  return (
    <>
      <Button variant="default">Default variant</Button>
      <Button variant="secondary">Secondary variant</Button>
      <Button variant="destructive">Destructive variant</Button>
      <Button variant="outline">Ouline variant</Button>
      <Button variant="ghost">Ghost variant</Button>
      <Button variant="link">Link variant</Button>
      <Button variant="disabled">Disabled variant</Button>
    </>
  );
};

const CheckboxDemo = () => {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="pickedADate" />
      <label
        htmlFor="pickedADate"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Use onChecked to set state
      </label>
    </div>
  );
};

const CalendarDemo = () => {
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [pickedDate, setPickedDate] = React.useState<Date | undefined>(new Date());
  const error = false;
  return <></>;
};
