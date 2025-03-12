import CrossSvg from '@/asset/svg/cross/cross-svg';
import { forwardRef, Ref } from 'react';

interface ModalContainerProps {
  children: React.ReactNode;
  onClose: () => void;
  modalType: 'dialog' | 'modal';
  className?: string;
}

const ModalContainer: React.ForwardRefRenderFunction<
  HTMLDialogElement,
  ModalContainerProps
> = (
  { children, onClose, className = '', modalType }: ModalContainerProps,
  ref: Ref<HTMLDialogElement>
) => {
  return (
    <dialog
      ref={ref}
      className={
        `bg-transparent rounded-lg ${modalType === 'dialog' ? 'relative' : ''} ` +
        className
      }
      onClose={onClose}
    >
      {children}
      <button
        onClick={onClose}
        className='absolute right-2 top-2 rounded-full bg-aniviolet3 bg-opacity-60 p-0.5 size-6 flex items-center justify-center'
      >
        <CrossSvg fill='white' />
      </button>
    </dialog>
  );
};

export default forwardRef(ModalContainer);
