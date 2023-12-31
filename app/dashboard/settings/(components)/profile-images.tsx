'use client';
import React, { useState } from 'react';
import cpic from '../(assets)/cover-photo.jpg';
import ppic from '../(assets)/profile-picture.jpg';
import Image from 'next/image';
import SettingsModal from './modal';
import { BiPencil } from 'react-icons/bi';

const CoverPhoto = () => {
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [coverImage, setCoverImage] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };
  const handleCoverUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setCoverImage(URL.createObjectURL(file));
    }
  };

  const handleChooseImage = () => {
    const fileInput = document.getElementById('imageInput') as HTMLInputElement;
    fileInput.click();
  };
  const handleChooseCover = () => {
    const fileInput = document.getElementById('coverImageInput') as HTMLInputElement;
    fileInput.click();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Enable scrolling when the modal is closed
    document.body.style.overflow = 'auto';
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
    // Disable scrolling when the modal is open
    document.body.style.overflow = 'hidden';
  };

  return (
    <div className="w-full h-[130px] sm:h-[170px] md:h-[290px]">
      <div className="relative w-full h-full object-cover overflow-hidden bg-black">
        <Image
          src={coverImage === '' ? cpic : coverImage}
          alt="cover image"
          className="w-full h-full object-cover opacity-75"
          width={0}
          height={0}
        />
        <span
          onClick={handleChooseCover}
          className="inline-block p-2 rounded-full text-2xl absolute right-5 top-4 md:right-5 md:top-8 bg-white cursor-pointer"
        >
          <input type="file" hidden onChange={handleCoverUpload} accept="image/*" id="coverImageInput" />
          <BiPencil className="text-[#7C7C7C] w-[19px] h-[19px] md:w-[24px] md:h-[24px]" />
        </span>
      </div>
      <div className="relative w-[110px] h-[110px] sm:w-[140px] sm:h-[140px] md:w-[180px] md:h-[180px] -mt-14 md:-mt-[4.5rem] ms-4 md:ms-[4.5rem]">
        <div className="profile-picture w-full h-full relative rounded-full overflow-hidden">
          <Image
            src={selectedImage === '' ? ppic : selectedImage}
            alt="cover image"
            className="w-full h-full object-cover"
            width={0}
            height={0}
          />
          <div
            className={`w-full h-full opacity-0 bg-black absolute top-0  hover:opacity-20 transition-all duration-300 cursor-pointer`}
          ></div>
        </div>
        <span
          onClick={handleOpenModal}
          className="inline-block p-2 rounded-full text-2xl absolute -right-3 bottom-4 md:-right-2 md:bottom-8 bg-white cursor-pointer"
        >
          <input type="file" hidden onChange={handleImageUpload} accept="image/*" id="imageInput" />
          <svg
            className="w-[19px] h-[19px] md:w-[24px] md:h-[24px]"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.76017 22H17.2402C20.0002 22 21.1002 20.31 21.2302 18.25L21.7502 9.99C21.8902 7.83 20.1702 6 18.0002 6C17.3902 6 16.8302 5.65 16.5502 5.11L15.8302 3.66C15.3702 2.75 14.1702 2 13.1502 2H10.8602C9.83017 2 8.63017 2.75 8.17017 3.66L7.45017 5.11C7.17017 5.65 6.61017 6 6.00017 6C3.83017 6 2.11017 7.83 2.25017 9.99L2.77017 18.25C2.89017 20.31 4.00017 22 6.76017 22Z"
              stroke="#7C7C7C"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M10.5 8H13.5" stroke="#7C7C7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M12 18C13.79 18 15.25 16.54 15.25 14.75C15.25 12.96 13.79 11.5 12 11.5C10.21 11.5 8.75 12.96 8.75 14.75C8.75 16.54 10.21 18 12 18Z"
              stroke="#7C7C7C"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <SettingsModal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        handleOpenModal={handleOpenModal}
        src={selectedImage}
        handleUpload={handleChooseImage}
      />
    </div>
  );
};

export default CoverPhoto;
