console.log("Scopes in JS");

//! What is Scope in JS?
//* The scope is a accessbility or visibility of the variable.

//? Types of Scope:
//~ 1. Global Scope
//~ 2. Block Scope
//~ 3. Local or Function Scope
//~ 4. Script Scope
//~ 5. Module Scope

//! 1. Global Scope:
//* We can access the variable anywhere in the program.

// debugger;
//~ The 'debugger' is a keyword in JS.
//~ The debugger automatically enables the debugging for JS code.

var num = 10;
console.log("num:", num);

//! 2. Block Scope:
//* The variable which is declared with let and const has always block scope.
//* That means we can access only inside the block itself.

// Block
{
  var num3 = 50;
  let num1 = 20;
  const num2 = 30;
  console.log("num1:", num1);
  console.log("num2:", num2);
  console.log("num3:", num3);
}

// console.log(num1);
// console.log(num2);
// console.log(num3);

//! 3. Local or Function Scope:
//* The variables which is declared with var, let and const are always local to the function.

function localFunc() {
  var a = 10;
  let b = 20;
  const c = 30;
  console.log("a:", a);
  console.log("b:", b);
  console.log("c:", c);
}
localFunc();

// console.log(a);

//! 4. Script Scope:
let x = 100;
const y = 200;
console.log("x", x);
console.log("y", y);
