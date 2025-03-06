import ArrowSvg from '@/asset/svg/arrow/arrow';
import { AnimatePresence, motion } from 'framer-motion';
interface ArrorButtonProps {
  direction: 'left' | 'right' | 'up' | 'down';
  onClick: () => void;
  className?: string;
  fill?: string;
  isShow?: boolean;
}

const ArrowButton = ({
  direction,
  onClick,
  fill = 'black',
  className = '',
  isShow = true,
}: ArrorButtonProps) => {
  return (
    <AnimatePresence>
      {isShow && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={className}
          onClick={onClick}
        >
          <ArrowSvg
            fill={fill}
            direction={direction}
            width='0.5rem'
            height='0.875rem'
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ArrowButton;
