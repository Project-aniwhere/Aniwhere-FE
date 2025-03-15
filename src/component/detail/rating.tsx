import HoverColorButton from '../common/button/hover-color-button';
import { useState } from 'react';
import StarRating from '../common/star-rating/star-rating';

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    console.log(rating, content);
  };

  return (
    <div className='flex flex-col gap-4 p-3 md:p-5'>
      <div className='flex flex-col gap-3'>
        <p className='text-sm md:text-base font-medium'>내 별점</p>
        <StarRating rating={rating} setRating={setRating} />
      </div>
      <div className='p-4 flex flex-col gap-2 border border-gray-200 rounded-md'>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder='이 작품에 대한 내 코멘트를 남겨보세요!'
          className='p-2 resize-none focus-visible:outline-aniviolet2'
        />
        <div className='flex justify-end'>
          <HoverColorButton
            text='등록'
            className='px-3 py-1'
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Rating;
