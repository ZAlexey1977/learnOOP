let log = console.log;

////////////////////////////////////////// unit 1 /////////////////////////////////////

// let dog = {
//   name: 'Bady',
//   numLegs: 4
// };

////////////////////////////////////////// unit 2 /////////////////////////////////////

// let dog = {
//   name: "Spot",
//   numLegs: 4
// };
// // Змініть код лише під цим рядком
// console.log(dog.name);
// console.log(dog.numLegs);

////////////////////////////////////////// unit 3 /////////////////////////////////////

// let dog = {
//   name: "Spot",
//   numLegs: 4,
//   sayLegs: function () {
//     return "This dog has " + dog.numLegs + " legs.";
//   }
// };

// dog.sayLegs();

// ////////////////////////////////////////// unit 4 /////////////////////////////////////

// let dog = {
//   name: "Spot",
//   numLegs: 4,
//   sayLegs: function () { return "This dog has " + this.numLegs + " legs."; }
// };

// dog.sayLegs();

////////////////////////////////////////// unit 5 /////////////////////////////////////

// function Dog() {
//   this.name = "Spot",
//     this.color = "black",
//     this.numLegs = 4
// }

////////////////////////////////////////// unit 6 /////////////////////////////////////

// function Dog() {
//   this.name = "Rupert";
//   this.color = "brown";
//   this.numLegs = 4;
// }
// // Змініть код лише під цим рядком

// let hound = new Dog();

////////////////////////////////////////// unit 7 /////////////////////////////////////

// function Dog(name, color) {
//   this.name = name,
//   this.color = color,
//   this.numLegs = 4
//   }

//   let terrier = new Dog("Spot", "red");

////////////////////////////////////////// unit 8 /////////////////////////////////////

// function House(numBedrooms) {
//   this.numBedrooms = numBedrooms;
// }

// // Змініть код лише під цим рядком

// let myHouse = new House(3);
// myHouse instanceof House;

////////////////////////////////////////// unit 9 /////////////////////////////////////

// function Bird(name) {
//   this.name = name;
//   this.numLegs = 2;
// }

// let canary = new Bird("Tweety");
// let ownProps = [];

// // Змініть код лише під цим рядком

// for (let property in canary) {
//   if (canary.hasOwnProperty(property)) {
//     ownProps.push(property);
//   }
// }

////////////////////////////////////////// unit 10 /////////////////////////////////////

// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype.numLegs = 4;

// // Змініть код лише над цим рядком
// let beagle = new Dog("Snoopy");
// log(beagle.numLegs)

////////////////////////////////////////// unit 11 /////////////////////////////////////

// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype.numLegs = 4;

// let beagle = new Dog("Snoopy");

// let ownProps = [];
// let prototypeProps = [];

// // Змініть код лише під цим рядком

// for (let property in beagle) {
//   if (Dog.hasOwnProperty(property)) {
//     ownProps.push(property)
//   }
//   else {
//     prototypeProps.push(property)
//   }
// }

////////////////////////////////////////// unit 12 /////////////////////////////////////

// function Dog(name) {
//   this.name = name;
// }

// // Змініть код лише під цим рядком
// function joinDogFraternity(candidate) {
//   if (candidate.constructor === Dog) {
//     return true
//   }
//   else {
//     return false
//   }
// }

////////////////////////////////////////// unit 13 /////////////////////////////////////

// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype = {
//   // Змініть код лише під цим рядком
//   numLegs: 4,
//   eat: function () {
//     console.log("nom nom nom");
//   },
//   describe: function () {
//     console.log("My name is " + this.name);
//   }
// };

////////////////////////////////////////// unit 14 /////////////////////////////////////

// function Dog(name) {
//   this.name = name;
// }

// // Змініть код лише під цим рядком
// Dog.prototype = {
//   constructor: Dog,
//   numLegs: 4,
//   eat: function () {
//     console.log("nom nom nom");
//   },
//   describe: function () {
//     console.log("My name is " + this.name);
//   }
// };

////////////////////////////////////////// unit 15 /////////////////////////////////////

// function Dog(name) {
//   this.name = name;
// }

// let beagle = new Dog("Snoopy");

// // Змініть код лише під цим рядком

// Dog.prototype.isPrototypeOf(beagle);

////////////////////////////////////////// unit 16 /////////////////////////////////////

// function Dog(name) {
//   this.name = name;
// }

// let beagle = new Dog("Snoopy");

// Dog.prototype.isPrototypeOf(beagle);  // показує правильно

// // Виправте код нижче так, щоб він мав логічне значення
// Object.prototype.isPrototypeOf(Dog.prototype);

////////////////////////////////////////// unit 17 /////////////////////////////////////

////////////////////////////////////////// unit 18 /////////////////////////////////////

////////////////////////////////////////// unit 19 /////////////////////////////////////

////////////////////////////////////////// unit 20 /////////////////////////////////////