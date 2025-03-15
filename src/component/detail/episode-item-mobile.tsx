import Image from 'next/image';
import { EpisodeItemProps } from './episode-item';

const MobileEpisodeItem = ({ data }: EpisodeItemProps) => {
  return (
    <div className='p-3 flex flex-col gap-3'>
      <div className='flex gap-3'>
        <Image
          src={data.stillImage}
          alt='섬네일 이미지'
          width={140}
          height={140}
          className='object-cover rounded-md'
        />
        <div className='flex flex-col gap-0.5'>
          <div className='font-bold'>
            <span>{data.episodeNumber}화 </span>
            <span>{data.title}</span>
          </div>
          <div className='flex gap-1 text-xs font-medium text-gray-400'>
            <span>{data.duration}분</span>
            <span>{data.releaseDate}</span>
          </div>
        </div>
      </div>
      <p className='text-gray-400 text-sm line-clamp-3'>{data.episodeStory}</p>
    </div>
  );
};

export default MobileEpisodeItem;
