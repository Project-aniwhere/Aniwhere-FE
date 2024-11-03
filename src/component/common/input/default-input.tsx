'use client';

import { CommonInputProps } from '@/type/common';

const DefaultInput = ({
  type = 'text',
  placeholder = '',
  className = '',
  onClick = () => {},
}: CommonInputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${className} w-full p-3 border border-gray-300 rounded-lg bg-gray-50`}
      onClick={onClick}
    />
  );
};
export default DefaultInput;
