import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FaRegTimesCircle } from 'react-icons/fa';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { useRef, useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import axios from 'axios';
import { toast } from '@/components/ui/use-toast';
import useAuth from '../../../../auth/(helpers)/useAuth';
// import { getAllCategories } from '../../page';
import { useRouter } from 'next/navigation';

interface mealProps {
  setMealName: React.Dispatch<React.SetStateAction<string>>;
  setMealDescription: React.Dispatch<React.SetStateAction<string>>;
  mealDescription: string;
  setShowPreview: React.Dispatch<React.SetStateAction<boolean>>;
  showPreview: boolean;
  isSaved: boolean;
  setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
  files?: FileList | null;
  imgUrl: string | '';
}

const MealForm: React.FC<mealProps> = ({
  setMealName,
  setMealDescription,
  mealDescription,
  setShowPreview,
  showPreview,
  isSaved,
  setIsSaved,
  files,
  imgUrl,
}) => {
  const [inputText, setInputText] = useState('');
  // const [inputTexts, setInputTexts] = useState('');
  const maxCharacter = 18;
  const maxCharacters = 100;
  const [text, setText] = useState('');
  const [dietryTagsText, setDietryTagsText] = useState('');
  const [height, setHeight] = useState('52px');
  const [showTextBox, setShowTextBox] = useState<boolean>(false);
  const [showDietryTagsText, setShowDietryTagsText] = useState<boolean>(false);
  const [mealCategories, setMealCategories] = useState<String[]>([]);
  const [updateCategories, setUpdateCategories] = useState<boolean>(false);
  const [categoryID, setCategoryID] = useState<string>('');
  const categoryRef = useRef<HTMLInputElement | null>(null);
  const dietryTagsRef = useRef<HTMLInputElement | null>(null);
  const dietryTagsInputRef = useRef<HTMLInputElement | null>(null);
  const [mealTitle, setMealTitle] = useState<string>('');
  const [mealDesc, setMealDesc] = useState<string>('');
  const [mealCategory, setMealCategory] = useState<string>('');
  const [mealQuantity, setMealQuantity] = useState<string>('');
  const [dietryTags, setDietryTags] = useState<string[]>(['Vegan', 'Vegetarian']);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [mealId, setMealId] = useState<string>('');
  const { userId, org }: any = useAuth();
  const organizationID = '669d5c746a1c420992b3ae786712c185';
  const url = process.env.NEXT_PUBLIC_API_URL;

  const getAllCategories = () => {
    axios
      .get(`${url}/${organizationID}/meal-management/meal-category`)
      .then((response) => {
        console.log(response.data.data);
        setMealCategories(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getAllCategories();
  }, [updateCategories]);
  // console.log( org?.organization_member_id)
  const token = '';
  const router = useRouter();
  const headers = {
    Authorization: `Bearer ${token}`,
    accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const handleMealName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (inputValue.length <= maxCharacter) {
      setInputText(inputValue);
      setMealTitle(inputValue);
    }
  };

  const handleMealDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValues = event.target.value;
    setMealDesc(inputValues);
    setHeight('52px');
    setHeight(`${event.target.scrollHeight < 52 ? 52 : event.target.scrollHeight}px`);
  };

  const handleAddCategory = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addCategory();
    setShowTextBox((prev) => false);
    setText('');
  };
  const addCategory = () => {
    console.log(text);
    if (text && text.trim() != '') {
      axios
        .post(
          `${url}/${organizationID}/meal-management/create-meal-category`,
          {
            name: mealCategory,
          },
          { headers },
        )
        .then((response) => {
          console.log(response.data);
          console.log(response.data.message);
          if (response.status == 201) {
            let categoryID = response.data.data.id;
            console.log(categoryID);
            toast({ title: 'Category Successfully created' });
            setMealCategory(text);
            setCategoryID(categoryID);
            setUpdateCategories(true);
          }
        })
        .catch((error) => {
          console.log(
            `Category Error: ${error?.message || error?.response?.data?.message || error?.response?.statusText}`,
          );
          console.log(error);
          toast({ title: error.response?.data?.message || error.message });
        });
    }
    setShowTextBox((prev) => false);
    setText('');
  };
  const handleAddDietryTags = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let tagExist = dietryTags?.find((tag: String) => tag == dietryTagsText);
    if (!tagExist && dietryTagsText != '') {
      setDietryTags((prev) => [...prev, dietryTagsText]);
      let alreadySelected = selectedTags?.find((tag) => tag === dietryTagsText);
      if (!alreadySelected) {
        setSelectedTags((prev) => [...prev, dietryTagsText]);
      }
    }
    setShowDietryTagsText(false);
    setDietryTagsText('');
  };
  const addMealTag = (mealId: string) => {
    console.log(mealId);
    if (selectedTags.length > 0) {
      let mealTags = selectedTags.join(', ');
      console.log(mealTags);
      axios
        .post(`${url}/${organizationID}/meal-management/meal-tag?meal_id=${mealId}&tag_name=${mealTags}`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const addDietryTags = () => {
    let categoryExist = dietryTags?.find((tag: String) => tag == dietryTagsText);
    if (!categoryExist && text != '') {
      setDietryTags((prev) => [...prev, dietryTagsText]);
    }
    setShowDietryTagsText(false);
    setDietryTagsText('');
  };
  const onDietryTagsChange = (value: string) => {
    console.log(value);
    let categoryExist = selectedTags?.find((tag: String) => tag == value);
    if (!categoryExist && selectedTags.length < 3) {
      setSelectedTags((prev) => [...prev, value]);
    }
  };
  const handleRemoveTag = (index: number) => {
    const filteredSelected = [...selectedTags.slice(0, index), ...selectedTags.splice(index + 1)];
    setSelectedTags(filteredSelected);
    // const newDietryTags = [...dietryTags.slice(0, index), ...dietryTags.splice(index + 1)];
    // console.log(newDietryTags)
    // setDietryTags(newDietryTags);
  };
  const handleSaveMeal = () => {
    const validate = validateMealForm();
    if (Object.keys(validate).length === 0) {
      console.log('All inputs validated');
      axios
        .post(`${url}/${organizationID}/meal-management/meal?meal_category_id=${categoryID}`, {
          name: mealTitle,
          description: mealDesc,
          is_hidden: false,
          image_url: imgUrl,
          quantity: 100,
        })
        .then((response) => {
          console.log(response);
          if (response.status === 201) {
            toast({ title: response.data?.message });
            setIsSaved(true);
            let id = response.data.data.id;
            setMealId(id);
            addMealTag(id);
            setTimeout(() => {
              router.push('/dashboard/meal-management');
            }, 2000);
          }
        })
        .catch((error) => {
          console.log(error);
          console.log(error?.response?.statusText);
          toast({ title: error.response?.data?.message || error?.response?.statusText });
        });
    } else {
      console.log('Inputs not validated');
    }
  };

  const handleNext = () => {
    const validate = validateMealForm();
    console.log(validate);
    if (Object.keys(validate).length == 0) {
      console.log('All required fields are filled');
      setShowPreview(true);
      setIsSaved(true);
    }
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
        {/* category Input */}
        <div className="relative ">
          {showTextBox && (
            <form onSubmit={handleAddCategory} className="border-none ">
              <input
                ref={categoryRef}
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onBlurCapture={addCategory}
                autoFocus
                className={`${
                  !showTextBox
                    ? 'hidden'
                    : 'block  z-[99] w-full h-[56px] border-[1px] focus:border-[#AB72C2] pl-[16px] rounded-[4px] border-[#E1E1E1] placeholder-[#A0A0A0] font-[400] text-[12px] lg:text-[14px] leading-[16.8px] lg:leading-[19.6px] text-[#1C1C1C] focus:outline-none'
                }`}
              />
            </form>
          )}
          {/* Dropdown */}
          {!showTextBox && (
            <Select
              value={mealCategory || ''}
              onValueChange={(value) => {
                console.log(value);
                let category: any = mealCategories.find((catg: any) => catg.name === value);
                console.log(category.id);
                setMealCategory(value);
                setCategoryID(category?.id);
              }}
            >
              <SelectTrigger className="h-[56px] border-[#E1E1E1] placeholder-[#A0A0A0] font-[400] text-[12px] lg:text-[14px] leading-[16.8px] lg:leading-[19.6px] text-[#1C1C1C]">
                <SelectValue placeholder="e.g Appetizers, Main Dishes etc" className="" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className="">
                  {mealCategories?.map((meal: any, index) => (
                    <SelectItem
                      key={index}
                      value={meal?.name}
                      className="text-[#282828] text-[12px] leading-[16.8px] font-[400]"
                    >
                      {meal?.name}
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
          )}
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
            value={mealDesc}
            style={{ height: height }}
            onChange={handleMealDescription}
            onBlur={() => setMealDescription(mealDesc)}
            placeholder="Add meal description here"
            className={` ${
              mealDesc.length > 100 && 'border-[1px] border-[#B50000]'
            } w-full border-[1px] resize-none overflow-hidden rounded-[8px] hover:border-primary focus-visible:outline-none focus:border-primary  p-[16px]  placeholder-[#A0A0A0] text-[12px] lg:text-[14px] leading-[16.8px] lg:leading-[19.6px] font-[400] text-[#1c1C1C] break-words h-[49px] lg:h-[52px] border-[#E1E1E1]`}
          />
          {/*           
          <div className="content text-black font-bold after:absolute after:inset-0 after:flex after:items-center after:justify-center after:content-['Your Text Here']"
            contentEditable
            // value={content}
            onInput={(e: React.ChangeEvent<HTMLDivElement>)=>{
              let text =e.currentTarget.textContent || ''
              // setContent(text)
              console.log(text)
              // if(text?.length >3){
              // console.log(text.slice(3,))
              let text2 = text.slice(3,)
              setContent2(text)
              // }

            }}
            dangerouslySetInnerHTML={{__html: content} }/> */}

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
        <div className="relative">
          {/* input box */}
          {showDietryTagsText && (
            <form onSubmit={handleAddDietryTags} className="border-none">
              <input
                ref={dietryTagsInputRef}
                type="text"
                value={dietryTagsText}
                autoFocus
                onChange={(e) => setDietryTagsText(e.target.value)}
                onBlurCapture={addDietryTags}
                className={`${
                  !showDietryTagsText
                    ? 'hidden'
                    : 'block  w-full h-[56px] border-[1px] focus:border-[#AB72C2] pl-[16px] rounded-[4px] border-[#E1E1E1] placeholder-[#A0A0A0] font-[400] text-[12px] lg:text-[14px] leading-[16.8px] lg:leading-[19.6px] text-[#1C1C1C] focus:outline-none'
                }`}
              />
            </form>
          )}
          {/* selected tags */}
          {!showDietryTagsText && (
            <>
              <div
                className={`${
                  showDietryTagsText
                    ? 'hidden'
                    : 'flex flex-row gap-x-[12px]  items-center absolute bg-white w-fit border-0 h-[52px] ml-[3px] mt-[2px] border-[1px focus:border-[#AB72C2] p-[13px] rounded-[4px] border-[#E1E1E1 placeholder-[#A0A0A0] font-[400] text-[12px] lg:text-[14px] leading-[16.8px] lg:leading-[19.6px] text-[#1C1C1C] focus:outline-none'
                }`}
              >
                {selectedTags.length > 0
                  ? selectedTags.map((tag, index) => (
                      <div key={index} className="-ml-[16px flex flex-row items-center gap-x-[6px]">
                        <svg
                          onClick={() => handleRemoveTag(index)}
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                            stroke="#282828"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9.17188 14.8299L14.8319 9.16992"
                            stroke="#282828"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M14.8319 14.8299L9.17188 9.16992"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span> {tag}</span>
                      </div>
                    ))
                  : 'e.g Vegan, Vegetarian etc (Optional)'}
              </div>
              <Select
                value=" "
                // value={dietryTags[dietryTags.length -1] || 'vegan' || 'vegetarian'}
                onValueChange={(value) => onDietryTagsChange(value)}
              >
                <SelectTrigger
                  className={` h-[56px] pl-[32px] border-[#E1E1E1] placeholder-[#A0A0A0] font-[400] text-[12px] lg:text-[14px] leading-[16.8px] lg:leading-[19.6px] text-[#1C1C1C] `}
                >
                  <SelectValue
                    placeholder="e.g Vegan, Vegetarian etc (Optional)"
                    className=" placeholder-shown:text-[#A0A0A0] "
                  />
                </SelectTrigger>
                <SelectContent ref={dietryTagsRef}>
                  <SelectGroup className="text-[#282828] text-[12px] leading-[16.8px] font-[400]">
                    {dietryTags?.length > 0 &&
                      dietryTags.map((tag, index) => (
                        <SelectItem key={index} value={tag} className="">
                          <div className="-ml-[16px] flex flex-row items-center gap-x-[16px]">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                stroke="#282828"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9.17188 14.8299L14.8319 9.16992"
                                stroke="#282828"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M14.8319 14.8299L9.17188 9.16992"
                                stroke="#292D32"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span> {tag}</span>
                          </div>
                        </SelectItem>
                      ))}
                    {/* <SelectItem value="vegan" className="">
                  <div className="-ml-[16px] flex flex-row items-center gap-x-[16px]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                        stroke="#282828"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.17188 14.8299L14.8319 9.16992"
                        stroke="#282828"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.8319 14.8299L9.17188 9.16992"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span> Vegan</span>
                  </div>
                </SelectItem> */}
                    {/* <SelectItem value="vegetarian">
                <div className="-ml-[16px] flex flex-row items-center gap-x-[16px]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                        stroke="#282828"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.17188 14.8299L14.8319 9.16992"
                        stroke="#282828"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.8319 14.8299L9.17188 9.16992"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span> Vegetarian</span>
                  </div>
                  </SelectItem> */}
                    <button
                      onClick={() => {
                        if (dietryTagsRef.current) {
                          dietryTagsRef.current.blur();
                          dietryTagsRef.current.style.display = 'none';
                        }
                        setShowDietryTagsText(true);
                        if (dietryTagsInputRef) {
                          dietryTagsInputRef.current?.blur();
                          dietryTagsInputRef.current?.focus();
                        }
                      }}
                      className="w-[100%] px-[32px] mt-[8px] text-[#282828] text-[12px] leading-[16.8px] font-[400] text-left cursor-default"
                    >
                      Add category
                    </button>
                    {/* <SelectItem value="add">Add Tags</SelectItem> */}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </>
          )}
        </div>
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
