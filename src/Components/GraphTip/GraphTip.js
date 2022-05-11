import React from 'react';

// just a little component explaining the X and Y axis for the user
const GraphTip = () => {
  return <h3 data-testid='axisInfo'>X-Axis: Milliseconds | Y-Axis: Power Output</h3>;
};

export default GraphTip;
