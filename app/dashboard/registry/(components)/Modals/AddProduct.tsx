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
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { useLimitedTextInput, useImageUpload, useForm } from '../hooks/RegistryForm';
import currencies from '../../../settings/(components)/currency';
import { addProductGift } from '../apis/Api';

interface GiftFormValues {
  title: string;
  product_unit_price: number;
  product_quantity: number;
  currency: string;
  gift_type: string;
  product_image_url: string;
  description: string;
  product_url: string;
}

const AddProduct: React.FC = () => {
  // Image Upload function starts here
  const { ImageUrl, error, fileInputRef, handleImageClick, handleFileChange, uploadProgress } = useImageUpload();

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

  const { formValues, formError, handleInputChange, handleSubmit } = useForm<GiftFormValues>({
    initialValues: {
      title: '',
      product_unit_price: 0,
      product_quantity: 1,
      currency: '',
      gift_type: 'physical',
      product_image_url: ImageUrl ?? '',
      description: '',
      product_url: '',
    },
    onSubmit: addProductGift,
  });

  React.useEffect(() => {
    handleInputChange({
      target: {
        id: 'product_image_url',
        value: ImageUrl,
      },
    } as React.ChangeEvent<HTMLInputElement>);

    handleInputChange({
      target: {
        id: 'description',
        value: text,
      },
    } as React.ChangeEvent<HTMLInputElement>);
  }, [ImageUrl, handleInputChange, text]);

  const inputNumberStyle: React.CSSProperties = {
    WebkitAppearance: 'textfield',
    MozAppearance: 'textfield',
    appearance: 'textfield',
  };

  // Image Upload functiom ends here

  return (
    <>
      <div className="mb-16">
        <p className="text-base md:text-[32px] font-medium leading-none tracking-tight pl-6 md:pl-[79px] pt-7 md:pt-12 mb-[14px]">
          Add product to registry
        </p>
        <div className="h-[1px] bg-border w-full"></div>
        <section className="flex flex-col lg:flex-row justify-center gap-11 px-4 md:px-16 mt-6 md:mt-12">
          <div>
            <p className="md:hidden text-sm text-center font-medium text-foreground mb-8">
              Dream Affairs let’s you add gifts from anywhere, Just paste a link and enter your gift info!
            </p>
            {/* Product image section starts here  */}

            <div
              id="ProductImage"
              className="relative bg-[#E8E8E8] w-[200px] md:w-[310px] h-[250px] md:h-[362px] rounded-[8px] flex flex-col items-center gap-4 text-center cursor-pointer mx-auto"
              onClick={handleImageClick}
            >
              {ImageUrl ? (
                <Image
                  src={`https://dev.api.dreamaffairs.mooo.com/api/v1/files/get-image?url=${ImageUrl}`}
                  alt="Uploaded"
                  width={310}
                  height={362}
                  className="w-full h-full object-cover rounded-[8px]"
                />
              ) : (
                <>
                  <Image src={Camera} alt="" className="mt-16 md:mt-[157px]" />
                  <p className="w-[168px] md:w-[246px] text-sm font-normal text-[#6F6F6F]">
                    Upload a photo of the product you want to add to your registry
                  </p>
                </>
              )}
              <input
                ref={fileInputRef}
                id="product-image-upload"
                className="hidden"
                type="file"
                accept=".jpg, .jpeg, .png"
                onChange={handleFileChange}
                required
              />
              <Progress value={uploadProgress} className="absolute bottom-0" />
            </div>

            {error && <p className="text-xs text-red-500 text-center">{error}</p>}
            {/* Product image section ends here  */}
          </div>

          <aside className="flex flex-col gap-3 px-4">
            <p className="hidden md:block text-base font-medium text-foreground ">
              Dream Affairs let’s you add gifts from anywhere, Just paste a link and enter your gift info!
            </p>

            <form onSubmit={handleSubmit}>
              {/* <div className="flex flex-col gap-2 mb-9">
                <Input type="text" id="product_image_url" value={ImageUrl} onChange={handleInputChange}/>
              </div> */}

              <div className="flex flex-col gap-2 mb-9">
                <label htmlFor="product_url" className="text-base font-semibold ">
                  Link
                </label>
                <Input
                  type="text"
                  placeholder="Enter product URL"
                  id="product_url"
                  className="text-sm font-normal"
                  value={formValues.product_url}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex flex-col gap-2 mb-9">
                <label htmlFor="title" className="text-base font-semibold ">
                  Title
                </label>
                <Input
                  type="text"
                  placeholder="Enter product name"
                  id="title"
                  className="text-sm font-normal"
                  value={formValues.title}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex flex-col gap-2 mb-9">
                <label htmlFor="country" className="text-base font-semibold ">
                  Currency type
                </label>
                <Select
                  value={formValues.currency}
                  onValueChange={(value) =>
                    handleInputChange({ target: { id: 'currency', value } } as React.ChangeEvent<
                      HTMLInputElement | HTMLTextAreaElement
                    >)
                  }
                >
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
                  <label htmlFor="product_unit_price" className="text-base font-semibold ">
                    Price ($)
                  </label>
                  <Input
                    type="number"
                    placeholder="0"
                    id="product_unit_price"
                    min={0}
                    className="placeholder-foreground text-sm font-normal "
                    style={inputNumberStyle}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="flex flex-col gap-2 mb-12 flex-1">
                  <label htmlFor="product_quantity" className="text-base font-semibold ">
                    Quantity
                  </label>
                  <div className="flex border rounded-md justify-between pr-4">
                    <Input
                      type="number"
                      placeholder="1"
                      id="product_quantity"
                      className="placeholder-foreground text-sm font-normal border-0 flex-aut"
                      value={value}
                      min={1}
                      max={1000}
                      onChange={(e) => setValue(parseInt(e.target.value))}
                    />

                    <div className="flex gap-1 items-center ">
                      <div
                        onClick={() => {
                          decrement();
                          handleInputChange({
                            target: {
                              id: 'product_quantity',
                              value: (value - 1).toString(),
                            },
                          } as React.ChangeEvent<HTMLInputElement>);
                        }}
                        className=" rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 "
                      >
                        {' '}
                        <Image src={Minus} alt="" />{' '}
                      </div>
                      <div
                        onClick={() => {
                          increment();
                          handleInputChange({
                            target: {
                              id: 'product_quantity',
                              value: (value + 1).toString(),
                            },
                          } as React.ChangeEvent<HTMLInputElement>);
                        }}
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
                <label htmlFor="description" className="text-base font-semibold ">
                  Add notes (optional)
                </label>
                <div className="flex flex-col gap-[2px]">
                  <textarea
                    placeholder="Tell family and friends what this gift means to you, what you will do with it or why you want it."
                    id="description"
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
              {formError && <p className="text-red-500">{formError}</p>}
            </form>
          </aside>
        </section>
      </div>
    </>
  );
};

export default AddProduct;
