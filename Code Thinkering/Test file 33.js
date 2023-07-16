const objectFilter = (originalObject, arrOfKeys) => {
  return Object.fromEntries(
    Object.entries(originalObject).filter(([key]) => arrOfKeys.includes(key))
  );
};

// Test code:
console.log(objectFilter({a: 1, b: 2, c: 3}, ['a', 'b'])); // returns {a: 1, b: 2}
console.log(objectFilter({a: 1, silly: 2, example: 3}, ['example'])); // returns {example: 3}
