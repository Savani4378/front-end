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
//? 1. Array.from() :
let str = "hello";
console.log(Array.from(str));

//? 2. Array.isArray() :
console.log(Array.isArray(arr2)); // true

//? 3. Array.of() :
console.log(Array.of(1, 2, 3, 4, 5));


//! Array Instatnce Methods:
//? 1. Push () :
// let numArr = [10, 20];

//! Array Instance Methods:
//? 1. push() :
// let numArr = [10, 20];
console.log(numArr);
numArr.push(30, 40, 50, 60, 70, 80, 90, 100);
console.log(numArr);

//? 2. pop() :
numArr.pop();
console.log(numArr);

//? 3. unshift() :
numArr.unshift("hello");
console.log(numArr);

//? 4. shift() :
numArr.shift();
numArr.shift();
console.log(numArr);

//? 5. slice(startIndex, endIndex) :
console.log(numArr.slice(1, 7));

//? 6. splice(startIndex, deleteCount, [newEle]) :
let heros = ["Iron Man", "Hulk", "Thor", "Deadpool", "Blue Bettle", "Wanda"];
console.log(heros);
heros.splice(4, 1, "CA");
console.log(heros);

//? 7. includes() :
console.log(heros.includes("Hawkey")); // false
console.log(heros.includes("Thor"));

//? 8. indexOf() :
//? 9. concat() :
let newarr = ["Dr. Strange"];
console.log(newarr);
let marval = heros.concat(newarr);
// console.log(marval);
console.log(heros.concat(newarr));

//? 11. join() :
console.log(heros.join("-"));

//? 12. reverse() :
console.log(heros.reverse());

//? 10. flat() :
let nestedArr = [10, 20, 30, [40, 50, [60, 70]]];
console.log(nestedArr);
console.log(nestedArr.flat(2));

//? 13. find() :
//* It will return the first element which satisfies the condition.
//* Syntax : arr.find(callback_fun);

let users = [
  {userID:1, userName:"john", age:24},
  {userID:2, userName:"jane", age:22},
  {userID:3, userName:"doe", age:26},
];
console.log(users);
// Find method example :
let userDetails = users.find((user) => {
  return user.userId === 2;
});
console.log(userDetails);
