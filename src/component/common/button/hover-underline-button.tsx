'use client';

import { CommonButtonProps } from '@/type/common';

const UnderlineButton = ({
  type = 'submit',
  text = '',
  ...props
}: CommonButtonProps) => {
  return (
    <button
      type={type}
      className={`text-aniviolet3 hover:underline ${props.className}`}
      onClick={props.onClick}
    >
      {text}
    </button>
  );
};
export default UnderlineButton;
