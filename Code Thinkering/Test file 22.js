"use strict";

/* Question 03

Implement the function as defined below.

Many programming languages have a range() functionality which will generate an array of numbers that increment from either 0 or 1 up to the number of digits requested. For example, range(10) might return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] or it might return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] depending on the implementation. Some even allow you to control the direction.

Unfortunately, JavaScript doesn't have a built-in range() function, so we want you to build one. Build out the function range() so that it takes three parameters:

1. The number of integers to generate
2. A boolean for whether to skip 0 or not (true: skip zero)
3. A boolean for whether the range should be in reverse/decreasing order or regular/increasing order (true: reverse/decreasing order)

If a non-number is passed in for the first argument, return an empty array.

Pro Tip: Remember to work incrementally. Start off just implementing the false and false scenario for the second and third parameters. In other words, focus on the zero-based, ascending range first. Work on edge cases at the very end (such as passing in a string instead of a number, as shown in the final example below.)

**Examples:**

- range(10, false, false) should return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
- range(10, true, false) should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
- range(10, true, true) should return [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
- range(10, false, true) should return [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
- range(3, true, false) should return [1, 2, 3]
- range(0, false, <anything>) should return [0]
- range(10) should do the same thing as range(10, false, false)
- range(10, true) should do the same thing as range(10, true, false)
- range("2", <anything>, <anything>) should return []
*/


const range = function(count, skipZero = false, reverseOrder = false) {
  // Check if count is not a number, return an empty array
  if (typeof count !== 'number') {
    return [];
  }
  // Initialize an empty array to store the range values
  const result = [];
  // Initialize the starting value of the range
  let start = 0;
  // Initialize the ending value of the range
  let end = count;


  // Adjust the start and end values based on the skipZero parameter
  if (skipZero) {
    // If skipZero is true, start from 1 instead of 0
    start = 1;
    // Increase the end value by 1 to include the count in the range
    end += 1;
  }

  // Generate the range in reverse order if reverseOrder is true
  if (reverseOrder) {
    // Loop from end-1 down to start and add each value to the result array
    for (let i = end - 1; i >= start; i--) {
      result.push(i);
    }
  } else {
    // Loop from start to end-1 and add each value to the result array
    for (let i = start; i < end; i++) {
      result.push(i);
    }
  }
  // Return the generated range array
  return result;
};

// Examples:
console.log(JSON.stringify(range(5, false, false)));
console.log(JSON.stringify(range(7, true, false)));
console.log(JSON.stringify(range(5, false, true)));
console.log(JSON.stringify(range(7, true, true)));
console.log(JSON.stringify(range(2)));
console.log(JSON.stringify(range(1)));
console.log(JSON.stringify(range(0, false, true)));
console.log(JSON.stringify(range("2")));

// const range = function(count, skipZero = false, descending = false) {
//   if (typeof count !== 'number' || count < 0) {
//     return [];
//   }

//   const result = [];
//   let start = skipZero ? 1 : 0;
//   let end = count;

//   if (descending) {
//     for (let i = end; i >= start; i--) {
//       result.push(i);
//     }
//   } else {
//     for (let i = start; i < end; i++) {
//       result.push(i);
//     }
//   }

//   return result;
// };