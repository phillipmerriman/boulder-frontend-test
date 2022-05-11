/* 
Time Complexity - O(N)
We only loop over the entire array one time
*/
export const calculatePower = (power, seconds) => {
  let maxSum = 0;
  let tempSum = 0;
  // add the first set (seconds) of items together, and store that in a variable (maxSum)
  for (let i = 0; i < seconds; i++) {
    maxSum += power[i];
  }
  tempSum = maxSum;
  // start the loop where we left off above (let i = seconds)
  for (let i = seconds; i < power.length; i++) {
    // edge case - if item is not typeof 'number' we dont want it
    if (typeof power[i] !== 'number') {
      continue;
    }
    // take tempSum, subtract oldest item and add newest item of the window
    tempSum = tempSum - power[i - seconds] + power[i];
    // if the new sum is bigger than the current maxSum, reassign current maxSum
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  // divide maxSum by length of window to get average
  return maxSum / seconds;
};
