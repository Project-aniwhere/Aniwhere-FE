'use client';

import { CommonButtonProps } from '@/type/common';

const HoverColorButton = ({
  type = 'submit',
  text = '',
  disabled = false,
  ...props
}: CommonButtonProps) => {
  return (
    <button
      {...props}
      type={type}
      disabled={disabled}
      className={` text-white rounded-lg transition-color ${
        disabled
          ? 'bg-gray-300 cursor-not-allowed hover:bg-gray-300'
          : 'bg-aniviolet3 hover:bg-purple-700'
      } ${props.className}`}
    >
      {text}
    </button>
  );
};
export default HoverColorButton;
