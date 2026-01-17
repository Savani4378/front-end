console.log("Datatypes in JS");

//! What are Datatypes?
//* The datatypes means which type or kind of data we can store inside the variable.
//* There are mainly two types of datatypes:

//? 1. Primitve Datatypes
//? 2. Non-primitive Datatypes

//! 1. Primitive Datatype:
//* Primitve datatypes are the inbuilt datatypes which is provided by the langauge itself.
//* It can capable to store only single value or data.

//? There are 7 types of primitve datatypes in JS:
//~ 1. number
//~ 2. string
//~ 3. boolean
//~ 4. null
//~ 5. undefined
//~ 6. bigint
//~ 7. symbol()

//! 1. number:
//* The number includes everything like integers, decimal values, floating values, etc.

let num = 10;
console.log(num);

//! typeof operator:
//* The typeof operator it is used to check the which type of data stored inside the given variable.
//? Syntax: typeof(variable) or typeof variable
console.log(typeof num); // number
console.log(typeof num); // number

//! 2. string:
//* The string the a collection of characters:
//? Characters: a-z, A-Z, 0-9, Speical Characters(!, $, %, ^,_), whitespace character.

//* There are 3 ways to create the string in JS:
//? 1. By using single quotes ('')
let str = "Hello world";
console.log(str);
console.log(typeof str);

//? 2. By using double quotes ("")
let str2 = "Bye World";
console.log(str2);
console.log(typeof str2);

let task = "I can't help you";
console.log(task);

//? 3. By using String Template Literal (backticks) (``)
let hero = "Allu Arjun";
console.log(hero, `is also known as Rebel Star!`);

//! 2nd advantage:
let multiLineString = `This is the first line
This is the second
This is the third line`;
console.log(multiLineString);

//!3. boolean:
//* Boolean will represents the true or false
//? true -> 1 -> yes
//? false -> 0 -> no

let bool = true;
console.log(bool);
console.log(typeof bool);

//! 4. null:
//* The null means nothing or empty but not equals to zero.

let nullValue = null;
console.log(nullValue);
console.log(typeof null); //object

//! 5. undefined:
//* The variable has been declared but not yet assigned the value to the variable.

let undefinedVar;
console.log(undefinedVar);

//! 6. bigint:
//* The value is which is greater than 2^53-1 is considered as a big value. (Beyond safe limit)

let bigValue = 38846894682964982104848265826586205n;
console.log(bigValue);

//! 7. Symbol():
//* The symbol() is a primitve value which is used to create the unique value.
//? Syntax: Symbol(value);

let value1 = Symbol("hello");
let value2 = Symbol("hello");

console.log(value1 == value2); // false
console.log(value1);
console.log(value1.description);

console.log(typeof(value1.description)); // string
