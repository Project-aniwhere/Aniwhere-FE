const CarouselItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <li
    className={
      'flex-none w-[calc(50%-0.5rem)]  sm:w-[calc(33%-0.66666666rem)] lg:w-[calc(25%-0.75rem)] ' +
      className
    }
  >
    {children}
  </li>
);

export default CarouselItem;
