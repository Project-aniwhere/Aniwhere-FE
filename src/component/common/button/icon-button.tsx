'use client';

import { IconButtonProps } from '@/type/common';

const IconButton = ({
  type = 'submit',
  className = '',
  onClick = () => {},
  Icon,
  height = '3rem',
  width = '3rem',
}: IconButtonProps) => {
  return (
    <button
      type={type}
      className={`${className} flex items-center justify-center rounded-full hover:opacity-80 transition-opacity`}
      onClick={onClick}
    >
      <Icon height={height} width={width} />
    </button>
  );
};
export default IconButton;
