export const calculatePower = (power, seconds) => {
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < seconds; i++) {
    maxSum += power[i];
  }
  tempSum = maxSum;
  for (let i = seconds; i < power.length; i++) {
    if (typeof power[i] !== "number") {
      continue;
    }
    tempSum = tempSum - power[i - seconds] + power[i];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum / seconds;
};
