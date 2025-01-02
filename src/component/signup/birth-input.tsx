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
    <div className='grid grid-cols-5 gap-4 items-center'>
      <div className='col-span-3'>
        <DefaultDatepicker
          value={selectedDate}
          onChange={handleDateChange}
          placeholder='생년월일'
          type='birth'
        />
      </div>
      {/* <div className='col-span-1'> */}
      <label className='col-span-1 flex'>
        <RadioInput name='gender' value='male' className='w-full' />
        <span>남</span>
      </label>
      <label className='col-span-1 flex'>
        <RadioInput name='gender' value='female' className='w-full' />
        <span>여</span>
      </label>
      {/* </div> */}
    </div>
  );
};

export default BirthInput;
