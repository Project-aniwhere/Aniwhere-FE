interface BulletItemProps {
  isCurrent: boolean;
  onClick: () => void;
}

const BulletItem = ({ isCurrent, onClick }: BulletItemProps) => {
  return (
    <button
      onClick={onClick}
      className={
        isCurrent
          ? 'w-3 h-3 bg-aniviolet2 rounded-full'
          : 'w-3 h-3 bg-gray-300 rounded-full'
      }
    ></button>
  );
};

export default BulletItem;
