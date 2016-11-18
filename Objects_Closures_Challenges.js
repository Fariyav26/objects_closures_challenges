//purpose: creating a function that creates an object that holds make, model year, and color of car
//signature: input a function, return specified info
//example: function car() -> VW Beetle, 2006, beige

var car = {
  make: "VW",
  model: "Beetle",
  year: 2006,
  color: "beige",
  getData: function() {
    return this.make + " " + this.model + " " + this.year + " " + this.color
    }
};

function createCar(newMake, newModel, newYear, newColor) {
  var speed = 0;
  return {
    make: newMake,
    model: newModel,
    year: newYear,
    color: newColor,
    getData: function() {
      return this.make + " " + this.model + " " + this.year + " " + this.color
    },
    getSpeed: function(){ return speed; },
    accelerate: function(){
      speed = speed+10;
      if (speed > 85) {
        speed = 85;
      }
    },
    brake: function() {
      speed = speed-7;
      if (speed < 0) {
        speed = 0;
      }
    }
    };
}
//purpose: a function to tell speed
//signature:input speed-->new speed
//example: input 10mph--->20mph

var car10 = createCar("VW", "Beetle", 2006, "pink");

// function carSpeed(car10) {
//
//   while (getSpeed < 50) {
//      speed = speed+10;
//   }
// };


var car10 = createCar("VW", "Beetle", 2006, "pink");

function carSpeed(carObject) {

  while (carObject.getSpeed() < 70) {
    carObject.accelerate();
    console.log(carObject.getSpeed());
  }
};

function carStop(carObject) {
  while (carObject.getSpeed() > 0) {
    carObject.brake();
    console.log(carObject.getSpeed());
  }
};
