interface DailyItemProps {
  data: DailyAniProps;
}

const DailyItem = ({ data }: DailyItemProps) => {
  return (
    <li className='flex flex-col gap-1'>
      {/* todo. Image 전환 */}
      <img
        src={data.thumbnailUrl}
        alt={`${data.titleName} 섬네일`}
        className='rounded-md'
      />
      <div>
        <p className='font-medium'>{data.titleName}</p>
        <p className='text-sm text-slate-500'>{data.author}</p>
      </div>
    </li>
  );
};

export default DailyItem;
