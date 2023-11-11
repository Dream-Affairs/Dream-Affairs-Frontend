import React, { ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <>
      <div className="fixed inset-0 z-50 bg-foreground/70" />
      {children}
    </>
  );
};

export default Modal;
