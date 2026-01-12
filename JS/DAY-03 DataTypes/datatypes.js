console.log("Data Types in JS");


// Data types in JS
//! What are Datatpes?
//* The DataTypes means which type or kind of data we can store inside the variable.
//~ There are mainly two types of datatypes : 

//? 1. Primitive DataTypes
//? 2. Non-Primitive DataTypes

//! 1. Primitive DataType : 
//* Primitive datatypes are the inbuilt datatypes which is provided by the language itself.
//* It can capable to store only single value or data.

//? There are 7 types of primitive datatypes in JS :
//~ 1. number
//~ 2. string
//~ 3. boolean
//~ 4. null
//~ 5. undefined
//~ 6. bigint  
//~ 7. symbol()

//! 1. number : 
//* The number includes everything like integers, decimal values, floating values, etc..

let num = 10;
console.log(num);

//^ "typeof" operatore : 
//* The typeof operator it is used to check the which type of data stored inside the given variable.
//? Syntax : typeof(variable) or typeof variable
console.log(typeof(num)); //number
console.log(typeof num); //number

//! 2. String :
//* The String is a collection of characters : 
//? Characters : a-z, A-Z, 0-9, Special Characters(!, $, %, ^, #, @, _), Whitespace Character.

//* There are 3 ways to create the string in Js :
//? 1. By using single quotes ('')
let str = 'Hello World';
console.log(str);
console.log(typeof str);

//? 2. By using Double quotes ("")
let str2 = "Bye World";
console.log(str2);
console.log(typeof str2);

let task = "I can't help";
console.log(task);

//? 3. By using Strin  Template Literal (backtricks) (``) (ES6)
let hero = "Allu Arrjun";
console.log(hero, `also known as Rebel Star!`);
console.log(`${hero} also known as Rebel Star`);

//^ 2nd advantage : 
let multiLineString = `This is the first line
This is the second line
This is the Third line`;
console.log(multiLineString);

//! 3. Boolean :
//* Boolean will represent the true or false
//? true  -> 1  -> yes
//? false -> 2 -> no

let bool = true;
console.log(bool);
console.log(typeof bool);

//! 4. Null :
//* The null means nothing or empty but not equals to zero.

let nulValue = null;
console.log(nulValue);
console.log(typeof null); //object

//! 5. Undefined : 
//* The variable has been declared but not yet assigned the value to the variable.

let undefinedVar;
console.log(undefinedVar);

//! 6. Bigint :
//* The value is which is greater than 2^53-1 is considered as a big value. (Beyond safe limit)

let bigValue = 852144524896478964785214786214789874462144569345n;
console.log(bigValue);

//! 7. Symbol : 
//* The Symbol() is a primitive value which is used to create the unique value.
//? Syntax : Symbol(value);

let value1 = Symbol("Hello");
let value2 = Symbol("hello");

console.log(value1 == value2); // false
console.log(value1);
console.log(value1.description); // string

