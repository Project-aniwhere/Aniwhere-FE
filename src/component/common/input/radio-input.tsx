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
      className={`${className} w-full p-3 border border-gray-300 rounded-lg bg-gray-50`}
      onClick={onClick}
    />
  );
};
export default RadioInput;
