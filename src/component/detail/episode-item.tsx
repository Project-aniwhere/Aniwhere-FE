import { AnimeDetailEpisodeInfoType } from '@/type/api/anime-api';
import Image from 'next/image';

export interface EpisodeItemProps {
  item: AnimeDetailEpisodeInfoType;
}

const EpisodeItem = ({ item }: EpisodeItemProps) => {
  return (
    <div className='p-5 flex items-center gap-6'>
      <div className='relative min-w-[270px] h-[180px] rounded bg-gray-200'>
        {item.stillImage && (
          <Image
            src={item.stillImage}
            alt={`${item.episodeNumber}화 섬네일 이미지`}
            fill
            className='object-cover rounded-md'
          />
        )}
      </div>
      <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-0.5'>
          <div className='text-xl font-bold'>
            <span>{item.episodeNumber}화 </span>
            <span>{item.title}</span>
          </div>
          <div className='flex gap-1 text-sm font-medium text-gray-400'>
            <span>{item.duration}분</span>
            <span>{item.releaseDate.join('.')}</span>
          </div>
        </div>
        <p className='text-gray-400 line-clamp-3'>{item.episodeStory}</p>
      </div>
    </div>
  );
};

export default EpisodeItem;
