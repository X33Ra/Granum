const printItems = function(array) {
  while (array.length > 0) {
    const element = array.shift();

    if (Array.isArray(element)) {
      element.reverse().forEach((newElement) => {
        array.unshift(newElement);
      });
    } else {
      console.log(element);
    }
  }
};

// Test Case
const array = ["A", [["B", ["C"]], [[["D"]], "E"]]];
printItems(array);
