import EmptyStar from '@/asset/svg/star/empty-star-svg';
import HoverColorButton from '../common/button/hover-color-button';

const Rating = () => {
  return (
    <div className='flex flex-col gap-4 p-3 md:p-5'>
      <div className='flex flex-col gap-3'>
        <p className='text-sm md:text-base font-medium'>내 별점</p>
        <div className='flex gap-2.5 text-xl md:text-3xl font-medium'>
          <EmptyStar fill='#613DC1' width='2.5rem' height='2.5rem' />
          <EmptyStar fill='#613DC1' width='2.5rem' height='2.5rem' />
          <EmptyStar fill='#613DC1' width='2.5rem' height='2.5rem' />
          <EmptyStar fill='#613DC1' width='2.5rem' height='2.5rem' />
          <EmptyStar fill='#613DC1' width='2.5rem' height='2.5rem' />
        </div>
      </div>
      <div className='p-4 flex flex-col gap-2 border border-gray-200 rounded-md'>
        <textarea
          placeholder='이 작품에 대한 내 코멘트를 남겨보세요!'
          className='p-2 resize-none focus-visible:outline-aniviolet2'
        />
        <div className='flex justify-end'>
          <HoverColorButton text='등록' className='px-3 py-1' />
        </div>
      </div>
    </div>
  );
};

export default Rating;
