import CalendarSvg from '@/asset/svg/calendar/calendar-svg';
import useToggle from '@/hook/usetoggle';
import YearList from './year-list';
import { YearPickerProps } from '@/type/year-picker';

interface Props extends YearPickerProps {
  startYear?: number;
  length?: number;
}

const YearPicker = ({
  selectedYear,
  setSelectedYear,
  startYear = new Date().getFullYear(),
  length = 10,
}: Props) => {
  const [isOpenYearMenu, handleToggleYearMenu] = useToggle(false);

  const years = Array.from({ length }, (_, i) => startYear - i);

  const handleChangeYear = (year: number) => {
    setSelectedYear(year);
    handleToggleYearMenu();
  };

  return (
    <div className='relative inline-flex'>
      <button className='text-base md:text-xl' onClick={handleToggleYearMenu}>
        <CalendarSvg fill='#9CA3AF' />
      </button>
      {isOpenYearMenu && (
        <div className='absolute z-10 left-0 top-5 md:top-6'>
          <YearList
            selectedYear={selectedYear}
            years={years}
            handleChangeYear={handleChangeYear}
          />
        </div>
      )}
    </div>
  );
};

export default YearPicker;
