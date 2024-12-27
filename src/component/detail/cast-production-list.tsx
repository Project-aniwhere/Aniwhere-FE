import { AnimeCastingProps } from '@/type/anime';
import CastProductItem from './cast-production-item';

interface CastProductListProps {
  list: AnimeCastingProps[];
}

const CastProductList = ({ list }: CastProductListProps) => {
  return (
    <ul className='grid grid-cols-4'>
      {list.map((item) => (
        <li key={item.castingId}>
          <CastProductItem
            characterName={item.characterName}
            voiceActorName={item.voiceActorName}
          />
        </li>
      ))}
    </ul>
  );
};

export default CastProductList;
