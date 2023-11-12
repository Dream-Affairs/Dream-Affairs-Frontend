import React, { useState } from 'react';
import Camera from '../../../(assets)/camera2.svg';
import Minus from '../../../(assets)/minus-square.svg';
import Add from '../../../(assets)/add-square.svg';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import useLimitedTextInput from '../hooks/textarea';
import currencies from '../../../settings/(components)/currency';

const AddProduct: React.FC = () => {
  const inputNumberStyle: React.CSSProperties = {
    WebkitAppearance: 'textfield',
    MozAppearance: 'textfield',
    appearance: 'textfield',
  };

  const [currency, setCurrency] = useState<string>('Dollar ($)');
  const { text, handleChange } = useLimitedTextInput('', 1000);

  // This section control increment of quantity
  const [value, setValue] = useState<number>(1);

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
              Dream Affairs let’s you add gifts from anywhere, Just paste a link and enter your gift info!
            </p>

            <form action="">
              <div className="flex flex-col gap-2 mb-9">
                <label htmlFor="link" className="text-base font-semibold ">
                  Link
                </label>
                <Input type="text" placeholder="Enter product URL" id="link" className="text-sm font-normal" />
              </div>

              <div className="flex flex-col gap-2 mb-9">
                <label htmlFor="title" className="text-base font-semibold ">
                  Title
                </label>
                <Input type="text" placeholder="Enter product name" id="title" className="text-sm font-normal" />
              </div>

              <div className="flex flex-col gap-2 mb-9">
                <label htmlFor="country" className="text-base font-semibold ">
                  Currency type
                </label>
                <Select>
                  <SelectTrigger className=" h-[55px] text-sm font-normal">
                    <SelectValue className="placeholder-gray-400" placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent id="currency" className="h-auto">
                    <SelectGroup className="text-sm font-normal">
                      <SelectLabel>Currency</SelectLabel>
                      {currencies.map((currency) => (
                        <div key={currency}>
                          <SelectItem onClick={() => setCurrency(currency)} value={currency}>
                            {currency}
                          </SelectItem>
                        </div>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              {/* Price and quantity input starts here  */}
              <div className="flex gap-7">
                <div className="flex flex-col gap-2 mb-12 flex-1">
                  <label htmlFor="price" className="text-base font-semibold ">
                    Price ($)
                  </label>
                  <Input
                    type="number"
                    placeholder="0"
                    id="price"
                    min={1}
                    className="placeholder-foreground text-sm font-normal "
                    style={inputNumberStyle}
                  />
                </div>

                <div className="flex flex-col gap-2 mb-12 flex-1">
                  <label htmlFor="quantity" className="text-base font-semibold ">
                    Quantity
                  </label>
                  <div className="flex border rounded-md justify-between pr-4">
                    <Input
                      type="number"
                      placeholder="1"
                      id="quantity"
                      className="placeholder-foreground text-sm font-normal border-0 flex-aut"
                      value={value}
                      min={1}
                      max={1000}
                      onChange={(e) => setValue(parseInt(e.target.value))}
                    />

                    <div className="flex gap-1 items-center ">
                      <div
                        onClick={decrement}
                        className=" rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 "
                      >
                        {' '}
                        <Image src={Minus} alt="" />{' '}
                      </div>
                      <div
                        onClick={increment}
                        className=" rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 "
                      >
                        <Image src={Add} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Price and quantity input ends here  */}

              <div className="flex flex-col gap-2 mb-9">
                <label htmlFor="title" className="text-base font-semibold ">
                  Add notes (optional)
                </label>
                <div className="flex flex-col gap-[2px]">
                  <textarea
                    placeholder="Tell family and friends what this gift means to you, what you will do with it or why you want it."
                    id="title"
                    className="text-sm font-normal border rounded-md h-[193px] p-3 resize-none"
                    value={text}
                    onInput={handleChange}
                  ></textarea>
                  <div className="text-right text-xs font-semibold">
                    <p>{text.length}/1000</p>
                  </div>
                </div>
              </div>

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

export default AddProduct;
