const stdev = function(arr) {
  const round = function(number) {
    return Math.round(number * 100) / 100;
  };

  const n = arr.length;

  // Calculate the mean
  const mean = arr.reduce((acc, num) => acc + num, 0) / n;

  // Calculate the sum of squared deviations
  const sumOfSquaredDeviations = arr.reduce((acc, num) => acc + Math.pow(num - mean, 2), 0);

  // Calculate the variance
  const variance = sumOfSquaredDeviations / n;

  // Calculate the standard deviation
  const stdev = Math.sqrt(variance);

  return round(stdev);
};

// Test case
const numbers = [6, 2, 3, 4, 9, 6, 1, 0, 5];
console.log(stdev(numbers));
