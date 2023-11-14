import React, { ReactNode, Dispatch, SetStateAction } from 'react';

interface ModalProps {
  children: ReactNode;
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  hidden: string;
}

const Modal: React.FC<ModalProps> = ({ children, modal, setModal, hidden }) => {
  return (
    <>
      <div
        onClick={() => setModal(false)}
        className={`fixed inset-0 z-50 bg-foreground/70 transition-all duration-200 ${hidden} `}
      />
      {children}
    </>
  );
};

export default Modal;
