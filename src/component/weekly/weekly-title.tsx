import { WEEKLY_TAGS } from '@/constant/common';
import Tag from '../common/tag/tag';

const WeeklyTitle = () => {
  return (
    <div className='px-6 py-4 flex flex-col gap-4 text-s'>
      <h2 className='font-bold text-2xl'>2024년 요일별 신작</h2>
      <ul className='flex gap-2'>
        {WEEKLY_TAGS.map((v) => (
          <li key={v.id}>
            <button>
              <Tag
                text={v.value}
                size='small'
                state={
                  v.id === '1'
                    ? 'active'
                    : v.id === '4'
                      ? 'disabled'
                      : 'default'
                }
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeeklyTitle;
