import React from 'react';

import { calculatePower } from './Utils/calculatePower';
import BestPowerEffort from './Components/BestPowerEffort/BestPowerEffort';
import PowerOutputChart from './Components/PowerOutputChart/PowerOutputChart';
import './App.css';
import data from './workout-data.json';

function App() {
  // create array of objects out of workout-data.json, grabbing only relevant data for the graph
  const msAndPower = data.samples.map((sample) => {
    return {
      millisecondOffset: sample.millisecondOffset,
      power: sample.values.power,
    };
  });

  // create array of just the power output for calculating the best power output over time
  const power = msAndPower.map((object) => object.power);

  // get best twenty minute power output
  const twentyMinute = calculatePower(power, 1200);
  // get best one minute power output
  const oneMinute = calculatePower(power, 60);

  return (
    <div className='App'>
      <header className='App-header'>
        <BestPowerEffort twentyMinute={twentyMinute} oneMinute={oneMinute} />
        <PowerOutputChart msAndPower={msAndPower} />
      </header>
    </div>
  );
}

export default App;
  