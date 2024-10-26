'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import ModalContainer from './modal-container';

interface ModalProps {
  children: React.ReactNode;
  isCentered?: boolean;
}

const Modal = ({ children, isCentered = true }: ModalProps) => {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      if (isCentered) {
        dialogRef.current?.showModal();
      } else {
        dialogRef.current?.show();
      }
    }
  }, [isCentered]);

  const onClose = () => {
    router.back();
  };

  return (
    <ModalContainer ref={dialogRef} onClose={onClose}>
      {children}
    </ModalContainer>
  );
};

export default Modal;
