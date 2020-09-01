import React from 'react';
import Watch from './Watch';
import useTime from '../useTime';

const WatchContainer: React.FC = () => {
  const date = useTime();
  return <Watch date={date} />;
};

export default WatchContainer;
