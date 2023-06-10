"use strict";

const keyMatcher = function(firstObj, secondObj, key) {
  const hasKeyInFirstObj = Object.prototype.hasOwnProperty.call(firstObj, key);
  const hasKeyInSecondObj = Object.prototype.hasOwnProperty.call(secondObj, key);

  if (!hasKeyInFirstObj || !hasKeyInSecondObj) {
    return false;
  }

  const firstValue = firstObj[key];
  const secondValue = secondObj[key];

  return firstValue === secondValue;
};

// Test cases
console.log(keyMatcher({a: 1, b: 2, c: 3}, {here: 3, is: 2, a: 1, silly: 0, example: -1}, 'a')); // true
console.log(keyMatcher({apple: "red", banana: "yellow", cherry: "red"}, {apple: "green", banana: "brown", cherry: "black"}, "apple")); // false
console.log(keyMatcher({a: 1, b: 2, c: 3}, {a: "1", b: "2", c: "3"}, 'c')); // false
console.log(keyMatcher({a: 1, b: 2, c: 3}, {d: 4, e: 5, f: 6}, 'b')); // false
