'use client';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import profile from '../(assets)/profile-picture.jpg';
import { Button } from '@/components/ui/button';

interface SetModalProps {
  isModalOpen: boolean;
  src: string;
  //   setIsModalOpen: (isOpen: boolean) => void;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  handleUpload: () => void;
  //   modalRef: React.RefObject<HTMLDivElement>;
}

const SettingsModal: React.FC<SetModalProps> = ({
  handleOpenModal,
  handleCloseModal,
  isModalOpen,
  src,
  handleUpload,
}) => {
  const [isCapture, setIscapture] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const photoRef = useRef<HTMLCanvasElement | null>(null);

  const getUserCamera = () => {
    setIscapture(true);
    navigator.mediaDevices
      .getUserMedia({
        video: true,
      })
      .then((stream) => {
        if (videoRef.current) {
          const video = videoRef.current;
          video.srcObject = stream;
          video.play(); // Start playing the video
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const takePicture = () => {
    setIscapture(false);

    let width = 500;
    let height = (width / 16) * 9;
    let photo = photoRef.current;
    let video = videoRef.current;

    if (photo && video) {
      photo.setAttribute('width', width.toString());
      photo.setAttribute('height', height.toString());
      let ctx = photo.getContext('2d');

      if (ctx) {
        ctx.drawImage(video, 0, 0, width, height);
      }
    }
  };

  // useEffect(() => {
  //   getUserCamera();
  // }, []);

  // Modal Ref
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleCancel = () => {
    handleCloseModal();
    // Add logic for cancel action here
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleCloseModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isModalOpen, handleCloseModal]);

  return (
    <div className="flex items-center justify-center h-screen">
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="bg-white w-[680px] py-5 rounded-lg shadow-lg relative" ref={modalRef}>
            <div className="flex justify-between items-start px-6">
              <p className="text-base">Profile Picture</p>
              <span onClick={handleCloseModal} className="cursor-pointer w-10 h-8 flex justify-end">
                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.9 2H9.10001C8.42001 2 7.46 2.4 6.98 2.88L2.88 6.98001C2.4 7.46001 2 8.42001 2 9.10001V14.9C2 15.58 2.4 16.54 2.88 17.02L6.98 21.12C7.46 21.6 8.42001 22 9.10001 22H14.9C15.58 22 16.54 21.6 17.02 21.12L21.12 17.02C21.6 16.54 22 15.58 22 14.9V9.10001C22 8.42001 21.6 7.46001 21.12 6.98001L17.02 2.88C16.54 2.4 15.58 2 14.9 2Z"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.5 15.5L15.5 8.5"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.5 15.5L8.5 8.5"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div className="w-[190px] h-[190px] mx-auto rounded-full overflow-hidden my-5">
              <Image
                src={src === '' ? profile : src}
                alt="profile picture"
                width={0}
                height={0}
                className="w-full h-full object-cover"
              />

              {/* {
                ( isCapture ?
                    <video ref={videoRef} className='w-full h-full block'></video> :
                    <canvas ref={photoRef} className='w-full h-full'></canvas>
                )
              } */}
            </div>
            <hr className="mt-8" />
            <div className="flex justify-between mt-3 px-6">
              <div className="flex gap-4 items-start">
                <Button onClick={handleUpload} variant="outline" className="px-6 h-[40px]">
                  Use camera
                </Button>
                <Button variant="secondary" onClick={handleUpload} className="h-[40px]">
                  Upload picture
                </Button>
              </div>
              <div className="cursor-pointer">
                <span className="flex flex-col items-center justify-center">
                  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.8484 9.14001L18.1984 19.21C18.0884 20.78 17.9984 22 15.2084 22H8.78844C5.99844 22 5.90844 20.78 5.79844 19.21L5.14844 9.14001"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.3281 16.5H13.6581"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.5 12.5H14.5"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[#282828]">Delete</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsModal;
