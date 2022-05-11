import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

import GraphTip from '../GraphTip/GraphTip';

// component to render graph with data
const PowerOutputChart = (props) => {
  const { msAndPower } = props;

  return (
    <div data-testid='powerOutputChart' >
      <LineChart
        width={1700}
        height={700}
        data={msAndPower}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid />
        <XAxis dataKey='millisecondOffset' />
        <YAxis />
        <Tooltip />
        <Line
          type='monotone'
          dataKey='power'
          stroke='#8884d8'
          activeDot={{ r: 8 }}
        />
      </LineChart>
      <GraphTip />
    </div>
  );
};

export default PowerOutputChart;
