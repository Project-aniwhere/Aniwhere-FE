interface BulletItemProps {
  isCurrent: boolean;
  onClick: () => void;
}

const BulletItem = ({ isCurrent, onClick }: BulletItemProps) => {
  return (
    <button onClick={onClick} className='w-6 h-6 p-1'>
      <div
        className={`w-full h-full rounded-full ${isCurrent ? 'bg-aniviolet3' : 'bg-gray-300'}`}
      />
    </button>
  );
};

export default BulletItem;
