const CarouselItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <li
    className={
      'w-full h-32 cursor-pointer hover:scale-[1.02] duration-200 ' + className
    }
  >
    {children}
  </li>
);

export default CarouselItem;
