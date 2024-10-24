import { SvgProps } from '@/type/svg/svgprops';

interface ArrowSvgProps extends SvgProps {
  direction?: 'left' | 'right' | 'up' | 'down';
}

const directionMap = {
  left: 'rotate-0',
  right: 'rotate-180',
  up: 'rotate-90',
  down: 'rotate-270',
};

const ArrowSvg = ({
  width = '16',
  height = '28',
  fill = 'black',
  direction = 'left',
  className,
}: ArrowSvgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 16 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`transform ${directionMap[direction]} ${className}`}
    >
      <path
        d='M14 26L2 14L14 2'
        stroke={fill}
        strokeWidth='4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ArrowSvg;
