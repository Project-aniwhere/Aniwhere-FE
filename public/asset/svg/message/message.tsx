import { SvgProps } from '@/type/svgprops';

const MessageSvg = ({}: SvgProps) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      stroke='white'
    >
      <path
        d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'
        strokeWidth='2'
      />
    </svg>
  );
};

export default MessageSvg;
