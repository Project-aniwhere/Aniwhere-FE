const BulletItem = () => {
  return (
    <div className='bullet-item'>
      <div className='bullet'></div>
    </div>
  );
};

interface BulletProps {
  count: number;
  currentIdx: number;
  setCurrentIdx: React.Dispatch<React.SetStateAction<number>>;
}

const CarouselBullet = ({ count, currentIdx, setCurrentIdx }: BulletProps) => {
  return (
    <div className='carousel-bullet'>
      {Array.from({ length: count }, (_, idx) => (
        <BulletItem key={idx} />
      ))}
    </div>
  );
};
