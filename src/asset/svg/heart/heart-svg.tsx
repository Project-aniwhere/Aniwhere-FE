import { SvgProps } from '@/type/svgprops';

const HeartSvg = ({
  width = '21',
  height = '19',
  fill = '#FB3D3D',
}: SvgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 19'
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10.6666 4.69431C8.66663 -0.000122309 1.66663 0.499878 1.66663 6.49991C1.66663 12.4999 10.6666 17.5001 10.6666 17.5001C10.6666 17.5001 19.6666 12.4999 19.6666 6.49991C19.6666 0.499878 12.6666 -0.000122309 10.6666 4.69431Z'
        stroke={fill}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default HeartSvg;
