import CastProductItem from './cast-production-item';
import { AnimeCastingInfoType } from '@/type/api/anime-api';

interface CastProductListProps {
  list: AnimeCastingInfoType[];
  studio: string;
  director: string;
  script: string;
}

const CastProductList = ({
  list,
  studio,
  director,
  script,
}: CastProductListProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex flex-col gap-3 md:gap-5 p-3 md:p-5'>
        <p className='md:text-lg font-bold'>제작</p>
        <ul className='grid md:grid-cols-4 gap-3 md:gap-5'>
          {[
            {
              name: studio,
              descriotion: '제작사',
            },
            {
              name: director,
              descriotion: '감독',
            },
            {
              name: script,
              descriotion: '각본',
            },
          ].map((item) => (
            <li key={item.descriotion}>
              <CastProductItem
                name={item.name}
                description={item.descriotion}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className='flex flex-col gap-3 md:gap-5 p-3 md:p-5'>
        <p className='md:text-lg font-bold'>성우</p>
        <ul className='grid md:grid-cols-4 gap-3 md:gap-5'>
          {list.map((item) => (
            <li key={item.castingId}>
              <CastProductItem
                name={item.voiceActorName}
                description={item.characterName}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CastProductList;
