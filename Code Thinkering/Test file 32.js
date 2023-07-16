const keysMatch = function(obj1, obj2, keys) {
  for (let element of keys) {
    if (obj1[element] !== obj2[element]) {
      console.log("false");
    } else {
      console.log("true");
    }

  }
  
};

keysMatch({banana:"1"},{apple:"2"}, "apple");