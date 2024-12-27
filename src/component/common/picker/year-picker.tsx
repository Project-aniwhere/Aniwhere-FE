import CalendarSvg from '@/asset/svg/calendar/calendar-svg';
import useToggle from '@/hook/usetoggle';
import YearList from './year-list';
import { YearPickerProps } from '@/type/year-picker';
import { getYear } from '@/util/date';

interface Props extends YearPickerProps {
  startYear?: string;
  length?: number;
}

const YearPicker = ({
  currentYear,
  handleSelectYear,
  startYear = getYear(),
  length = 10,
}: Props) => {
  const [isOpenYearMenu, handleToggleYearMenu] = useToggle(false);

  const years = Array.from({ length }, (_, i) => String(Number(startYear) - i));

  const handleChangeYear = (year: string) => {
    handleSelectYear(year);
    handleToggleYearMenu();
  };

  return (
    <div className='relative inline-flex'>
      <button
        aria-label='calendar'
        className='text-base md:text-xl'
        onClick={handleToggleYearMenu}
      >
        <CalendarSvg fill='#9CA3AF' />
      </button>
      {isOpenYearMenu && (
        <div className='absolute z-10 left-0 top-5 md:top-6'>
          <YearList
            currentYear={currentYear}
            years={years}
            handleSelectYear={handleChangeYear}
          />
        </div>
      )}
    </div>
  );
};

export default YearPicker;
