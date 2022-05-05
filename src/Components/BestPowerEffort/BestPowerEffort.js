import React from 'react';

const BestPowerEffort = (props) => {
  const { twentyMinute, oneMinute } = props;

  return (
    <>
      <h2>Best 20 Minute Power Effort: {twentyMinute}</h2>
      <h2>Best 1 Minute Power Effort: {oneMinute}</h2>
    </>
  );
};

export default BestPowerEffort;
