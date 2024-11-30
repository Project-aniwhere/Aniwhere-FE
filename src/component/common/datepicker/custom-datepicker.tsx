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
  type = '',
}: CommonDatepickerProps) => {
  const [nowDate, setNowDate] = useState<string>(placeholder); // 초기값 설정
  const [isOpen, setIsOpen] = useState(false);
  const [placeholderColor, setPlaceholderColor] = useState('text-gray-400');
  const [dateError, setDateError] = useState(false);

  const handleToggleCalendar = () => {
    setIsOpen(!isOpen);
  };

  const handleDateChange = (selectedDate: Value) => {
    if (selectedDate instanceof Date) {
      if (type === 'birth') {
        setPlaceholderColor('text-black');
        setIsOpen(false);
        const today = moment();
        if (moment(selectedDate) < today) {
          setNowDate(moment(selectedDate).format('YYYY년 MM월 DD일'));
          setDateError(false);
        } else {
          setPlaceholderColor('text-gray-400');
          setNowDate(placeholder);
          setDateError(true);
        }
      } else {
        setNowDate(moment(selectedDate).format('YYYY년 MM월 DD일'));
      }
    }
  };

  return (
    <div className='relative'>
      <input type='hidden' name='date' value={nowDate} />
      <button
        type='button'
        onClick={handleToggleCalendar}
        className={`text-left p-3 border border-gray-300 rounded-lg bg-gray-50 ${className} ${placeholderColor}`}
      >
        {nowDate}
      </button>

      {isOpen && (
        <div className='absolute left-0'>
          <Calendar onChange={handleDateChange} value={value} locale='ko-KR' />
        </div>
      )}
      {dateError && (
        <div className='text-sm text-red-700 ml-2'>
          오늘보다 이전 날짜를 입력해주십시오
        </div>
      )}
    </div>
  );
};

export default DefaultDatepicker;
