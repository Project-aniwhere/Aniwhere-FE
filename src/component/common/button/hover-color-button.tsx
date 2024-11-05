'use client';

import { CommonButtonProps } from '@/type/common';

const HoverColorButton = ({
  type = 'submit',
  text = '',
  className = '',
  onClick = () => {},
}: CommonButtonProps) => {
  return (
    <button
      type={type}
      className={`bg-aniviolet3 text-white rounded-lg hover:bg-purple-700 transition-color ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default HoverColorButton;
