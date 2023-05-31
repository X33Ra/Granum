const findWaldo = function(names, found) {
  names.forEach((name, index) => {
    if (name === "Waldo") {
      found(index); // Pass the index to the callback
    }
  });
};

const actionWhenFound = function(index) {
  console.log(`Found Waldo at index ${index}!`);
};

// Test case
const names = ["Alice", "Bob", "Waldo", "Eve"];
findWaldo(names, actionWhenFound);
