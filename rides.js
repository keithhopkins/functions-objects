var child = {
  height: 3,
  name: "Julian",
  age: 3
};

var child2 = {
  height: 4,
  name: "Cero",
  age: 4
};
var child3 = {
  height: 8,
  name: "Ted",
  age: 16
};
var ride = {
  minHeight: 3,
  maxHeight: 7
};

var ride2 = {
  minHeight: 4,
  maxHeight: 7
};


function checkHeight (ride, child) {
  return child.height >= ride.minHeight && child.height<=ride.maxHeight; 
}

console.log('rides.js');
console.log('should be true');
console.log(checkHeight(ride,child));
console.log(checkHeight(ride,child2));
console.log(checkHeight(ride2,child2));
console.log('should be false');
console.log(checkHeight(ride2,child));
console.log(checkHeight(ride,child3));
console.log(checkHeight(ride2,child3));