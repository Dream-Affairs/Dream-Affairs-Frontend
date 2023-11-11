import React, { useState } from 'react';
import Camera from '../../../(assets)/camera2.svg';
import Minus from '../../../(assets)/minus-square.svg';
import Add from '../../../(assets)/add-square.svg';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const AddCash: React.FC = () => {
  const inputNumberStyle: React.CSSProperties = {
    WebkitAppearance: 'textfield',
    MozAppearance: 'textfield',
    appearance: 'textfield',
  };
  // This section control increment of quantity
  const [value, setValue] = useState<number>(1);
  const [text, setText] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = event.target.value;

    // Limit the input to 1000 characters
    const limitedText = inputText.slice(0, 1000);

    setText(limitedText);
  };

  const increment = () => {
    setValue((prevValue) => Math.min(prevValue + 1, 100));
  };

  const decrement = () => {
    setValue((prevValue) => Math.max(prevValue - 1, 1));
  };

  return (
    <>
      <div className="mb-16">
        <p className="text-[32px] font-medium leading-none tracking-tight pl-[79px] pt-12 mb-[14px]">
          Add product to registry
        </p>
        <div className="h-[1px] bg-border w-full"></div>
        <section className="flex justify-center gap-11 px-16 mt-12">
          <div>
            <div className="bg-[#E8E8E8] w-[310px] h-[362px] rounded-[8px] flex flex-col items-center gap-4 text-center ">
              <Image src={Camera} alt="" className="mt-[157px]" />
              <p className="w-[246px] text-sm font-normal text-[#6F6F6F]">
                {' '}
                Upload photo of the product you want to add to your registry
              </p>
            </div>
          </div>
          <aside className="flex flex-col gap-3">
            <p className="text-base font-medium text-foreground ">
              By creating your cash funds, your guest can send you cash to cater for your cash needs
            </p>

            <form action="">
              <div className="flex flex-col gap-2 mb-9">
                <label htmlFor="title" className="text-base font-semibold ">
                  Title
                </label>
                <Input type="text" placeholder="Enter title of cash fund" id="title" className="text-sm font-normal" />
              </div>

              <div className="flex flex-col gap-2 mb-9">
                <label htmlFor="country" className="text-base font-semibold ">
                  Currency type
                </label>
                <Select>
                  <SelectTrigger className=" h-[55px] text-sm font-normal">
                    <SelectValue className="placeholder-gray-400" placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent id="country">
                    <SelectGroup className="text-sm font-normal">
                      <SelectItem value="pounds">Pounds</SelectItem>
                      <SelectItem value="naira">Naira</SelectItem>
                      <SelectItem value="dollar">Dollar</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              {/* Price and quantity input starts here  */}

              {/* Price and quantity input ends here  */}

              <div className="flex justify-end">
                <Button variant="secondary" type="submit" className="font-medium text-base w-[185px] flex gap-2">
                  Add gift
                </Button>
              </div>
            </form>
          </aside>
        </section>
      </div>
    </>
  );
};

export default AddCash;
