import { SvgProps } from '@/type/svg/svgprops';

const EmailSvg = ({}: SvgProps) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      stroke='white'
    >
      <rect x='2' y='4' width='20' height='16' rx='2' strokeWidth='2' />
      <path d='M22 4l-10 8L2 4' strokeWidth='2' />
    </svg>
  );
};

export default EmailSvg;
