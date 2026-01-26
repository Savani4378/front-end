console.log("Array Iteration Methods in JS");

//! Array Iteration Methods : 
//* Array iteration methods are also known as advance array method for modern JS as well as React JS.
//* Array iteration methods are usedto loop through automatically on an array and perform some operation for each and every element.
//~ There are 4 Methods :
//^ 1. map()
//^ 2. filter()
//^ 3. reduce()
//^ 4. forEach() 

let numbers = [1, 2, 3, 4, 5];
//! Traditional Way to iterate on an array :

// for (let i=0; i < numbers.length; i++) {
// console.log(numbers[i]);
// }

//! 1. map() :
//* The map() method is used to iterate on an array and it transform each and every element present inside the array. 
//* It will create a new array instead of modifying the original array.
//? Syntax : arr.map((cValue, cIndex, cArray) => {})
//? Return Type : New Transformed Array

let squareNumArr = numbers.map((cValue, cIndex, cArray) => {
    // console.log(cValue);
    // console.log(cIndex);
    // console.log(cArray);
    // console.log("cValue : ", cValue, " cIndex : ", cIndex);
    // console.log(cValue * cValue);
    return cValue * cValue;
});

console.log(squareNumArr); // (5) [1, 4, 9, 16, 25]
console.log(numbers); // (5) [1, 2, 3, 4, 5]

let heros = ["Prabhas", "SSR", "Hritik Roshan", "Tiger"];

heros.map((hero, index) => {
    console.log(index); 
});

//& thisArg : 

let obj = {
    value : 10,
};

let updatedArr = numbers.map(function(num) {
    return num + this.value;
}, obj);
console.log(updatedArr);

//! 2. filter() : 
//* The filter() method is used to filter out the elements based on matching condition.
//? Syntax : filter((cValue, cIndex, cArray) => {})
//? Return Type : New Array (true or false)

//~ If condition it is true -> Add
//~ If condition it is false -> Not Add

let randomNumbers = [21,54,67,89,12,45,32,10,5,3,78];

let evenNumbers = randomNumbers.filter((num) => {
    return num % 2 == 0;
});
console.log(evenNumbers); // (5) [54, 12, 32, 10, 78]

//! Real Time Example : 

let products = [
  {
    name: "Himalaya Herbals Purifying Neem Face Wash",
    price: 180.0,
    category: "Personal Care",
  },
  {
    name: "Mamaearth Onion Hair Oil",
    price: 399.0,
    category: "Personal Care",
  },
  {
    name: "Saffola Gold Blended Edible Oil (5L)",
    price: 680.0,
    category: "Groceries",
  },
  {
    name: "Amul Butter (500g)",
    price: 260.0,
    category: "Groceries",
  },
  {
    name: "Prestige Svachh Pressure Cooker (3L)",
    price: 1350.0,
    category: "Home Appliances",
  },
  {
    name: "Bajaj Pulsar 150 Motorcycle",
    price: 110000.0,
    category: "Vehicles",
  },
  {
    name: "Tata Salt (1kg)",
    price: 30.0,
    category: "Groceries",
  },
  {
    name: "Fastrack Analogue Watch (Men's)",
    price: 2500.0,
    category: "Accessories",
  },
  {
    name: "Mi Super Bass Wireless Headphones",
    price: 1799.0,
    category: "Electronics",
  },
  {
    name: "Patanjali Dant Kanti Toothpaste",
    price: 90.0,
    category: "Personal Care",
  },
];

let personalCare = products.filter((product) => {
    return product.category === "Personal Care";
});
console.log(personalCare);

let price100 = products.filter((products) => {
    return products.price > 100;
});

console.log(price100);
console.log(products.length);

//! Difference between map and filter :
let evenByMap = randomNumbers.map((num) => {
    if (num % 2 == 0) {
        return num;
    } else {
        return "odd";
    }
});

console.log(evenByMap);
