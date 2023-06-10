const minmax = function(list) {
  if (list.length === 0) {
    return [undefined, undefined];
  }

  let min = list[0];
  let max = list[0];

  for (let i = 1; i < list.length; i++) {
    if (list[i] < min) {
      min = list[i];
    }
    if (list[i] > max) {
      max = list[i];
    }
  }

  return [min, max];
};

// Examples:
console.log(minmax([1, 2, 3, 4, 5])); // [1, 5]
console.log(minmax([90, 89, 123, 3])); // [3, 123]
console.log(minmax(["apple", "banana", "canada"])); // ["apple", "canada"]
console.log(minmax([])); // [undefined, undefined]
