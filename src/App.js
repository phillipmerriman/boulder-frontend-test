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
      if (typeof power[i] !== 'number') {
        continue;
      };
      tempSum = tempSum - power[i - seconds] + power[i];
      if (tempSum > maxSum) {
        maxSum = tempSum;
      }
    };
    return maxSum / seconds;
  };

  const twentyMinute = calculatePower(power, 1200);
  const oneMinute = calculatePower(power, 60);

  return (
    <div className="App">
      <header className="App-header">
        <h2 >
          Best 20 Minute Power Effort: {twentyMinute}
        </h2>
        <h2 >
          Best 1 Minute Power Effort: {oneMinute}
        </h2>
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
        <h3>
            X-Axis: Milliseconds | Y-Axis: Power Output
        </h3>
      </header>
    </div>
  );
}

export default App;
