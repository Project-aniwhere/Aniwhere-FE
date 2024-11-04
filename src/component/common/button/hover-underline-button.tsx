'use client';

import { CommonButtonProps } from '@/type/common';

const UnderlineButton = ({
  type = 'submit',
  text = '',
  className = '',
  onClick = () => {},
}: CommonButtonProps) => {
  return (
    <button
      type={type}
      className={`${className} text-aniviolet3 hover:underline`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default UnderlineButton;
