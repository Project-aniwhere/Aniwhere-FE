'use client';
import { useState } from 'react';
import DefaultDatepicker from '../common/datepicker/custom-datepicker';
import RadioInput from '../common/input/radio-input';
import { SignupInputProps } from '@/type/common';

const BirthInput = ({ onValidation }: SignupInputProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [birthError, setBirthError] = useState<boolean>(true);
  const [selectedGender, setSelectedGender] = useState<string>('');
  const [genderError, setGenderError] = useState<boolean>(true);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handleBirthError = (hasError: boolean) => {
    setBirthError(hasError);
    onValidation(!hasError && !genderError);
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedGender(e.target.value);
    setGenderError(false);
    onValidation(!birthError && true);
  };

  return (
    <div>
      <div className='grid grid-cols-5 gap-4 items-center'>
        <div className='col-span-3'>
          <DefaultDatepicker
            value={selectedDate}
            onChange={handleDateChange}
            onError={handleBirthError}
            placeholder='생년월일'
            type='birth'
          />
        </div>
        {/* <div className='col-span-1'> */}
        <label className='col-span-1 flex'>
          <RadioInput
            name='gender'
            value='male'
            className='w-full'
            onChange={handleGenderChange}
            checked={selectedGender === 'male'}
          />
          <span>남</span>
        </label>
        <label className='col-span-1 flex'>
          <RadioInput
            name='gender'
            value='female'
            className='w-full'
            onChange={handleGenderChange}
            checked={selectedGender === 'female'}
          />
          <span>여</span>
        </label>
      </div>
      <div className='grid grid-cols-5 gap-4 items-center'>
        <span
          className={`col-span-3 w-fit inline-flex items-center mt-2 gap-1 px-2 py-1 text-xs rounded-full transition-colors ${
            birthError
              ? 'bg-red-400 text-gray-100 border border-gray-200'
              : 'bg-green-50 text-green-700 border border-green-200'
          }`}
        >
          생년월일 입력
        </span>
        <span
          className={`col-span-1 inline-flex items-center mt-2 gap-1 px-2 py-1 text-xs rounded-full transition-colors ${
            genderError
              ? 'bg-red-400 text-gray-100 border border-gray-200'
              : 'bg-green-50 text-green-700 border border-green-200'
          }`}
        >
          성별 선택
        </span>
      </div>
    </div>
  );
};

export default BirthInput;
