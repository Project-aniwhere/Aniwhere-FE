'use client';

const DefaultInput = ({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className={`w-full p-3 border border-gray-300 rounded-lg bg-gray-50 ${props.className}`}
      onClick={props.onClick}
    />
  );
};
export default DefaultInput;
