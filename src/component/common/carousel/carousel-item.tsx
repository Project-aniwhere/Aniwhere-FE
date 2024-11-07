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
      'flex-none basis-1/2 sm:basis-1/3 lg:basis-1/4 overflow-hidden ' +
      className
    }
    style={{
      flexBasis: countPerItem ? `${100 / countPerItem}%` : '',
    }}
  >
    <div>{children}</div>
  </li>
);

export default CarouselItem;
