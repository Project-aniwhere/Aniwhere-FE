import sample1 from '@/asset/img/subslider/sample1.jpg';
import Image from 'next/image';

interface CastProductItemProps {
  characterName: string;
  voiceActorName: string;
}

const CastProductItem = ({
  characterName,
  voiceActorName,
}: CastProductItemProps) => {
  return (
    <div className='flex items-center gap-4 p-5'>
      <Image
        src={sample1.src}
        alt='프로필'
        width={80}
        height={80}
        className='object-cover rounded-full'
      />
      <div className='flex flex-col gap-1'>
        <p className='font-medium'>{voiceActorName}</p>
        <div className='text-sm text-gray-400'>
          <span>성우 </span>
          <span>{characterName}</span>
        </div>
      </div>
    </div>
  );
};

export default CastProductItem;
