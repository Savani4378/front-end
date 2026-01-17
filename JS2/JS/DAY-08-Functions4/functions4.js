console.log("Functions Continued....");

//! Example of Callback Function:
//? 1st way to create a callback function:
//~ We will create the seprate another function and pass it as reference to the main function.

function sir(studentName, callback) {
  console.log("✍️Sir, is checking papers!");

  setTimeout(() => {
    console.log("Papers Checked");
    console.log(`Result for ${studentName}:`);
    callback();
  }, 3000);
}

//~ Callback function
function result() {
  console.log("PASS✅");
}

// sir("John", result);

//? 2nd way: Directly mention the callback function inside the main function.

//! Here orderFood -> HOF
function orderFood(callback) {
  console.log("food is ordered!");
  callback();
}

orderFood(() => {
  console.log("Madan is your delivery boy!");
});

orderFood(function () {
  console.log("Suresh is your delivery boy!");
});

//! 7. HOF:
//* A HOF stands for Higher-order function.
//* A function which will accept another function as a argument or it will return another function is called as Higher-order Function.

//! Example of HOF:

function calculate(num1, num2, operation) {
  return operation(num1, num2);
}

//! callback function
function add(num1, num2) {
  return num1 + num2;
}
function sub(num1, num2) {
  return num2 - num1;
}

console.log(calculate(10, 20, add));
console.log(calculate(10, 20, sub));

//! 8. Nested Functions:
//* The function is present inside another function is known as nested function.

function outer() {
  let outerVar = 10;
  console.log("This is outer fun!");

  function inner() {
    console.log("This is inner fun!");
    console.log(outerVar);
  }

  inner();
}

outer();

//! 9. Closure Function:
//* If you are trying to access the outer function variables or data inside the inner function that time it will create the closure by the outer function.
//? Here, closure means remembering the value of outer function inside the inner function.

//! 10. Generator Function:
//* The generator function is a special type of function which will pause and resume its execution.
//? yield -> pause the execution and store the value
//? .next() -> resume the execution and again pause it.

//? Syntax: function* identifier() {}

function* netflixSeries() {
  yield "Episode-1";
  yield "Episode-2";
  yield "Episode-3";
}

let episode = netflixSeries();
console.log(episode.next());
console.log(episode.next());
console.log(episode.next());
console.log(episode.next());


