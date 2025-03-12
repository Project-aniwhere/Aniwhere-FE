'use client';

import { CommonButtonProps } from '@/type/common';

const UnderlineButton = ({
  type = 'submit',
  text = '',
  ...props
}: CommonButtonProps) => {
  return (
    <button
      {...props}
      type={type}
      className={`text-aniviolet3 hover:underline ${props.className}`}
    >
      {text}
    </button>
  );
};
export default UnderlineButton;
