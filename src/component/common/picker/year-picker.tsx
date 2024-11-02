import CalendarSvg from '@/asset/svg/calendar/calendar-svg';
import useToggle from '@/hook/useToggle';

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
        <ul className='absolute bg-white py-2 mt-1 w-20 border border-gray-100 rounded z-10'>
          {years.map((year) => (
            <li key={year}>
              <button
                onClick={() => handleChangeYear(year)}
                className={`w-full px-2 py-1.5 text-start hover:text-aniviolet2 hover:font-medium hover:bg-aniviolet0 ${year === selectedYear ? 'text-aniviolet2 font-medium' : ''}`}
              >
                {year}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default YearPicker;
