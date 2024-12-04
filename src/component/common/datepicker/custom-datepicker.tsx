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
  const [nowDate, setNowDate] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const [birthError, setBirthError] = useState(false);

  const handleToggleCalendar = () => {
    setIsOpen(!isOpen);
  };

  const handleDateChange = (selectedDate: Value) => {
    if (!(selectedDate instanceof Date)) return;

    setIsOpen(false);
    setNowDate(moment(selectedDate).format('YYYY년 MM월 DD일'));

    switch (type) {
      case 'birth': {
        const today = moment();
        if (moment(selectedDate) < today) {
          setBirthError(false);
        } else {
          setNowDate('');
          setBirthError(true);
        }
        break;
      }
    }
  };

  return (
    <div className='relative'>
      <input
        name='date'
        value={nowDate}
        placeholder={placeholder}
        onClick={handleToggleCalendar}
        className={`text-left p-3 border border-gray-300 rounded-lg bg-gray-50 ${className}`}
        readOnly
      />

      {isOpen && (
        <div className='absolute left-0'>
          <Calendar onChange={handleDateChange} value={value} locale='ko-KR' />
        </div>
      )}
      {birthError && (
        <div className='text-sm text-red-700 ml-2'>
          오늘보다 이전 날짜를 입력해주십시오
        </div>
      )}
    </div>
  );
};

export default DefaultDatepicker;
