import { SvgProps } from '@/type/svgprops';

const InstagramSvg = ({}: SvgProps) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      stroke='white'
    >
      <rect x='2' y='2' width='20' height='20' rx='5' strokeWidth='2' />
      <circle cx='12' cy='12' r='4' strokeWidth='2' />
      <circle cx='17' cy='7' r='1' fill='white' />
    </svg>
  );
};

export default InstagramSvg;
