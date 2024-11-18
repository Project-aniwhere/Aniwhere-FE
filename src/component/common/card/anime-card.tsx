import {
  AnimeBroadCastType,
  AnimeBroadCastTypeObject,
  AnimeGenreObject,
  AnimeGenreType,
  AnimeReleaseType,
  AnimeReleaseTypeObject,
  AnimeSeasonType,
  AnimeSeasonTypeObject,
  AnimeTagObject,
  AnimeTagType,
} from '@/type/anime-tag';
import Image from 'next/image';
import sample from '@/asset/img/mainslider/sample.jpg';
import TagItem from '@/component/tag/tag-item';
import Link from 'next/link';
interface AnimeCardProps {
  title: string;
  genre: AnimeGenreType;
  tag: AnimeTagType[];
  season: AnimeSeasonType;
  releaseType: AnimeReleaseType;
  isBroadcasting: AnimeBroadCastType;
  thumbnail?: string;
  className?: string;
}

const AnimeCard = ({
  title,
  tag,
  genre,
  season,
  releaseType,
  isBroadcasting,
  thumbnail,
  className,
}: AnimeCardProps) => {
  return (
    <div
      className={
        'relative flex-grow rounded-lg bg-white overflow-hidden border-2 hover:scale-105 duration-300 z-0 hover:z-10 ' +
        className
      }
    >
      <div className='relative w-full aspect-square'>
        <Link
          href='/'
          className='absolute opacity-0 bg-black/40 size-full z-10 hover:opacity-100 duration-300 flex items-center justify-center'
        >
          <span className='px-4 py-2 text-white bg-aniviolet1 rounded-lg'>
            자세히 보기
          </span>
        </Link>
        <Image
          src={thumbnail ?? sample.src}
          alt='썸네일'
          fill
          className='object-cover'
        />
      </div>

      <div className='p-4 space-y-2'>
        <p className='font-semibold'>{title}</p>
        <div className='flex flex-row gap-2 overflow-x-scroll scrollbar-none'>
          <TagItem
            tagName={AnimeGenreObject[genre]}
            className='bg-aniviolet1'
          />
          {tag.slice(0, 2).map((name) => (
            <TagItem
              key={name}
              tagName={AnimeTagObject[name]}
              className='bg-aniviolet1'
            />
          ))}
        </div>
        <p className='text-sm text-aniviolet3'>{`${AnimeSeasonTypeObject[season]} • ${AnimeReleaseTypeObject[releaseType]} • ${AnimeBroadCastTypeObject[isBroadcasting]}`}</p>
      </div>
    </div>
  );
};

export default AnimeCard;
