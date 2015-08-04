function enoughGas(car,route){
  var milesLeft = car.milesPerGallon*car.gallonsInTank;
  return milesLeft>route.miles;
}

var car = {
  milesPerGallon: 20,
  gallonsInTank: 3
};

var route = {
  miles: 200,
  destination: "Boulder",
  location: "Fancy Land"
};

console.log('miles.js');
console.log(enoughGas(car,route));