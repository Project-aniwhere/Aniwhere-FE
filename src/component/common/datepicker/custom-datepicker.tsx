'use client';

import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import { CommonDatepickerProps } from '@/type/common';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const DefaultDatepicker = ({
  onChange,
  value,
  placeholder = '',
  className = '',
}: CommonDatepickerProps) => {
  const [nowDate, setNowDate] = useState<string>(`${placeholder}`); // 초기값 설정
  const [isOpen, setIsOpen] = useState(false);
  const [placeholderColor, setPlaceholderColor] = useState('text-gray-400');

  const handleToggleCalendar = () => {
    setIsOpen(!isOpen);
  };

  const handleDateChange = (selectedDate: Value) => {
    if (selectedDate instanceof Date) {
      setPlaceholderColor('text-black');
      onChange(selectedDate);
      setIsOpen(false);
      setNowDate(moment(selectedDate).format('YYYY년 MM월 DD일'));
    }
  };

  return (
    <div className='relative'>
      <button
        type='button'
        onClick={handleToggleCalendar}
        className={`text-left w-72 p-3 border border-gray-300 rounded-lg bg-gray-50 ${className} ${placeholderColor}`}
      >
        {nowDate}
      </button>

      {isOpen && (
        <div className='absolute left-0'>
          <Calendar onChange={handleDateChange} value={value} locale='ko-KR' />
        </div>
      )}
    </div>
  );
};

export default DefaultDatepicker;
