'use client';

import { IconButtonProps } from '@/type/common';

const IconButton = ({
  type = 'submit',
  children,
  ...props
}: IconButtonProps) => {
  return (
    <button
      type={type}
      className={`flex items-center justify-center rounded-full hover:opacity-80 transition-opacity ${props.className}`}
      onClick={props.onClick}
    >
      {children}
    </button>
  );
};
export default IconButton;
