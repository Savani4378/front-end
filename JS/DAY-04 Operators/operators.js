console.log("Operators in JS");

//! What is Operators?

//! Types of Operators :
//? 1. Arithmetic Operators (+, -, *, /, %, **) [Binary]
//~ * considers multiplication but ** considers power (Ex.5^2)
//? 2. Comparision Operators (>, <, >=, <=, !==, ==, ===) [Binary]
//? 3. Logical Operators (&&, ||, !) [Binary]
//? 4. String Concatenation Operators (+) [Binary]
//? 5. Ternary Operators  [Ternary]
//? 6. Nullish Coalescing Operator (??) [Unary]

//! What is the difference between == and === ?
let num1 = 10;
let num2 = "10";

//* Here, == will only checks the value not the datatypes.
console.log(num1 == num2); //true

//* Here, === will check both value as well as datatypes.
console.log(num1 == num2); //false

//! 4. String Concatination Operator : (+)

let firstName = "Jay";
let middleName = "Kishorbhai";
let lastName = "Savani";

let fullName = firstName + " " + middleName + " " + lastName;
console.log(fullName);

//! Assignment Operator : (=)

let value = 10;
value += 20;
console.log(value);

//! 5. Ternary Operator : 
// if(condition) {
     // code to be executed
// } else {
     // code
// }

let statusCode = 200;

let result = statusCode === 200 ? "ok" : "Not ok";
console.log(result);

//! 6. Nullish Coalescing Opearator :

