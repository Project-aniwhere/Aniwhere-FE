const RadioInput = ({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      type={'radio'}
      className={`w-full p-3 border border-gray-300 rounded-lg bg-gray-50 ${props.className}`}
    />
  );
};
export default RadioInput;
