interface CarouselitemProps {
  children: React.ReactNode;
  className?: string;
  countPerItem?: number;
}

const CarouselItem = ({
  children,
  className = '',
  countPerItem,
}: CarouselitemProps) => (
  <li
    className={
      'flex-none basis-1/2 sm:basis-1/3 lg:basis-1/4 overflow-hidden flex-grow ' +
      className
    }
    style={{
      flexBasis: countPerItem ? `${100 / countPerItem}%` : '',
    }}
  >
    {children}
  </li>
);

export default CarouselItem;
