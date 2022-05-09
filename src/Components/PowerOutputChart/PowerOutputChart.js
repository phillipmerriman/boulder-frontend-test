import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import GraphTip from "../GraphTip/GraphTip";

const PowerOutputChart = (props) => {
  const { msAndPower } = props;

  return (
    <>
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
          <Line
            type="monotone"
            dataKey="power"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <GraphTip />
    </>
  );
};

export default PowerOutputChart;
