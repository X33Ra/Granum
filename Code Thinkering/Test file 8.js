// [    const map = function(array, callback) {   ]
// [      const results = [];                     ]
// [      for (let item of array) {               ]
// [        results.push(callback(item));         ]
// [      }                                       ]
// [      return results;                         ]
// [    };                                        ]
   
// [    const words = ["ground", "control", "to", "major", "tom"];        ]
// [    const results1 = map(words, word => word[0]);                     ]
// [    console.log(results1);                                            ]


// or arrow function with a for loop

//  [  const map2 = (array, callback) => {                              ]
//  [    const result = [];                                             ]
//  [    for (let i = 0; i < array.length; i++) {                       ]
//  [      result.push(callback(array[i]));                             ]
//  [    }                                                              ]
//  [    return result;                                                 ]
//  [  };                                                               ]

//  [  const words2 = ["ground", "control", "to", "major", "tom"];      ]
//  [  const results3 = map2(words2, word => word[0]);                  ]
//  [  console.log(results3);                                           ]

  
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
    results.push(callback(item));
  }
  return results;
};

const assertEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }

  return true;
};

const words = ["ground", "control", "to", "major", "tom"];
const expectedOutput = ["g", "c", "t", "m", "t"];

const results1 = map(words, word => word[0]);
console.log(results1);

assertEqual(results1, expectedOutput);






// const map = function(array, callback) {
//   const results = [];
//   for (let item of array) {
//     console.log('item BEFORE: ', item);
//     console.log('item AFTER: ', callback(item));
//     console.log('---');
//   }
//   return results;
// }

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };