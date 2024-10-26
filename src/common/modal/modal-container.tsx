import { forwardRef, Ref } from 'react';

interface ModalContainerProps {
  children: React.ReactNode;
  onClose: () => void;
  className?: string;
}

const ModalContainer: React.ForwardRefRenderFunction<
  HTMLDialogElement,
  ModalContainerProps
> = (
  { children, onClose, className = '' }: ModalContainerProps,
  ref: Ref<HTMLDialogElement>
) => {
  return (
    <dialog ref={ref} className={'bg-white ' + className} onClose={onClose}>
      {children}
      <button onClick={onClose} className='close-button'>
        X
      </button>
    </dialog>
  );
};

export default forwardRef(ModalContainer);
