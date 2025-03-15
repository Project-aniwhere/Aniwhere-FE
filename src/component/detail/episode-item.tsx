import { AnimeDetailEpisodeInfoType } from '@/type/api/anime-api';
import Image from 'next/image';

export interface EpisodeItemProps {
  data: AnimeDetailEpisodeInfoType;
}

const EpisodeItem = ({ data }: EpisodeItemProps) => {
  return (
    <div className='p-5 flex items-center gap-6'>
      <Image
        src={data.stillImage}
        alt='섬네일'
        width={200}
        height={150}
        className='object-cover rounded-md'
      />
      <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-0.5'>
          <div className='text-xl font-bold'>
            <span>{data.episodeNumber}화 </span>
            <span>{data.title}</span>
          </div>
          <div className='flex gap-1 text-sm font-medium text-gray-400'>
            <span>{data.duration}분</span>
            <span>{data.releaseDate}</span>
          </div>
        </div>
        <p className='text-gray-400'>{data.episodeStory}</p>
      </div>
    </div>
  );
};

export default EpisodeItem;
