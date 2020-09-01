import React, { useState } from 'react';
import './Watch.css';
import { format } from 'date-fns';

const timeFormat12 = `hh:mm:ss a`;
const timeFormat24 = `H:mm:ss`;

const Watch: React.FC<{ date: Date }> = ({ date }) => {
  const [timeFormat, setTimeFormat] = useState(timeFormat24);
  const formatedDate = format(date, `d 'de' MMMM 'del' yyyy`);
  const formatedTime = format(date, timeFormat);
  return (
    <div className='watch'>
      <div className='watch__date'>{formatedDate}</div>
      <div className='watch__time'>{formatedTime}</div>
      <div className='watch__formats'>
        <button
          className={`watch__formats__item ${
            timeFormat === timeFormat24 ? 'watch__formats__item--selected' : ''
          }`}
          onClick={() => setTimeFormat(timeFormat24)}>
          24 Horas
        </button>
        <button
          className={`watch__formats__item ${
            timeFormat === timeFormat12 ? 'watch__formats__item--selected' : ''
          }`}
          onClick={() => setTimeFormat(timeFormat12)}>
          12 Horas
        </button>
      </div>
    </div>
  );
};

export default Watch;
