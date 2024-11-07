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
}

const ModalDialog = ({ children }: ModalProps, ref: Ref<ModalRef>) => {
  const [dialogRef, setDialogRef] = useState<HTMLDialogElement | null>(null);

  const closeModal = useCallback(() => dialogRef?.close(), [dialogRef]);
  const openModal = useCallback(() => dialogRef?.show(), [dialogRef]);

  useImperativeHandle(
    ref,
    () => ({
      closeModal,
      openModal,
    }),
    [closeModal, openModal]
  );

  return (
    <div className='relative w-full'>
      <ModalContainer
        className='absolute top-0 z-20 shadow-lg p-4 rounded-lg'
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
