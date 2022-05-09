import React from 'react';

import { calculatePower } from './Utils/calculatePower';
import BestPowerEffort from "./Components/BestPowerEffort/BestPowerEffort";
import PowerOutputChart from './Components/PowerOutputChart/PowerOutputChart';
import "./App.css";
import data from "./workout-data.json";

function App() {
  const msAndPower = data.samples.map((item) => {
    return {
      millisecondOffset: item.millisecondOffset,
      power: item.values.power,
    };
  });

  const power = msAndPower.map((object) => object.power);

  const twentyMinute = calculatePower(power, 1200);
  const oneMinute = calculatePower(power, 60);

  return (
    <div className="App">
      <header className="App-header">
        <BestPowerEffort twentyMinute={twentyMinute} oneMinute={oneMinute} />
        <PowerOutputChart msAndPower={msAndPower} />
      </header>
    </div>
  );
}

export default App;
  