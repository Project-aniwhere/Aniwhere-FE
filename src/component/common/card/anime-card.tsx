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
import { Review } from '@/type/api/anime-recommend-api';
import AnimeCardReviews from './anime-card-reviews';
import StarRate from '../comment/star-rate';

interface AnimeCardProps {
  id: number;
  title: string;
  genre: AnimeGenreType;
  tag: AnimeTagType[];
  season: AnimeSeasonType;
  releaseType: AnimeReleaseType;
  isBroadcasting: AnimeBroadCastType;
  rating: number;
  thumbnail?: string;
  className?: string;
  reviews?: Review[];
  ranking?: number;
}

const getRankColor = (idx: number) => {
  switch (idx) {
    case 1:
      return 'bg-aniviolet1';
    case 2:
      return 'bg-aniviolet2';
    case 3:
      return 'bg-aniviolet3';
    default:
      return 'bg-aniviolet4';
  }
};

const AnimeCard = ({
  id,
  title,
  tag,
  genre,
  season,
  releaseType,
  isBroadcasting,
  rating,
  thumbnail,
  reviews,
  className,
  ranking,
}: AnimeCardProps) => {
  return (
    <div
      className={
        'relative flex-grow rounded-lg bg-white overflow-hidden border-2 hover:scale-105 duration-300 z-0 hover:z-10 ' +
        className
      }
    >
      <div className='relative w-full aspect-square'>
        {ranking && (
          <p
            className={`absolute z-10 font-bold text-lg flex items-center justify-center text-white w-10 h-10 rounded-ee-lg ${getRankColor(ranking)}`}
          >
            {ranking}
          </p>
        )}
        <Link
          href={`/detail/${id}`}
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
        <div className='flex flex-row justify-between'>
          <p className='font-semibold'>{title}</p>
          <StarRate rate={rating} />
        </div>
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
        {reviews && <AnimeCardReviews reviews={reviews} />}
        <p className='text-sm text-aniviolet3'>{`${AnimeSeasonTypeObject[season]} • ${AnimeReleaseTypeObject[releaseType]} • ${AnimeBroadCastTypeObject[isBroadcasting]}`}</p>
      </div>
    </div>
  );
};

export default AnimeCard;
