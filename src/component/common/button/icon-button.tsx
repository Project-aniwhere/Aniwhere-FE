'use client';

import { IconButtonProps } from '@/type/common';

const IconButton = ({
  type = 'submit',
  children,
  ...props
}: IconButtonProps) => {
  return (
    <button
      {...props}
      type={type}
      className={`flex items-center justify-center rounded-full hover:opacity-80 transition-opacity ${props.className}`}
    >
      {children}
    </button>
  );
};
export default IconButton;
