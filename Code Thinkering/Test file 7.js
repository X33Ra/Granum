const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"]; {

  const nameLengths = lighthouses.map((name) => name.length);

  console.log(nameLengths);
}

// or arrow function type

const lighthousees = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

const nameLengths = lighthousees.map(function(name) {
  return name.length;
});

console.log(nameLengths);
