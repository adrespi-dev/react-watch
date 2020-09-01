import { useState, useEffect } from 'react';

export default () => {
  const [currentTime, setcurrentTime] = useState<Date>(new Date());
  useEffect(() => {
    const interval = setInterval(() => setcurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);
  return currentTime;
};
