import { AnimeCastingInfoType } from '@/type/api/anime-api';

interface CastProductItemProps {
  data: AnimeCastingInfoType;
}

const CastProductItem = ({ data }: CastProductItemProps) => {
  return (
    <div className='flex items-center gap-4 p-3 md:p-5'>
      <div className='flex flex-col gap-1'>
        <p className='text-sm md:text-base font-medium'>
          {data.voiceActorName}
        </p>
        <div className='text-xs md:text-sm text-gray-400'>
          <span>{data.characterDescription} </span>
          <span>{data.characterName}</span>
        </div>
      </div>
    </div>
  );
};

export default CastProductItem;
