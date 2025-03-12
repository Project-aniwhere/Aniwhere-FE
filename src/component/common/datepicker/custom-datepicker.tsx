'use client';

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import { CommonDatepickerProps } from '@/type/common';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const DefaultDatepicker = ({
  value,
  placeholder = '',
  className = '',
  type = '',
  onError,
}: CommonDatepickerProps) => {
  const [nowDate, setNowDate] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

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
        const hasError = moment(selectedDate) >= today;
        if (hasError) {
          setNowDate('');
        }
        onError?.(hasError);
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
        className={`w-full text-left p-3 border border-gray-300 rounded-lg bg-gray-50 ${className}`}
        readOnly
      />

      {isOpen && (
        <div className='absolute left-0'>
          <Calendar onChange={handleDateChange} value={value} locale='ko-KR' />
        </div>
      )}
    </div>
  );
};

export default DefaultDatepicker;
