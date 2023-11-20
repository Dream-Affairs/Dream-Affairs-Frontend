import React from 'react'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from '@/components/ui/select';

const form = () => {
  return (
    <section>
        <div className="flex flex-col mb-[32px]">
          <Label htmlFor="name" className='mb-[8px]'>Name</Label>
          <Input
            id="name"
            type="text"
          />
        </div>
        <div className="flex flex-col mb-[32px]">
          <Label htmlFor="email" className='mb-[8px]'>E-mail Address</Label>
          <Input
            id="email"
            type="text"
          />
        </div>
              <div className="flex flex-col mb-[32px]">
                <Label className="mb-[8px] font-semibold">Reason</Label>
                <Select value="-- Choose a Feature --">
                  <SelectTrigger className="w-full h-[55px]">
                    <SelectValue placeholder="-- Choose a Feature --" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {/* <SelectLabel>-- Choose a Feature --</SelectLabel> */}
                      <SelectItem value="-- Choose a Feature --">-- Choose a Feature --</SelectItem>
                      <SelectItem value="event-management">Event management</SelectItem>
                      <SelectItem value="guest-management">Guest management</SelectItem>
                      <SelectItem value="meal-management">Meal management</SelectItem>
                      <SelectItem value="registry">Registry</SelectItem>
                      <SelectItem value="invitation">Invitation</SelectItem>
                      <SelectItem value="budgeting">Budgeting</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
        <div className="flex flex-col mb-[32px]">
          <Label htmlFor="email" className='mb-[8px]'>Message</Label>
          <textarea className='w-[100%] h-[193px] border'
            id='message'
          />
        </div>
        <Button variant="secondary" size="lg" className='w-[100%] h-[56px] text-[500]'>Send Message</Button>
    </section>
  )
}

export default form