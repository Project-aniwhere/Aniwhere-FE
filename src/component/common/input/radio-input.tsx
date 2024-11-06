'use client';

const RadioInput = ({
  type = 'radio',
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      type={type}
      name={props.name}
      placeholder={props.placeholder}
      className={`w-full p-3 border border-gray-300 rounded-lg bg-gray-50 ${props.className}`}
      onClick={props.onClick}
    />
  );
};
export default RadioInput;
