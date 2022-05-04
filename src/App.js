import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import './App.css';
import data from './workout-data.json';

function App() {

  const [twentyMinute, setTwentyMinute] = useState(0)
  const [oneMinute, setOneMinute] = useState(0)
  // const mockData = [
  //   {
  //     name: 'Page A',
  //     uv: 4000,
  //     power: 2400,
  //     amt: 2400,
  //   },
  //   {
  //     name: 'Page B',
  //     uv: 3000,
  //     power: 1398,
  //     amt: 2210,
  //   },
  //   {
  //     name: 'Page C',
  //     uv: 2000,
  //     power: 9800,
  //     amt: 2290,
  //   },
  //   {
  //     name: 'Page D',
  //     uv: 2780,
  //     power: 3908,
  //     amt: 2000,
  //   },
  //   {
  //     name: 'Page E',
  //     uv: 1890,
  //     power: 4800,
  //     amt: 2181,
  //   },
  //   {
  //     name: 'Page F',
  //     uv: 2390,
  //     power: 3800,
  //     amt: 2500,
  //   },
  //   {
  //     name: 'Page G',
  //     uv: 3490,
  //     power: 4300,
  //     amt: 2100,
  //   },
  // ];

  const realData = data.samples.map(item => {
    return {
      millisecondOffset: item.millisecondOffset,
      power: item.values.power
    }
  });
  
  // write algorithm using realData, not workout-data.json

  const translateMinutesToMs = (minutes) => {
    return minutes * 60000;
  };

  const calculatePower = (minutes) => {
    const offset = translateMinutesToMs(minutes);
    console.log('translated', offset);
  };

  useEffect(() => {
    calculatePower(20);
  });

  return (
    <div className="App">
      <header className="App-header">
        <div className="average" >
          Best 20 Minute Power Effort: {twentyMinute}
        </div>
        <div className="average" >
          Best 1 Minute Power Effort: {oneMinute}
        </div>
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart
            width={500}
            height={300}
            data={realData}
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
            <Line type="monotone" dataKey="power" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </header>
    </div>
  );
}

export default App;
