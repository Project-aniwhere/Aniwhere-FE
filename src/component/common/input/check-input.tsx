'use client';

const CheckInput = ({
  type = 'checkbox',
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      type={type}
      name={props.name}
      placeholder={props.placeholder}
      className={`accent-aniviolet2 ${props.className}`}
      onClick={props.onClick}
    />
  );
};
export default CheckInput;
