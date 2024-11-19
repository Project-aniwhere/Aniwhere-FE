'use client';

const CheckInput = ({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      type='checkbox'
      className={`accent-aniviolet2 ${props.className}`}
    />
  );
};
export default CheckInput;
