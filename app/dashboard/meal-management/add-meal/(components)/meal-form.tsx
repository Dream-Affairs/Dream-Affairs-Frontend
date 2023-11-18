import { Button } from '@/components/ui/button';
import { FaRegTimesCircle } from 'react-icons/fa';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

interface mealProps{
    setMealName: React.Dispatch<React.SetStateAction<string>>
    setMealDescription: React.Dispatch<React.SetStateAction<string>>
}

const MealForm: React.FC<mealProps> = ({setMealName, setMealDescription,}) => {
  const [inputText, setInputText] = useState('');
  const [inputTexts, setInputTexts] = useState('');

  const maxCharacter = 18;
  const maxCharacters = 100;

  const handleMealName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (inputValue.length <= maxCharacter) {
      setInputText(inputValue);
      setMealName(inputValue);
    }
  };

  const handleMealDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValues = event.target.value;

    if (inputValues.length <= maxCharacters) {
      setInputTexts(inputValues);
      setMealDescription(inputValues);
    }
  };

  return (
    <form className="flex flex-col lg:gap-y-[20px] lg:mt-[36px]">
      <div className="flex flex-col gap-y-[8px]">
        <h3 className=" font-[600] lg:text-[16px] text-[#1C1C1C]">Meal Categories</h3>
        <Select>
          <SelectTrigger className="lg:h-[56px] border-[#E1E1E1] placeholder-[#A0A0A0] font-[400] lg:text-[14px] lg:leading-[19.6px] text-[#1C1C1C]">
            <SelectValue placeholder="e.g Appetizers, Main Dishes etc" className="" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="">
              <SelectItem value="appetizer" className="">
                Appetizer
              </SelectItem>
              <SelectItem value="appetizer">Main Dishes</SelectItem>
              <SelectItem value="main">Add category</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-y-[8px]">
        <p className="font-[600] lg:text-[16px] text-[#1C1C1C]">Meal Name</p>
        <div className="relative">
          <Input
            type="text"
            placeholder="E.g: Roasted Chicken with Herbs"
            className="placeholder-[#A0A0A0] lg:text-[14px] lg:leading-[19.6px] font-[400] text-[#1c1C1C] lg:h-[52px] border-[#E1E1E1]"
            onChange={handleMealName}
            value={inputText}
          />
          <div className="absolute bottom-[3px] right-[5px]">
            <span className="text-[#A0A0A0] leading-[16.8px] text-[12px]">
              {inputText.length}/{maxCharacter}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-[8px]">
        <p className="font-[600] lg:text-[16px] leading-[19.6px] text-[#1C1C1C]">Meal Description</p>
        <div className="relative">
          <Input
            type="text"
            placeholder="Add meal description here"
            className="placeholder-[#A0A0A0] lg:text-[14px] lg:leading-[19.6px] font-[400] text-[#1c1C1C] lg:h-[52px] border-[#E1E1E1]"
            onChange={handleMealDescription}
            value={inputTexts}
          />
          <div className="absolute bottom-[3px] right-[5px]">
            <span className="text-[#A0A0A0] leading-[16.8px] text-[12px]">
              {inputTexts.length}/{maxCharacters}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-[8px]">
        <p className="font-[600] lg:text-[16px] leading-[19.6px] text-[#1C1C1C]">Dietary Tags</p>
        <Select>
          <SelectTrigger className="lg:h-[56px] border-[#E1E1E1] placeholder-[#A0A0A0] font-[400] lg:text-[14px] lg:leading-[19.6px] text-[#1C1C1C]">
            <SelectValue
              placeholder="e.g Vegan, Vegetarian etc (Optional)"
              className="placeholder-shown:text-[#A0A0A0]"
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="apple">Vegan</SelectItem>
              <SelectItem value="banana">Vegetarian</SelectItem>
              <SelectItem value="banana">Add Tags</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-y-[8px]">
        <p className="font-[600] lg:text-[16px] leading-[19.6px] text-[#1C1C1C]">Quantity</p>
        <Input
          placeholder="No. of quantity"
          className="placeholder-[#A0A0A0] g:h-[52px] border-[#E1E1E1] font-[400] lg:text-[14px] lg:leading-[19.6px] text-[#1C1C1C]"
        />
      </div>
      <Button variant="disabled" className=" rounded-[8px] lg:mx-[32px] lg:text-[16px] lg:leading-[22.4px] font-[500] text-center bg-[#EAEAEA] text-[#9C9C9C]">Save Meal</Button>
    </form>
  );
};

export default MealForm;
