'use client';
import React, { useState, useRef, ChangeEvent, DragEvent } from 'react';

import Image from 'next/image';
import upload from '../../../(assets)/document-upload.png';
import trash from '../../../(assets)/trash.png';
import { useRouter } from 'next/navigation';
import MealForm from './meal-form';
import Preview from './preview';

// interface ModalProps {
//   isOpen: boolean;
//   toggleModal: () => void;
// }

const NewMeal = () => {
  // const NewMeal: React.FC<ModalProps> = ({ isOpen, toggleModal }) => {
  const [files, setFiles] = useState<FileList | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [mealName, setMealName] = useState('');
  const [mealDescription, setMealDescription] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [showDragAndDropZone, setshowDragAndDropZone] = useState(true);
  const [showPreview, setShowPreview] = useState<boolean>(false);

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
  const handleDeleteImage = () => {};
  return (
    <section className="w-full relative lg:px-[80px] pt-[24px] lg:pt-[62px] lg:pb-[86px]">
      <button
        onClick={() => router.push('/dashboard/meal-management')}
        className="hidden lg:block absolute top-[32px] right-[32px] h-fit p-0  items-start "
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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.7539 22.2449L22.2439 13.7549"
            stroke="#292D32"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.2439 22.2449L13.7539 13.7549"
            stroke="#292D32"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* <FaRegTimesCircle className="w-[36px] h-[36px] text-[#292D32]" /> */}
      </button>
      <nav className="lg:hidden w-full flex flex-row justify-between px-[24px] text-[#282828]">
        <button onClick={()=>{
          setShowPreview(false)
          router.back()
          }} className="flex gap-x-[10px] w-full items-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.0003 20.67C14.8103 20.67 14.6203 20.6 14.4703 20.45L7.95027 13.93C6.89027 12.87 6.89027 11.13 7.95027 10.07L14.4703 3.55002C14.7603 3.26002 15.2403 3.26002 15.5303 3.55002C15.8203 3.84002 15.8203 4.32002 15.5303 4.61002L9.01027 11.13C8.53027 11.61 8.53027 12.39 9.01027 12.87L15.5303 19.39C15.8203 19.68 15.8203 20.16 15.5303 20.45C15.3803 20.59 15.1903 20.67 15.0003 20.67Z"
              fill="#292D32"
            />
          </svg>
          <span className='font-[500] text-[14px] leading-[19.6px] text-center'>Back</span>
        </button>
        <h2  className='w-full text-center font-[600] text-[16px] leading-[22.4px] '>Add Meal</h2>
        <div className='w-full'></div>
      </nav>
      <div className="w-full lg:max-h-[calc(100vh-62px)] flex flex-row px-[24px] lg:px-0 mt-[24px] lg:mt-0 justifystart bg-white">
        <div className={`${showPreview ? 'hidden' : "w-full lg:w-[55%] flex flex-col "}`}>
          <h2 className="hidden lg:block font-[500] lg:text-[24px] lg:leading-[33.6px] text-[#404141]">Add Meal</h2>
          <div
            className="flex flex-col lg:pr-[80px] lg:overflow-y-scroll lg:scrollbar-thin scrollbar-thumb-accent  scrollbar-track-secondary"
            style={{ scrollbarWidth: 'thin' }}
          >
            <div className=" lg:mt-[26px]">
              {showToast && (
                <div
                  onClick={() => inputRef.current?.click()}
                  className=" border-[#FCF7FF] rounded-lg bg-[#FCF7FF] flex flex-col p-4 cursor-pointer"
                >
                  <input
                    type="file"
                    // multiple
                    onChange={handleFileInputChange}
                    hidden
                    accept="image/png, image/jpeg"
                    ref={inputRef}
                  />
                  <div className="flex gap-2 justify-between items-center ">
                    <div className="flex gap-3">
                      <Image src={upload} width={20} height={20} alt={'document-upload'} />
                      <div>{files && Array.from(files).map((file, index) => <h2 key={index}>{file.name}</h2>)}</div>
                    </div>

                    <Image
                      onClick={handleDeleteImage}
                      src={trash}
                      width={20}
                      height={20}
                      alt={'trash'}
                      className="z-10"
                    />
                  </div>
                </div>
              )}
              {showDragAndDropZone && (
                <div className="px-[24px] lg:px-0 py-[16px] lg:py-0 border border-[#FCF7FF] rounded-[8px] bg-[#F6F6F6] flex justify-center items-center lg:h-[172px]">
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
                    <div className="flex gap-2 items-center text-center text-[14px] lg:text-[16px] font-[400] leading-[19.6px] lg:leading-[22.4px] text-[#A0A0A0] ">
                      <button onClick={() => inputRef.current?.click()} className="text-[#7832A6] font-[500] ">
                        Click here
                      </button>{' '}
                      <p className=" text-[12px] lg:text-[16px]"> or drag and drop to upload file</p>
                    </div>
                    <p className="mt-[4px] lg:mt-0 text-center text-[14px] lg:text-[16px] font-[400] leading-[19.6px] lg:leading-[22.4px] text-[#A0A0A0]">
                      PDF, SVG, PNG, JPG, OR GIF (max 800X400px)
                    </p>
                  </div>
                </div>
              )}
            </div>
            <MealForm
              setMealName={setMealName}
              setMealDescription={setMealDescription}
              mealDescription={mealDescription}
              setShowPreview= {setShowPreview}
              showPreview = {showPreview}
            />
          </div>
        </div>
        {/* preview */}
        <Preview mealDescription={mealDescription} mealName={mealName} files={files} showPreview={showPreview}/>
      </div>
    </section>
  );
};

export default NewMeal;
