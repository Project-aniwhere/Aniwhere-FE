interface DailyItemProps {
  data: DailyAniProps;
}

const DailyItem = ({ data }: DailyItemProps) => {
  return (
    <div className='flex flex-col gap-2'>
      {/* todo. Image 전환 */}
      <img
        src={data.thumbnailUrl}
        alt={`${data.titleName} 섬네일`}
        className='rounded hover:scale-105 duration-200'
      />
      <div>
        <p className='font-medium'>{data.titleName}</p>
        <p className='text-sm text-gray-500'>{data.author}</p>
      </div>
    </div>
  );
};

export default DailyItem;
