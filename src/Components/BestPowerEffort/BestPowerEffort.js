import React from 'react';

const BestPowerEffort = (props) => {
  const { twentyMinute, oneMinute } = props;

  return (
    <>
      <h2 data-testid='bestOneMinute'>Best 1 Minute Power Effort: {oneMinute}</h2>
      <h2 data-testid='bestTwentyMinute'>Best 20 Minute Power Effort: {twentyMinute}</h2>
    </>
  );
};

export default BestPowerEffort;
