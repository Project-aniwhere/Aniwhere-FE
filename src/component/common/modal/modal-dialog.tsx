'use client';

import {
  forwardRef,
  Ref,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';
import ModalContainer from './modal-container';
import { ModalRef } from '@/type/modal';

interface ModalProps {
  children: React.ReactNode;
  onOpen?: () => void;
  onClose?: () => void;
}

const ModalDialog = (
  { children, onOpen, onClose }: ModalProps,
  ref: Ref<ModalRef>
) => {
  const [dialogRef, setDialogRef] = useState<HTMLDialogElement | null>(null);

  const closeModal = useCallback(() => {
    dialogRef?.close();
    onClose?.();
  }, [dialogRef, onClose]);
  const openModal = useCallback(() => {
    dialogRef?.showModal();
    onOpen?.();
  }, [dialogRef, onOpen]);

  useImperativeHandle(
    ref,
    () => ({
      closeModal,
      openModal,
    }),
    [closeModal, openModal]
  );

  return (
    <div className='absolute w-full'>
      <ModalContainer
        className='absolute top-0 z-20 shadow-lg p-4 rounded-lg bg-white'
        ref={setDialogRef}
        onClose={closeModal}
        modalType='dialog'
      >
        {children}
      </ModalContainer>
    </div>
  );
};

export default forwardRef(ModalDialog);
