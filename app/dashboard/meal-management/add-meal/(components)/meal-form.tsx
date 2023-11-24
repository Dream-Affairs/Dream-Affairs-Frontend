import React from 'react';
import { Button } from '@/components/ui/button';
import { FaRegTimesCircle } from 'react-icons/fa';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { useRef, useState } from 'react';
import { Textarea } from '@/components/ui/textarea';

interface mealProps {
  setMealName: React.Dispatch<React.SetStateAction<string>>;
  setMealDescription: React.Dispatch<React.SetStateAction<string>>;
  mealDescription: string;
  setShowPreview: React.Dispatch<React.SetStateAction<boolean>>;
  showPreview: boolean;
}

const MealForm: React.FC<mealProps> = ({
  setMealName,
  setMealDescription,
  mealDescription,
  setShowPreview,
  showPreview,
}) => {
  const [inputText, setInputText] = useState('');
  const [inputTexts, setInputTexts] = useState('');
  const maxCharacter = 18;
  const maxCharacters = 100;
  const [text, setText] = useState('');
  const [height, setHeight] = useState('52px');
  const [showTextBox, setShowTextBox] = useState<boolean>(false);
  const [mealCategories, setMealCategories] = useState<String[]>([]);
  const categoryRef = useRef<HTMLInputElement | null>(null);
  const [mealTitle, setMealTitle] = useState<string>('');
  const [mealDesc, setMealDesc] = useState<string>('');
  const [mealCategory, setMealCategory] = useState<string>('');
  const [mealQuantity, setMealQuantity] = useState<string>('');
  const [dietryTags, setDietryTags] = useState<string[]>([]);
  const validDesc = mealDesc.slice(0, 100) || mealDesc;
  const descOverflow = mealDesc.length > 100 ? mealDesc.slice(101) : '';
  const handleMealName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (inputValue.length <= maxCharacter) {
      setInputText(inputValue);
      setMealTitle(inputValue);
    }
  };

  const handleMealDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValues = event.target.value;
    // if (inputValues.length <= maxCharacters) {
    // setInputTexts(inputValues);
    setMealDesc(inputValues);
    // setHeight('52px');
    // setHeight(`${event.target.scrollHeight}px`);
    // }
  };

  const handleAddCategory = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(text);
    let categoryExist = mealCategories.find((meal: String) => meal == text);
    if (!categoryExist && text != '') {
      setMealCategories((prevVals: any) => [...prevVals, text]);
    }
    setShowTextBox((prev) => false);
    setText('');
  };
  const addCategory = () => {
    let categoryExist = mealCategories.find((meal: String) => meal == text);
    if (!categoryExist && text != '') {
      setMealCategories((prevVals: any) => [...prevVals, text]);
    }
    setShowTextBox((prev) => false);
    setText('');
  };

  const handleSaveMeal = () => {};
  const handleNext = () => {
    const validate = validateMealForm();
    if (Object.keys(validate).length == 0) {
      console.log('All required fields are filled');
      setShowPreview(true);
    }
    console.log('All required fields are not filled');
  };
  const validateMealForm = () => {
    let formError: Record<string, string> = {};
    if (!mealTitle) {
      formError.mealTitle = 'meal name cannot be empty';
    }
    if (!mealCategory) {
      formError.mealCategory = 'Please add a meal category';
    }
    if (!dietryTags) {
      formError.dietryTags = 'Please add atleast one dietry tag';
    }
    if (!mealQuantity) {
      formError.quantity = 'Please add the meal quantity';
    }
    return formError;
  };
  return (
    <div className="relative flex flex-col gap-y-[20px] mt-[20px] lg:mt-[36px] pb-[28px] lg:pb-[88px]">
      {/* Meal Categories */}
      <div className="flex flex-col gap-y-[12px] lg:gap-y-[8px]">
        <h3 className=" font-[600] text-[14px] leading-[19.6px] lg:leading-[22.4px] lg:text-[16px] text-[#1C1C1C]">
          Meal Categories
        </h3>
        <div className="relative">
          <form onSubmit={handleAddCategory} className="border-none">
            <input
              ref={categoryRef}
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onBlurCapture={addCategory}
              className={`${
                !showTextBox
                  ? 'hidden'
                  : 'block absolute w-full h-[56px] border-[1px] focus:border-[#AB72C2] pl-[16px] rounded-[4px] border-[#E1E1E1] placeholder-[#A0A0A0] font-[400] text-[12px] lg:text-[14px] leading-[16.8px] lg:leading-[19.6px] text-[#1C1C1C] focus:outline-none'
              }`}
            />
          </form>
          <Select
            onValueChange={(value) => {
              console.log(value);
              setMealCategory(value);
            }}
          >
            <SelectTrigger className="h-[56px] border-[#E1E1E1] placeholder-[#A0A0A0] font-[400] text-[12px] lg:text-[14px] leading-[16.8px] lg:leading-[19.6px] text-[#1C1C1C]">
              <SelectValue placeholder="e.g Appetizers, Main Dishes etc" className="" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="">
                {mealCategories?.map((meal: String, index) => (
                  <SelectItem
                    key={index}
                    value={meal.toString()}
                    className="text-[#282828] text-[12px] leading-[16.8px] font-[400]"
                  >
                    {meal}
                  </SelectItem>
                ))}
                <button
                  onClick={() => {
                    setShowTextBox(true);
                    if (categoryRef.current) {
                      categoryRef.current.focus();
                    }
                  }}
                  className="w-[100%] px-[16px] text-[#282828] text-[12px] leading-[16.8px] font-[400] text-left cursor-default"
                >
                  Add category
                </button>
                {/* <SelectItem value="add">Add category</SelectItem> */}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* Meal Name  */}
      <div className="flex flex-col gap-y-[12px] lg:gap-y-[8px]">
        <p className="font-[600] text-[14px] lg:text-[16px] leading-[19.6px] lg:leading-[22.4px] text-[#1C1C1C]">
          Meal Name
        </p>
        <div className="relative">
          <Input
            type="text"
            placeholder="E.g: Roasted Chicken with Herbs"
            className="placeholder-[#A0A0A0] text-[12px] lg:text-[14px] leading-[16.8px] lg:leading-[19.6px] font-[400] text-[#1c1C1C] h-[49px] lg:h-[52px] border-[#E1E1E1]"
            onChange={handleMealName}
            onBlur={() => setMealName(mealTitle)}
            value={mealTitle}
          />
          <div className="absolute -bottom-[4px] lg:bottom-[3px] right-[5px] lg:right-[5px]">
            <span className="text-[#A0A0A0] font-[500] leading-[14px] lg:leading-[16.8px] text-[10px] lg:text-[12px]">
              {inputText.length}/{maxCharacter}
            </span>
          </div>
        </div>
      </div>
      {/* Meal Description */}
      <div className="flex flex-col gap-y-[12px] lg:gap-y-[8px] ">
        <p className="font-[600] text-[14px] lg:text-[16px] leading-[19.6px] text-[#1C1C1C]">Meal Description</p>
        <div className="relative  ">
          <textarea
            value={mealDesc.length > 100 ? mealDesc.slice(0, 100) + mealDesc.slice(101) : mealDesc}
            style={{ height: height }}
            onChange={handleMealDescription}
            onBlur={() => setMealDescription(mealDesc)}
            placeholder="Add meal description here"
            className={` ${
              mealDesc.length > 100 && 'border-[1px] border-[#B50000]'
            } w-full border-[1px] resize-none overflow-hidden rounded-[8px] hover:border-primary focus-visible:outline-none focus:border-primary  p-[16px]  placeholder-[#A0A0A0] text-[12px] lg:text-[14px] leading-[16.8px] lg:leading-[19.6px] font-[400] text-[#1c1C1C] break-words h-[49px] lg:h-[52px] border-[#E1E1E1]`}
          />
          {/* <div
            contentEditable
            value={mealDesc.length > 100 ? mealDesc.slice(0, 100) + mealDesc.slice(101) : mealDesc}
            style={{ height: height }}
            onInput={handleMealDescription}
            dangerouslySetInnerHTML={{ __html: mealDesc }}
            onBlur={() => setMealDescription(mealDesc)}
            placeholder="Add meal description here"
            className={` ${
              mealDesc.length > 100 && 'border-[1px] border-[#B50000]'
            } w-full border-[1px] resize-none overflow-hidden rounded-[8px] hover:border-primary focus-visible:outline-none focus:border-primary  p-[16px]  placeholder-[#A0A0A0] lg:text-[14px] lg:leading-[19.6px] font-[400] text-[#1c1C1C] break-words lg:h-[52px] border-[#E1E1E1]`}
          >
            {mealDesc}
          </div> */}

          <div className="absolute bottom-[6px] lg:bottom-[3px] right-[5px]">
            <span className="text-[#A0A0A0] leading-[14px] lg:leading-[16.8px] text-[10px] lg:text-[12px]">
              {mealDesc.length}/{maxCharacters}
            </span>
          </div>
        </div>
      </div>
      {/* Dietry Tags */}
      <div className="flex flex-col gap-y-[12px] lg:gap-y-[8px]">
        <p className="font-[600] text-[14px] lg:text-[16px] leading-[19.6px] text-[#1C1C1C]">Dietary Tags</p>
        <Select>
          <SelectTrigger className="h-[56px] border-[#E1E1E1] placeholder-[#A0A0A0] font-[400] text-[12px] lg:text-[14px] leading-[16.8px] lg:leading-[19.6px] text-[#1C1C1C]">
            <SelectValue
              placeholder="e.g Vegan, Vegetarian etc (Optional)"
              className="placeholder-shown:text-[#A0A0A0]"
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="text-[#282828] text-[12px] leading-[16.8px] font-[400]">
              <SelectItem value="vegan">Vegan</SelectItem>
              <SelectItem value="vegetarian">Vegetarian</SelectItem>
              <SelectItem value="add">Add Tags</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      {/* Quantity */}
      <div className="flex flex-col gap-y-[12px] lg:gap-y-[8px]">
        <p className="font-[600] text-[12px] lg:text-[16px] leading-[19.6px] text-[#1C1C1C]">Quantity</p>
        <Input
          value={mealQuantity}
          onChange={(e) => setMealQuantity(e.target.value)}
          placeholder="No. of quantity"
          className="placeholder-[#A0A0A0] h-[49px] lg:h-[52px] border-[#E1E1E1] font-[400] text-[12px] lg:text-[14px] leading-[16.8px] lg:leading-[19.6px] text-[#1C1C1C]"
        />
      </div>
      <Button
        variant="disabled"
        onClick={handleSaveMeal}
        className="hidden lg:block rounded-[8px] lg:mx-[32px] lg:text-[16px] lg:leading-[22.4px] font-[500] text-center bg-[#EAEAEA] text-[#9C9C9C]"
      >
        Save Meal
      </Button>
      <Button
        variant="disabled"
        onClick={handleNext}
        className="lg:hidden fixed bottom-[4px] left-0 right-0 z-10 rounded-[8px] lg:mx-[32px] lg:text-[16px] lg:leading-[22.4px] font-[500] text-center bg-[#EAEAEA] text-[#9C9C9C]"
      >
        Next
      </Button>
    </div>
  );
};

export default MealForm;
