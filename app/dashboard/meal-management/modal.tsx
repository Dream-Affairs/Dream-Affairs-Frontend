import React, { useState, useRef, ChangeEvent, DragEvent } from 'react';
import { Button } from '@/components/ui/button';
import { FaRegTimesCircle } from 'react-icons/fa';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import upload from '../(assets)/document-upload.png';
import trash from '../(assets)/trash.png';

interface ModalProps {
  isOpen: boolean;
  toggleModal: () => void;
}

const MyModal: React.FC<ModalProps> = ({ isOpen, toggleModal }) => {
  const [files, setFiles] = useState<FileList | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputText, setInputText] = useState('');
  const [inputTexts, setInputTexts] = useState('');
  const [mealName, setMealName] = useState('');
  const [mealDescription, setMealDescription] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [showDragAndDropZone, setshowDragAndDropZone] = useState(true);

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

  const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
  };

  const handleDrop = (event: DragEvent) => {
    event.preventDefault();
    setFiles((event as any).dataTransfer.files);
    setshowDragAndDropZone(false);
    setShowToast(true);
  };

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles(event.target.files);
      setshowDragAndDropZone(false);
      setShowToast(true);
    }
  };

  return (
    <div className={`fixed inset-0 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="rounded-lg shadow-2xl flex flex-col px-4 h-screen p-4 w-screen justify-start bg-white">
        <div className="flex justify-end items-center">
          <Button variant="ghost" onClick={toggleModal}>
            <FaRegTimesCircle className="w-5 h-5" />
          </Button>
        </div>
        <div className="flex items-start justify-betweeen">
          <div
            className="flex flex-col px-10  max-h-[500px] w-[45%] overflow-y-scroll scrollbar-thin scrollbar-thumb-accent scrollbar-track-secondary"
            style={{ scrollbarWidth: 'thin' }}
          >
            <div className=" flex justify-between items-center pb-3">
              <h2 className="text-lg font-bold text-[#1C1C1C]">Add Meal</h2>
            </div>
            <div>
              {showToast && (
                <div className="border-[#FCF7FF] rounded-lg bg-[#FCF7FF] flex flex-col  p-4">
                  <div className="flex gap-2 justify-between items-center ">
                    <div className="flex gap-3">
                      <Image src={upload} width={20} height={20} alt={'document-upload'} />
                      <div>{files && Array.from(files).map((file, idx) => <h2 key={idx}>{file.name}</h2>)}</div>
                    </div>

                    <Image src={trash} width={20} height={20} alt={'trash'} />
                  </div>
                </div>
              )}
              {showDragAndDropZone && (
                <div className="border-[#FCF7FF] rounded-lg bg-[#FCF7FF] flex justify-center  py-4">
                  <div
                    className="flex flex-col items-center justify-center"
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                  >
                    <input
                      type="file"
                      multiple
                      onChange={handleFileInputChange}
                      hidden
                      accept="image/png, image/jpeg"
                      ref={inputRef}
                    />
                    <Image src={upload} width={20} height={20} alt={'document-upload'} className="pb-3" />
                    <div className="flex gap-2 items-center">
                      <button onClick={() => inputRef.current?.click()} className="text-primary">
                        Click here
                      </button>{' '}
                      <p className="text-[#A0A0A0] text-sm"> or drag and drop to upload file</p>
                    </div>

                    <h3 className="text-[#A0A0A0] text-sm">PDF, SVG, PNG, JPG, OR GIF (max 800X400px)</h3>
                  </div>
                </div>
              )}
            </div>
            <div className="py-3 mt-2">
              <p className="pb-2 font-semibold text-sm text-[#1C1C1C]">Meal Categories</p>
              <Select>
                <SelectTrigger className="p-2">
                  <SelectValue placeholder="e.g Appetizers, Main Dishes etc" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="appetizer">Appetizer</SelectItem>
                    <SelectItem value="appetizer">Main Dishes</SelectItem>
                    <SelectItem value="main">Add category</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="py-3">
              <p className="pb-2 font-semibold text-sm text-[#1C1C1C]">Meal Name</p>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="E.g: Roasted Chicken with Herbs"
                  className="placeholder-[#A0A0A0]"
                  onChange={handleMealName}
                  value={inputText}
                />
                <div className="absolute bottom-0 right-0 mb-2 mr-2">
                  <span className="text-gray-200 text-sm">
                    {inputText.length}/{maxCharacter}
                  </span>
                </div>
              </div>
            </div>
            <div className="py-3">
              <p className="pb-2 font-semibold text-sm text-[#1C1C1C]">Meal Description</p>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Add meal description here"
                  className="placeholder-[#A0A0A0]"
                  onChange={handleMealDescription}
                  value={inputTexts}
                />
                <div className="absolute bottom-0 right-0 mb-2 mr-2">
                  <span className="text-gray-200 text-sm">
                    {inputTexts.length}/{maxCharacters}
                  </span>
                </div>
              </div>
            </div>
            <div className="py-3">
              <p className="pb-2 font-semibold text-sm text-[#1C1C1C]">Dietary Tags</p>
              <Select>
                <SelectTrigger className="p-2">
                  <SelectValue placeholder="e.g Vegan, Vegetarian etc (Optional)" />
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
            <div className="py-3">
              <p className="pb-2 font-semibold text-sm text-[#1C1C1C]">Quantity</p>
              <Input
                placeholder="No. of quantity"
                style={{ paddingRight: '3.5rem' }}
                className="placeholder-[#A0A0A0]"
              />
            </div>
            <button className=" font-bold py-2 text-sm bg-[#EAEAEA] text-[#9C9C9C]">Save</button>
          </div>
          <div className="flex flex-col pl-5  items-start justify-start w-2/5">
            <h3 className="text-lg font-bold pb-3 text-[#1C1C1C]">Preview</h3>
            <div className="border p-4 w-[380px]">
              <div>
                {!files ? (
                  <div className="w-[350px] h-[170px] border rounded-lg bg-slate-100 animate-pulse"></div>
                ) : (
                  Array.from(files).map((file, idx) => (
                    <Image
                      key={idx}
                      src={URL.createObjectURL(file)}
                      width={350}
                      height={400}
                      alt={`preview-${idx}`}
                      objectFit="fill"
                      className="rounded-lg"
                    />
                  ))
                )}
              </div>
              <h3 className="font-bold py-3 text-[#1C1C1C]">{mealName || <h3>Meal Name</h3>}</h3>

              <h4 className="pb-2 text-[#9C9C9C]">{mealDescription || <h3>Meal Description</h3>}</h4>
              <h3 className="text-[#1C1C1C]">Dietary tags</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
