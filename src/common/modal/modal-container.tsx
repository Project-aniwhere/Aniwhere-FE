import { forwardRef, Ref } from 'react';

interface ModalContainerProps {
  children: React.ReactNode;
  onClose: () => void;
}

const ModalContainer: React.ForwardRefRenderFunction<
  HTMLDialogElement,
  ModalContainerProps
> = (
  { children, onClose }: ModalContainerProps,
  ref: Ref<HTMLDialogElement>
) => {
  return (
    <dialog ref={ref} className='bg-white' onClose={onClose}>
      {children}
      <button onClick={onClose} className='close-button' />
    </dialog>
  );
};

export default forwardRef(ModalContainer);
