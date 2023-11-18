'use client';
import React, { useState, useRef, ChangeEvent, DragEvent } from 'react';

import Image from 'next/image';
import upload from '../../../(assets)/document-upload.png';
import trash from '../../../(assets)/trash.png';
import { useRouter } from 'next/navigation';
import MealForm from './meal-form';
import Preview from './preview';

interface ModalProps {
  isOpen: boolean;
  toggleModal: () => void;
}

const NewMeal = () => {
  // const NewMeal: React.FC<ModalProps> = ({ isOpen, toggleModal }) => {
  const [files, setFiles] = useState<FileList | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const [mealName, setMealName] = useState('');
  const [mealDescription, setMealDescription] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [showDragAndDropZone, setshowDragAndDropZone] = useState(true);

  const router = useRouter();

 

  

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
    <section className="w-full relative lg:px-[80px] pt-[62px] pb-[86px] border-2">
      <button
        onClick={() => router.push('/dashboard/meal-management')}
        className="absolute top-[32px] right-[32px] h-fit p-0  items-start "
      >
        <svg
          className="hover:opacity-40"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 33C26.25 33 33 26.25 33 18C33 9.75 26.25 3 18 3C9.75 3 3 9.75 3 18C3 26.25 9.75 33 18 33Z"
            stroke="#292D32"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.7539 22.2449L22.2439 13.7549"
            stroke="#292D32"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.2439 22.2449L13.7539 13.7549"
            stroke="#292D32"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        {/* <FaRegTimesCircle className="w-[36px] h-[36px] text-[#292D32]" /> */}
      </button>
      <div className="w-full lg:max-h-[calc(100vh-62px)] flex flex-row px-  p4 justifystart bg-white">
        <div className="w-[55%] flex flex-col ">
          <h2 className="font-[500] lg:text-[24px] lg:leading-[33.6px] text-[#404141]">Add Meal</h2>
          <div
            className="flex flex-col w-full pr-[80px] overflow-y-scroll scrollbar-thin scrollbar-thumb-accent  scrollbar-track-secondary"
            style={{ scrollbarWidth: 'thin' }}
          >
            <div className="lg:mt-[26px]">
              {showToast && (
                <div className=" border-[#FCF7FF] rounded-lg bg-[#FCF7FF] flex flex-col  p-4">
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
                <div className="border-[#FCF7FF] rounded-[8px] bg-[#F6F6F6] flex justify-center items-center lg:h-[172px]">
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
                    <div className="flex gap-2 items-center text-center lg:text-[16px] font-[400] lg:leading-[22.4px] text-[#A0A0A0] ">
                      <button onClick={() => inputRef.current?.click()} className="text-[#7832A6] font-[500]">
                        Click here
                      </button>{' '}
                      <p className=""> or drag and drop to upload file</p>
                    </div>
                    <p className="text-center lg:text-[16px] font-[400] lg:leading-[22.4px] text-[#A0A0A0]">PDF, SVG, PNG, JPG, OR GIF (max 800X400px)</p>
                  </div>
                </div>
              )}
            </div>
            <MealForm setMealName={setMealName} setMealDescription={setMealDescription}/>
          </div>
        </div>
        {/* preview */}
        <Preview mealDescription={mealDescription} mealName={mealName} files={files}/>
      </div>
    </section>
  );
};

export default NewMeal;
