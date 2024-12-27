import CastProductItem from './cast-production-item';
import { AnimeCastingInfoType } from '@/type/api/anime-api';

interface CastProductListProps {
  list: AnimeCastingInfoType[];
}

const CastProductList = ({ list }: CastProductListProps) => {
  return (
    <ul className='grid md:grid-cols-4'>
      {list.map((item) => (
        <li key={item.castingId}>
          <CastProductItem data={item} />
        </li>
      ))}
    </ul>
  );
};

export default CastProductList;
