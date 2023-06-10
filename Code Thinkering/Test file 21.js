const countWhich = function(list, cb) {
  if (!Array.isArray(list)) {
    return false;
  }

  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (cb(list[i])) {
      count++;
    }
  }

  return count;
};

//Test Cases
console.log(countWhich([1, 2, 3, 4, 5], function(num) {
  return (num > 4);
  // 1
}));
console.log(countWhich(["apple", "banana", "cherry"], function(fruit) {
  return fruit[0] === "a";
// 1
}));
console.log(countWhich([10, 20, 30, 40, 50], function(num) {
  return num % 7 === 0;
// 0
}));
console.log(countWhich(["apple", "banana", "cherry"], function(fruit) {
  return fruit.length > 5;
// 2
}));
console.log(countWhich([], function(x) {
  return x > 10;
  // 0
}));
console.log(countWhich("This should fail", function(word) {
  return true;
  // false
}));
