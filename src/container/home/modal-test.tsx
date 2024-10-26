'use client';

import ModalDialog from '@/common/modal/modal-dialog';
import { ModalRef } from '@/type/modal/modal';
import Link from 'next/link';
import { useRef } from 'react';

const ModalTest = () => {
  const modalRef = useRef<ModalRef>(null);

  return (
    <>
      <Link href='/photo'>모달1</Link>
      <button onClick={() => modalRef.current?.openModal()}>모달2</button>
      <ModalDialog ref={modalRef}>모달2</ModalDialog>
    </>
  );
};

export default ModalTest;
