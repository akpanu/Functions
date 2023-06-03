'use strict'; // Default parameters

/*
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  const booking = {
    flightNum,
    numPassengers,
    price: 200 * numPassengers,
  };
  console.log(booking);
  bookings.push(booking);
};

// call createBooking with one parameter only
createBooking(`LH123`);
createBooking();
createBooking(`SOSO124`, 3, 300);
createBooking(`WRA234`, undefined, 300);
createBooking(undefined, 4, undefined);
console.log(`The bookings array: `, bookings);
*/
// How passing arguments work

/*
const flight = `LHS2234`;
const uwem = {
  name: `Uwem Akpan`,
  passport: 202505,
};
const checkIn = function (flightNum, passenger) {
  (flightNum = `UK2025`), (passenger.name = `Mr. ` + passenger.name);

  if (passenger.passport === 202505) {
    alert(`Checked in`);
  } else {
    alert(`Wrong passport`);
  }
};

checkIn(flight, uwem);
console.log(flight);
console.log(uwem);
*/
// Functions accepting Call back functions

/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(` `);
  return [first.toUpperCase(), ...others].join(` `);
};

// Higher order functions
const transformer = function (str, fxn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fxn(str)}`);
  console.log(`Transformed by: ${fxn.name}`);
};

// calling the Higher order function
transformer(`Javascript is the best!`, oneWord);
transformer(`Javascript is the best!`, upperFirstWord);

const high5 = function () {
  console.log(`👋`);
};
document.body.addEventListener(`click`, high5);
[`Akpan`, `Uwem`, `Michael`].forEach(high5);
*/
// Functions returning other functions

/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}`);
  };
};

const greeterHey = greet(`Hey`); // returned fxn
greeterHey(`Uwem`); // a variable fxn calling a str
greeterHey(`Akpan`);

// we can also do this:
greet(`Hello`)(`Uwem Michael`); // calling fxns at 1ce

// rewriting the greet fxn using arrow fxns - written by myself
// const greet2 = greeting2 => {
//   return name2 => {
//     console.log(`${greeting2} to you ${name2}`);
//   };
// };
const greet2 = greeting2 => name2 =>
  console.log(`${greeting2} to you ${name2}`);

greet2(`What's good,`)(`Uwemzy`);
greet2(`What's going on,`)(`Mfoniso`);
*/
// The call and apply methods

var lufthansa = {
  airline: "Lufthansa",
  iatacode: "LH",
  bookings: [],
  book: function book(flightNum, name) {
    console.log("".concat(name, " booked a seat on ").concat(this.airline, " with flight: ").concat(this.iatacode).concat(flightNum));
    this.bookings.push({
      flight: "".concat(this.iatacode).concat(flightNum),
      name: name
    });
  }
};
lufthansa.book(239, "Uwem Akpan");
lufthansa.book(635, "Mfoniso Ekere");
console.log(lufthansa); // object 1

var eurowings = {
  airline: "Eurowings",
  iatacode: "EW",
  bookings: []
};
var swiss = {
  airline: "Swiss Air Lines",
  iatacode: "LX",
  bookings: []
}; // the call method is used to invoke the method1 of another object
// on another object that does not contain the method1

var book = lufthansa.book; // does not work cos the this keyword is referencing no object
// hence for the below statement, the this keyword in the object method 'book'
// will be referencing null or undefined and thereby a runtime error
// book(34, `Akan`);
// to resolve this, the call method is used which takes
// the name of an existing object as the first parameter
// and the exact argument list of the parameter list in the object method
// Note: the argument list must contain the attributes being referenced
// in the object method

console.log("-----Demonstrating the call method-----"); // call method uses a comma separated args list for the object method
// Note: the call method uses a function to call an object with the args list

book.call(eurowings, 123, "Akpan Uwem");
book.call(swiss, 456, "Mfoniso");
console.log(lufthansa);
console.log(lufthansa.bookings);
console.log(eurowings.bookings);
console.log(swiss.bookings);
console.log("-----Demonstrating the apply method-----"); // the apply method
// the apply method is similar to the call method
// but accepts an array of object method arguments
// instead of a comma separated list of the object mthd args
// however, it is not used anymore in modern javascript

var flightData1 = [321, "Uwem Akpan"];
book.apply(eurowings, flightData1); // calling apply on eurowings

book.apply(swiss, [654, "Ekere Mfoniso"]); // calling apply on swiss

console.log(eurowings.bookings);
console.log(swiss.bookings);
console.log("-----Demonstrating the call method using the spread (...) operator-----");
var flightData2 = [535, "Akpan Uwem Mfoniso"];
book.call.apply(book, [eurowings].concat(flightData2));
console.log(eurowings); // The bind method
// the bind method binds the object method to the existing object
// and stores it in a variable with which the object method
// can be passed args normally
// Note: the bind method returns a function

console.log("---Demonstrating the use of the bind method---");
var bookEW = book.bind(eurowings);
var bookLX = book.bind(swiss); // passing args normally to the variable holding the bounded objects

bookEW(987, "W.F. Kumuyi");
bookLX(786, "Enoch Adeboye");
console.log(eurowings.bookings);
console.log(swiss.bookings); // calling the bind method with certain parameters set
// this is a technique known as 'Parial application'

console.log("Calling the bind method with some parameters set");
var bookEW777 = book.bind(eurowings, 777); // setting the flightNumber

var bookLX888 = book.bind(swiss, 888);
bookEW777("John Legend");
bookLX888("Jeneva Larry");
console.log(eurowings.bookings);
console.log(swiss.bookings); // With eventlisteners -- accessing the DOM

lufthansa.planes = 300; // adding a new property to the lufthansa object
// adding a new method/fxn to the lufthansa object

lufthansa.buyPlane = function () {
  console.log(this); // this.planes++;

  console.log("Number of planes: ".concat(this.planes));
  this.planes++;
}; // accessing the DOM


document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane.bind(lufthansa)); // binding the lufthansa.buyPlane method with the lufthansa object
// otherwise the this keyword would be referencing the DOM object
// and therefore yield unexpected results
// using Parial application

var addTax = function addTax(rate, value) {
  return value + value * rate;
};

console.log(addTax(0.075, 100)); // using the bind method to preset the rate

var addVAT = addTax.bind(null, 0.075);
console.log(addVAT(200));
console.log("Amount: 400, With VAT: ".concat(addVAT(400))); // using arrow functions to implement addVAT

var addVAT2 = function addVAT2(amt) {
  return function () {
    var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.075;
    return amt * r + amt + 1;
  };
};

console.log(addVAT2(400)());
console.log(addVAT2(100)()); // Immediately invoked Function Expressions IIFE

console.log("-----Demonstration IIFE-----");

(function () {
  console.log("This function is an Immediately Invoked Function Expression - IIFE\nIt wont run again");
})();

(function () {
  console.log("This is another IIFE. pls note the use of parenthesis");
})(); // IIFE using arrow functions


(function () {
  return console.log("IIFE using Arrow functions - would not run again");
})();