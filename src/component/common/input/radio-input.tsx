'use client';

import { RadioInputProps } from '@/type/common';

const RadioInput = ({
  type = 'radio',
  placeholder = '',
  className = '',
  name = '',
  onClick = () => {},
}: RadioInputProps) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={`w-full p-3 border border-gray-300 rounded-lg bg-gray-50 ${className}`}
      onClick={onClick}
    />
  );
};
export default RadioInput;
