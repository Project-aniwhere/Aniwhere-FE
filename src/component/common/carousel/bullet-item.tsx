interface BulletItemProps {
  isCurrent: boolean;
  onClick: () => void;
}

const BulletItem = ({ isCurrent, onClick }: BulletItemProps) => {
  return (
    <button onClick={onClick} className='w-6 h-6 p-1'>
      <div
        className={
          isCurrent
            ? 'w-full h-full bg-aniviolet2 rounded-full'
            : 'w-full h-full bg-gray-300 rounded-full'
        }
      />
    </button>
  );
};

export default BulletItem;
