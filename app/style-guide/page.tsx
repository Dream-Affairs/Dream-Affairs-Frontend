'use client';
import * as React from 'react';

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
import { toast } from '@/components/ui/use-toast';
import AccordionComponent from '../faq/(components)/Accordion';
import { general } from '../faq/(components)/data';
import { Modal } from '../../components/ui/ModalTwo';
import { BsCalendar2Date } from 'react-icons/bs';
import { Switch } from '@/components/ui/switch';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const page = () => {
  return (
    <div className="flex flex-col justify-center items-start w-full gap-10 md:p-20 p-5">
      <div className="md:max-w-[700px]">
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
        <div className="flex gap-5 md:gap-3 flex-wrap">
          <InputDemo />
        </div>
      </div>

      {/* toggles */}
      <div className="flex flex-col gap-3 flex-wrap">
        <h1 className="text-2xl font-bold">Toggle</h1>
        <div className="flex gap-3 flex-wrap">
          <ToggleDemo />
        </div>
      </div>

      {/* toast */}
      <div className="flex flex-col gap-3 flex-wrap">
        <h1 className="text-2xl font-bold">Toasts</h1>
        <div className="flex gap-3 flex-wrap">
          <ToastDemo />
        </div>
      </div>

      {/* selects */}
      <div className="flex flex-col gap-3 flex-wrap">
        <h1 className="text-2xl font-bold">Dropdowns</h1>
        <div className="flex gap-3 w-full">
          <SelectDemo />
        </div>
      </div>

      {/* Calendar */}
      <div className="flex flex-col gap-3 flex-wrap">
        <h1 className="text-2xl font-bold">Calendar</h1>
        <div className="flex gap-3 flex-wrap md:flex-nowrap">
          <CalendarDemo />
        </div>
      </div>

      {/* Tooltip */}
      <div className="flex flex-col gap-3 flex-wrap">
        <h1 className="text-2xl font-bold">Tooltip</h1>
        <div className="flex gap-3 flex-wrap md:flex-nowrap">
          <TooltipDemo />
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

      {/* acoordion */}
      <div className="flex flex-col gap-3 flex-wrap">
        <h1 className="text-2xl font-bold">Accordion</h1>
        <div className="flex gap-3 flex-wrap">
          <AccordionDemo />
        </div>
      </div>

      {/* modal */}
      <div className="flex flex-col gap-3 flex-wrap">
        <h1 className="text-2xl font-bold">Modals</h1>
        <div className="flex gap-3 flex-wrap">
          <ModalDemo />
        </div>
      </div>
    </div>
  );
};

export default page;

const SelectDemo = () => {
  const overflow = [
    { name: 'Apple', value: 'apple' },
    { name: 'Banana', value: 'banana' },
    { name: 'Orange', value: 'orange' },
    { name: 'Mango', value: 'mango' },
    { name: 'Grapes', value: 'grapes' },
    { name: 'Strawberry', value: 'strawberry' },
    { name: 'Pineapple', value: 'pineapple' },
    { name: 'Cherry', value: 'cherry' },
    { name: 'Kiwi', value: 'kiwi' },
    { name: 'Watermelon', value: 'watermelon' },
    { name: 'Blueberry', value: 'blueberry' },
    { name: 'Peach', value: 'peach' },
    { name: 'Pear', value: 'pear' },
    { name: 'Raspberry', value: 'raspberry' },
    { name: 'Avocado', value: 'avocado' },
    { name: 'Lemon', value: 'lemon' },
    { name: 'Pomegranate', value: 'pomegranate' },
    { name: 'Plum', value: 'plum' },
    { name: 'Cantaloupe', value: 'cantaloupe' },
    { name: 'Apricot', value: 'apricot' },
  ];
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
      <div className="flex flex-col">
        <Label className="mb-3">Dropdown with scroll</Label>
        <Select>
          <SelectTrigger className="w-full h-[55px]">
            <SelectValue placeholder="Select a fruit"></SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              {overflow.map((item, i) => (
                <SelectItem key={i} value={item.value}>
                  {item.name}
                </SelectItem>
              ))}
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
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Filled State</Label>
        <Input
          id="email"
          type="text"
          placeholder="Filled State"
          errorMessage="Please fill out this field"
          error={false}
          hasValue={true}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Hover State</Label>
        <Input
          id="email"
          type="text"
          placeholder="Hover State"
          errorMessage="Please fill out this field"
          error={false}
          hasValue={true}
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
  const error = false;
  return (
    <>
      <Popover>
        <PopoverTrigger
          disabled={true}
          className={cn(
            `flex h-[55px] rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 outline-none ring-0 transition-colors duration-200 ease-in-out hover:border-accent
   ${error && 'border-red-500'}

  ${date && 'border-green-200'}
  `,
          )}
          asChild
        >
          <Button
            className={cn(
              'w-full justify-start text-left font-normal text-gray-500 hover:bg-background hover:border-primary',
              !date && 'text-muted-foreground',
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, 'PPP') : <span>Disabled</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger
          disabled={false}
          className={cn(
            `flex h-[55px] rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 outline-none ring-0 transition-colors duration-200 ease-in-out hover:border-accent
   ${error && 'border-red-500'}

  ${date && 'border-green-200'}
  `,
          )}
          asChild
        >
          <Button
            className={cn(
              'w-full justify-start text-left font-normal text-gray-500 hover:bg-background hover:border-primary',
              !date && 'text-muted-foreground',
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, 'PPP') : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger
          disabled={false}
          className={cn(
            `flex h-[55px] rounded-lg border border-primary bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 outline-none ring-0 transition-colors duration-200 ease-in-out hover:border-accent
   ${error && 'border-red-500'}

  ${date && 'border-green-200'}
  `,
          )}
          asChild
        >
          <Button
            className={cn(
              'w-full justify-start text-left font-normal text-gray-500 hover:bg-background hover:border-primary',
              !date && 'text-muted-foreground',
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, 'PPP') : <span>Hover state</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger
          disabled={false}
          className={cn(
            `flex h-[55px] rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 outline-none ring-0 transition-colors duration-200 ease-in-out hover:border-accent
   ${error && 'border-red-500'}

  ${true && 'border-green-200'}
  `,
          )}
          asChild
        >
          <Button
            className={cn(
              'w-full justify-start text-left font-normal text-gray-500 hover:bg-background hover:border-primary',
              !date && 'text-muted-foreground',
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, 'PPP') : <span>Filled state</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger
          disabled={false}
          className={cn(
            `flex h-[55px] rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 outline-none ring-0 transition-colors duration-200 ease-in-out hover:border-accent
   ${true && 'border-red-500'}

  ${false && 'border-green-200'}
  `,
          )}
          asChild
        >
          <Button
            className={cn(
              'w-full justify-start text-left font-normal text-gray-500 hover:bg-background hover:border-primary',
              !date && 'text-muted-foreground',
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, 'PPP') : <span>Error state</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
        </PopoverContent>
      </Popover>
    </>
  );
};

const ToastDemo = () => {
  return (
    <>
      <Button
        onClick={() =>
          toast({
            title: 'Scheduled: Catch up',
          })
        }
      >
        Show Toast with Title
      </Button>
      <Button
        onClick={() =>
          toast({
            title: 'Scheduled: Catch up',
            description: 'Friday, February 10, 2023 at 5:57 PM',
          })
        }
      >
        Show Toast with Description
      </Button>
      <Button
        onClick={() =>
          toast({
            title: 'Scheduled: Catch up',
            description: 'Friday, February 10, 2023 at 5:57 PM',
            action: (
              <Button variant="outline" size="sm">
                Undo
              </Button>
            ),
          })
        }
      >
        Show Toast with Action Button
      </Button>
    </>
  );
};

const AccordionDemo = () => {
  return (
    <>
      <AccordionComponent questions={general} />
    </>
  );
};

const ModalDemo = () => {
  return (
    <>
      <Modal
        width="300"
        showXIcon={true}
        btnTiggerText={'Modal with x icon width' + '300'}
        btnTriggerStyle="bg-secondary p-4 rounded-md text-sm font-medium"
      >
        <div className="flex justify-center items-center gap-2 flex-col">
          <h1 className="font-bold text-lg">Save The Date</h1>
          <span className="bg-secondary p-2 rounded-full">
            <BsCalendar2Date className="text-lg" />
          </span>
          <p className="text-center text-sm text-gray-400">
            You have successfully sent out 1050 save the date wedding reminder to your guest list.
          </p>
        </div>
      </Modal>
      <Modal
        width="400"
        showXIcon={true}
        btnTiggerText={'Wider Modal with x icon width' + '400'}
        btnTriggerStyle="bg-muted text-white p-4 rounded-md text-sm font-medium"
      >
        <div className="flex justify-center items-center gap-2 flex-col">
          <h1 className="font-bold text-lg">Save The Date</h1>
          <span className="bg-secondary p-2 rounded-full">
            <BsCalendar2Date className="text-lg" />
          </span>
          <p className="text-center text-sm text-gray-400">
            You have successfully sent out 1050 save the date wedding reminder to your guest list.
          </p>
        </div>
      </Modal>
      <Modal
        width="500"
        showXIcon={true}
        btnTiggerText={'Modal with close button width' + '500'}
        btnTriggerStyle="bg-red-500 text-white p-4 rounded-md text-sm font-medium"
        showCloseBtn={true}
        closeBtnText="Close"
        closeBtnStyle="bg-secondary p-4 rounded-md text-sm font-medium w-full mt-5"
      >
        <div className="flex justify-center items-center gap-2 flex-col">
          <h1 className="font-bold text-lg">Save The Date</h1>
          <span className="bg-secondary p-2 rounded-full">
            <BsCalendar2Date className="text-lg" />
          </span>
          <p className="text-center text-sm text-gray-400">
            You have successfully sent out 1050 save the date wedding reminder to your guest list.
          </p>
        </div>
      </Modal>
      <Modal
        width="600"
        showXIcon={false}
        btnTiggerText={'Modal without x icon width' + '600'}
        btnTriggerStyle="bg-green-500 p-4 rounded-md text-sm font-medium"
        showCloseBtn={true}
        closeBtnText="Close"
        closeBtnStyle="bg-secondary p-4 rounded-md text-sm font-medium w-full mt-5"
      >
        <div className="flex justify-center items-center gap-2 flex-col">
          <h1 className="font-bold text-lg">Save The Date</h1>
          <span className="bg-secondary p-2 rounded-full">
            <BsCalendar2Date className="text-lg" />
          </span>
          <p className="text-center text-sm text-gray-400">
            You have successfully sent out 1050 save the date wedding reminder to your guest list.
          </p>
        </div>
      </Modal>
      <Modal
        width="600"
        showXIcon={false}
        btnTiggerText={<BsCalendar2Date className="text-lg" />}
        btnTriggerStyle="py-2 px-4 bg-secondary rounded-full"
        showCloseBtn={true}
        closeBtnText="Close"
        closeBtnStyle="bg-secondary p-4 rounded-md text-sm font-medium w-full mt-5"
      >
        <div className="flex justify-center items-center gap-2 flex-col">
          <h1 className="font-bold text-lg">Save The Date</h1>
          <span className="bg-secondary p-2 rounded-full">
            <BsCalendar2Date className="text-lg" />
          </span>
          <p className="text-center text-sm text-gray-400">
            You have successfully sent out 1050 save the date wedding reminder to your guest list.
          </p>
        </div>
      </Modal>
      <Modal
        width="700"
        showXIcon={false}
        btnTiggerText={'Modal with another button width' + '700'}
        btnTriggerStyle="bg-accent p-4 rounded-md text-sm font-medium"
        showCloseBtn={true}
        closeBtnText="Close"
        closeBtnStyle="bg-secondary p-4 rounded-md text-sm font-medium w-full mt-5"
        otherBtn={
          <Button variant="destructive" className="w-full mt-5">
            Another button
          </Button>
        }
      >
        <div className="flex justify-center items-center gap-2 flex-col">
          <h1 className="font-bold text-lg">Save The Date</h1>
          <span className="bg-secondary p-2 rounded-full">
            <BsCalendar2Date className="text-lg" />
          </span>
          <p className="text-center text-sm text-gray-400">
            You have successfully sent out 1050 save the date wedding reminder to your guest list.
          </p>
        </div>
      </Modal>
      <Modal
        width="800"
        showXIcon={false}
        btnTiggerText="This is a button lol;
        Overflow Modal, you can give it any width you want, max width is 90vw, max height is 90vh and it will always be centered"
        btnTriggerStyle="bg-primary text-white p-4 rounded-md text-sm font-medium"
        showCloseBtn={true}
        closeBtnText="Close"
        closeBtnStyle="bg-secondary p-4 rounded-md text-sm font-medium w-full mt-5"
        otherBtn={
          <Button variant="destructive" className="w-full mt-5">
            Another button
          </Button>
        }
      >
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
          (el: any, i: any) => (
            <div key={i} className="flex justify-center items-center gap-2 flex-col">
              <h1 className="font-bold text-lg">Save The Date</h1>
              <span className="bg-secondary p-2 rounded-full">
                <BsCalendar2Date className="text-lg" />
              </span>
              <p className="text-center text-sm text-gray-400">
                You have successfully sent out 1050 save the date wedding reminder to your guest list.
              </p>
            </div>
          ),
        )}
      </Modal>
    </>
  );
};

const ToggleDemo = () => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <>
      <div className="flex items-center space-x-2">
        <Switch id="toggle1" checked={toggle} onCheckedChange={() => setToggle((p) => !p)} />
        <Label htmlFor="toggle1">Toggle</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="toggle2" disabled={true} />
        <Label htmlFor="toggle2">Disabled</Label>
      </div>
    </>
  );
};

export function TooltipDemo() {
  return (
    <>
      <TooltipProvider>
        <Tooltip delayDuration={200}>
          <TooltipTrigger asChild>
            <Button>Hover for more info</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip delayDuration={700}>
          <TooltipTrigger asChild>
            <p className="">Hover for more info, Longer delay</p>
          </TooltipTrigger>
          <TooltipContent>
            <div className="max-w-[50vw]> max-h-50vh overflow-auto">
              <ToggleDemo />
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}
