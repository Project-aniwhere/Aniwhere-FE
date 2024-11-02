import CalendarSvg from '@/asset/svg/calendar/calendar-svg';
import useToggle from '@/hook/useToggle';
import YearList from './year-list';

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
    <div className='relative w-6 h-6'>
      <button className='text-2xl' onClick={handleToggleYearMenu}>
        <CalendarSvg fill='#9CA3AF' />
      </button>
      {isOpenYearMenu && (
        <YearList
          selectedYear={selectedYear}
          years={years}
          handleChangeYear={handleChangeYear}
        />
      )}
    </div>
  );
};

export default YearPicker;
