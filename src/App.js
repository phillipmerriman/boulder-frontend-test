import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./App.css";
import data from "./workout-data.json";

function App() {
  // const [twentyMinute, setTwentyMinute] = useState(0);
  // const [oneMinute, setOneMinute] = useState(0);

  const msAndPower = data.samples.map((item) => {
    return {
      millisecondOffset: item.millisecondOffset,
      power: item.values.power,
    };
  });

  const power = msAndPower.map((object) => object.power);

  // const translateMinutesToMs = (minutes) => {
  //   return minutes * 60000;
  // };

  // const calculatePower = (minutes) => {
  //   const offset = translateMinutesToMs(minutes);
  //   console.log("translated", offset);
  // };

  const calculatePower = (power, seconds) => {
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < seconds; i++) {
      maxSum += power[i];
    };
    tempSum = maxSum;
    for (let i = seconds; i < power.length; i++) {
      if (typeof power[i] !== 'number') i++;
      tempSum = tempSum - power[i - seconds] + power[i];
      if (tempSum > maxSum) {
        maxSum = tempSum;
      }
    };
    return maxSum / seconds;
  };


  const twentyMinute = calculatePower(power, 1200);
  const oneMinute = calculatePower(power, 60);

  // useEffect(() => {
  //   console.log("msAndPower", msAndPower);
  //   console.log("power", power);
  //   console.log('calculatePower', calculatePower(power, 1200));
  //   calculatePower(20);
  // });

  return (
    <div className="App">
      <header className="App-header">
        <div className="average">
          Best 20 Minute Power Effort: {twentyMinute}
        </div>
        <div className="average">
          Best 1 Minute Power Effort: {oneMinute}
        </div>
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart
            width={500}
            height={300}
            data={msAndPower}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid />
            <XAxis dataKey="millisecondOffset" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="power"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </header>
    </div>
  );
}

export default App;
