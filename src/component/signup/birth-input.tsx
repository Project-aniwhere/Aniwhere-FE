'use client';
import { useState } from 'react';
import DefaultDatepicker from '../common/datepicker/custom-datepicker';
import RadioInput from '../common/input/radio-input';

const BirthInput = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <div className='flex gap-4 items-center'>
      <DefaultDatepicker
        value={selectedDate}
        onChange={handleDateChange}
        placeholder='생년월일'
        className='w-48'
        type='birth'
      />
      <div className='flex gap-4 w-28'>
        <label className='flex gap-2'>
          <RadioInput name='gender' value='male' className='w-full p-3' />
          <span>남</span>
        </label>
        <label className='flex gap-2'>
          <RadioInput name='gender' value='female' className='w-full p-3' />
          <span>여</span>
        </label>
      </div>
    </div>
  );
};

export default BirthInput;
