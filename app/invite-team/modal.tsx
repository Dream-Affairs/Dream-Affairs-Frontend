'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import closeIcon from './icons/close-icon.png';

interface MyModalProps {
  isModalOpen: boolean;
  //   setIsModalOpen: (isOpen: boolean) => void;
  handleOpenModal: (handleAction: () => void, ...args: any[]) => void;
  handleCloseModal: () => void;
  title: string;
  message: string;
  actionName: string;
  actionButtonStyle: any;
  modalAction: {
    action: () => void;
    actionName: string;
    memberId?: string; // Add this line to receive the memberId
  } | null;
}

const MyModal: React.FC<MyModalProps> = ({
  handleOpenModal,
  handleCloseModal,
  isModalOpen,
  title,
  message,
  actionName,
  actionButtonStyle,
  modalAction,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleCancel = () => {
    handleCloseModal();
    // Add logic for cancel action here
  };

  //   const handleSuspend = () => {
  //     handleCloseModal();
  //     // Add logic for suspend action here
  //   };

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

  const handleActionClick = () => {
    if (modalAction && modalAction.action) {
      modalAction.action();
    }
    handleCloseModal();
  };

  return (
    <div className="flex items-center justify-center h-screen">
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div
            className="bg-white w-[347px] height-[298px] lg:w-[600px] lg:h-[316px] lg:px-6 py-8 rounded-lg shadow-lg relative"
            ref={modalRef}
          >
            <div className="flex justify-end">
              <button
                className="text-gray-500 mr-4 lg:mr-0 hover:text-gray-700 cursor-pointer"
                onClick={handleCloseModal}
              >
                <Image src={closeIcon} alt="close" height={24} width={24} />
              </button>
            </div>
            <div className="lg:hidden my-2 border w-full border-border"></div>

            <div className="flex flex-col px-4 gap-5 lg:gap-6">
              <h2 className=" text-base lg:text-2xl text-center font-medium">{title}</h2>
              <p className=" text-center lg:text-base text-sm">{message}</p>
              <div className="flex gap-12 justify-center">
                <button
                  className={` hover:opacity-80 text-[#161616] border border-[#161616] font-medium h-[56px] w-[154px] rounded-md`}
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  className={`bg-[${actionButtonStyle.backgroundColor}] hover:opacity-80 text-[${actionButtonStyle.textColor}] h-[56px] w-[163px] rounded-md`}
                  onClick={handleActionClick}
                >
                  {actionName}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyModal;
