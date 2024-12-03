import { SvgProps } from '@/type/svgprops';

const SearchIconSvg = ({
  width = '1.25rem',
  height = '1.25rem',
  fill = '#B3B3B3',
  className,
}: SvgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M19.125 19.125L14.9562 14.9562M17.2083 9.54167C17.2083 13.7758 13.7758 17.2083 9.54167 17.2083C5.30748 17.2083 1.875 13.7758 1.875 9.54167C1.875 5.30748 5.30748 1.875 9.54167 1.875C13.7758 1.875 17.2083 5.30748 17.2083 9.54167Z'
        stroke={fill}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default SearchIconSvg;
