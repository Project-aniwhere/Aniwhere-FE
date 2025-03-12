const RadioInput = ({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      type={'radio'}
      className={`border border-gray-300 rounded-lg bg-gray-50 accent-aniviolet2 ${props.className}`}
    />
  );
};
export default RadioInput;
