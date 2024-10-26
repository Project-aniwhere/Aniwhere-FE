import ArrowSvg from '@/asset/svg/arrow/arrow';

interface ArrorButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  className?: string;
  fill?: string;
}

const ArrowButton = ({
  direction,
  onClick,
  fill = 'black',
  className = '',
}: ArrorButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      <ArrowSvg fill={fill} direction={direction} />
    </button>
  );
};

export default ArrowButton;
