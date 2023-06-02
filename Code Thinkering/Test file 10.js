const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

// Test cases
const obj1 = {
  "blue": { stars: 2 },
  "green": { stars: 1 },
  "yellow": { stars: 3 },
  "red": { stars: 2 }
};

const result1 = findKey(obj1, value => value.stars === 1);
assertEqual(result1, "green");

const result2 = findKey(obj1, value => value.stars === 4);
assertEqual(result2, undefined);

const result3 = findKey(obj1, value => value.stars > 2);
assertEqual(result3, "yellow");
