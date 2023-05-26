const eqArrays = function(actual, expected) {
  // Compare the lengths of the arrays
  if (actual.length !== expected.length) {
    return false;
  }

  // Compare each element of the arrays
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(actual, expected) {
  // Use eqArrays to compare the arrays
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const letterPositions = function(sentence) {
  const results = {};

  // Iterate through the characters in the sentence
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if (char !== ' ') {
      // Update the results object with the positions of each character
      if (!results[char]) {
        results[char] = [i];
      } else {
        results[char].push(i);
      }
    }
  }

  return results;
};

const banana = letterPositions('hello');
console.log(banana);

const testPositions = {
  'h': [0],
  'e': [1],
  'l': [2, 3],
  'o': [4]
};

// Compare the positions of each character using assertArraysEqual
for (const char in testPositions) {
  assertArraysEqual(banana[char], testPositions[char]);
}
