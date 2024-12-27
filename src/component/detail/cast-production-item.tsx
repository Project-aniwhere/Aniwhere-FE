import sample1 from '@/asset/img/subslider/sample1.jpg';
import Image from 'next/image';

interface CastProductItemProps {
  characterName: string;
  characterDescription: string;
  voiceActorName: string;
}

const CastProductItem = ({
  characterName,
  characterDescription,
  voiceActorName,
}: CastProductItemProps) => {
  return (
    <div className='flex items-center gap-4 p-3 md:p-5'>
      <Image
        src={sample1.src}
        alt='프로필'
        width={80}
        height={80}
        className='object-cover rounded-full'
      />
      <div className='flex flex-col gap-1'>
        <p className='text-sm md:text-base font-medium'>{voiceActorName}</p>
        <div className='text-xs md:text-sm text-gray-400'>
          <span>{characterDescription} </span>
          <span>{characterName}</span>
        </div>
      </div>
    </div>
  );
};

export default CastProductItem;
