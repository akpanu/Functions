'use strict';
/*
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
*/
// More Closure examples:
// Example 1

/*************************
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(`New value of a`, a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(`New value of b`, b * 2);
  };
};

g();
f();
console.dir(f);
// reassigning f function
h();
f();
console.dir(f);
***************************/
// Example 2

var boardPassengers = function boardPassengers(n, wait) {
  var perGroup = n / 3;
  setTimeout(function () {
    console.log("We are now boarding all ".concat(n, " passengers"));
    console.log("There are 3 groups, each with ".concat(perGroup, " passengers"));
  }, wait * 1000);
  console.log("will start boarding in ".concat(wait, " seconds"));
};

boardPassengers(180, 3);