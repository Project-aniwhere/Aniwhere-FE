const CarouselItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <li
    className={
      'w-full h-32 cursor-pointer bg-yellow-300 hover:scale-105 duration-200 ' +
      className
    }
  >
    {children}
  </li>
);

export default CarouselItem;
