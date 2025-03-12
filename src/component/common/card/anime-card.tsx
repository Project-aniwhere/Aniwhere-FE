import {
  AnimeBroadCastType,
  AnimeBroadCastTypeObject,
  AnimeReleaseType,
  AnimeReleaseTypeObject,
  AnimeSeasonType,
  AnimeSeasonTypeObject,
} from '@/type/anime-tag';
import Image from 'next/image';
import sample from '@/asset/img/mainslider/sample.jpg';
import TagItem from '@/component/tag/tag-item';
import Link from 'next/link';
import { Review } from '@/type/api/anime-recommend-api';
import CommentSwiper from '../comment/comment-swiper';
import StarRate from '../comment/star-rate';
import { AnimeTagType } from '@/type/api/tag-api';

interface AnimeCardProps {
  id: number;
  title: string;
  tag: AnimeTagType[];
  season: AnimeSeasonType;
  releaseType: AnimeReleaseType;
  isBroadcasting: AnimeBroadCastType;
  rating: number;
  thumbnail?: string;
  className?: string;
  reviews?: Review[];
  ranking?: number;
  imageAspect?: string;
}

const AnimeCard = ({
  id,
  title,
  tag,
  season,
  releaseType,
  isBroadcasting,
  rating,
  thumbnail,
  reviews,
  className,
  ranking,
  imageAspect = '9/16',
}: AnimeCardProps) => {
  return (
    <div
      className={
        'relative flex-grow rounded-lg bg-white overflow-hidden border-2 hover:scale-105 duration-300 z-0 hover:z-10 ' +
        className
      }
    >
      <div className='relative w-full' style={{ aspectRatio: imageAspect }}>
        {ranking && (
          <p
            className={`absolute z-10 font-bold text-lg flex items-center justify-center text-white w-10 h-10 rounded-ee-lg bg-aniviolet4`}
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
          {tag.map(({ categoryId, categoryName }) => (
            <TagItem
              tagName={categoryName}
              className='bg-aniviolet1'
              key={categoryId}
              tagState='neutral'
            />
          ))}
        </div>
        {reviews && <CommentSwiper reviews={reviews} />}
        <p className='text-sm text-aniviolet3'>{`${AnimeSeasonTypeObject[season]} • ${AnimeReleaseTypeObject[releaseType]} • ${AnimeBroadCastTypeObject[isBroadcasting]}`}</p>
      </div>
    </div>
  );
};

export default AnimeCard;
