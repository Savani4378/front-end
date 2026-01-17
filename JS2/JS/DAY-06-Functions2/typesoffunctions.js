console.log("Types of Functions");

//! Types of Functions:
//? 1. Named Function
//? 2. Anonymous Function
//? 3. Function as an Expression
//? 4. IIFE
//? 5. Arrow Function
//? 6. Callback Function
//? 7. Higher-Order Function (HOF)
//? 8. Nested Function
//? 9. CLosure Function
//? 10. Generator Function
//? 11. Function Currying

//! 1. Named Function:
//* The function which is defined with identifer is called as Named Function.
//* In simple words, the function which has a name is called Named Function.

function faltuKaGhyan() {
  console.log("Work like a madness and achieve like a greatness!");
}
faltuKaGhyan();

//! 2. Anonymous Function:
//* The function which don't have any name is called as Anonymous Function.

//! 1st way:
//? Store the anonymous function inside a variable and call that variable with empty().

let mrHashmi = function () {
  console.log("Mr.X");
};
console.log(mrHashmi);
mrHashmi();

//! 3. Function as an experssion:
//* The function which is assgined to a variable as a expression is called as Function as an Expression.

//! 2nd Way to Call Anonoymous Function:
//? Wrap the entire anonymous function inside the empty () and call the empty() inside the outer () or just after the function block.

(function () {
  console.log("This is anonymous function");
})();

//! arguments object:
//* The arguments object is used to store all the values which is passed inside the FCS as a actual values.

function getNumbers() {
  console.log(arguments);

  let argumentsObject = arguments;
  console.log(Array.isArray(argumentsObject)); // false
  console.log(arguments[0]);

  console.log(typeof arguments); // object
}
getNumbers(10, 20, 30);

//! 4. IIFE:
//* The IIFE stands for Immediate Invoking Function Expression.
//* The IIFE function executes only once.

// (function () {
//   alert("Hello!");
// })();

//! 5. Arrow Function:
//* The arrow function is shorthand syntax to create function in JS.
//* Arrow function is introduced in ES6 concepts which was released in 2015.

//? Syntax: () => {}

let add = (num1, num2) => {
  console.log(num1 + num2);
  return num1 + num2;
};
console.log(add);
add(10, 20);
console.log(add(30, 50)); // 80, 80




