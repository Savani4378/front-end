console.log("Array in JS");

//! Array:
//* Array is a special type of object in JS.
//* The array is a collection of multiple elements.
//* The array may be homogenous or heterogenous.

//? 1. Homogenous Array:
//* The array which consist of same type of data.
let arrNum = [10, 20, 30, 40, 50];
let arrStr = ["Hello", "bye", "Gn"];
console.log(typeof arrNum); // Object

//? 2. Heterogenous Array:
//* The array which consist of different type of data.
let mixedArr = [
  10,
  true,
  null,
  "hello",
  3.16,
  function () {
    console.log("Function Executed");
  },
  [60, 40, 20, [50]],
];

//! Accessing the array elements:
console.log(mixedArr[0]);
mixedArr[5]();
console.log(mixedArr[6][3][0]);

//! Array Property: length
//? 1. Getting the length:
console.log(mixedArr.length); // 7

//? 2. Setting the length:
mixedArr.length = 5;
console.log(mixedArr);

//! Ways to create an array:
//? 1. By using literal -   []
//? 2. By using Array() constructor

let arr = new Array(10, 20, 30, 40, 50);
console.log(arr); // [10, 20, 30, 40, 50]

//TODO: NOTE- If you pass only element to the Array() constructor, it will be considered as a length of the array.
let arr2 = new Array(5);
console.log(arr2); // (5) [empty x 5]

//! Array Methods: (Static Methods)
//? 1. Array.from()
let str = "hello";
console.log(Array.from(str));

//? 2. Array.isArray()
console.log(Array.isArray(arr2)); // true

//? 3. Array.of()
console.log(Array.of(1, 2, 3, 4, 5));


