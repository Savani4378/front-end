console.log("Functions in JS");

//! Arrow function:

//~ NOTE: Arrow function don't have their arguments object.
function getNumbers() {
  console.log(arguments);
}
getNumbers(10, 20, 30, 40, 50);

let numbers = () => {
  console.log(arguments);
};
// numbers(60, 70, 80);

//! Error: Uncaught ReferenceError: arguments is not defined

//! Implicit Return:
//? Implicit return means of only one statement is present inside your function there is no need to mention curly brackets as well as return keyowrd.

//? You can omit the {} and return keyword.

let add = (num1, num2) => num1 + num2;
//Internally it is converted like this:
// let add = (num1, num2) => {return num1 + num2}

console.log(add(10, 20)); // 30

let demo = () => console.log("Hello Implicit Return");
demo();

//! Explicit Return:
//* If there are mutiple statements is present inside the given function then you have to mention manually curly brackts and return keyword.

//* If you are mentioning the return keyword manually then you have to must use the curly brackets.

let explicitFun = () => {
  console.log("First Statement");
  console.log("Second Statement");
  return "2 Statements are present inside the function";
};

// console.log(explicitFun());

let demo2 = () => console.log("First Statement");
console.log("Second Statement");

demo2();

//! 6. callback function:
//* The function which is passed to another function as a argument is called as callback function.

//! orderFood:
function orderFood(waiter) {
  console.log(`🧑‍🍳:Sir What you want?
        1. Bhakari with Chai
        2. Chaas`);
  // console.log(waiter);
  waiter();
}

// orderFood(serveFood);
// orderFood(reviewFood);

//! serveFood
function serveFood() {
  console.log("🧑‍🍳: Enjoy your food🍽️🍴");
}

//! reviewFood
function reviewFood() {
  console.log("It was a delicious food and I loved it👌");
}

document.getElementById("orderserve").addEventListener("click", () => {
  orderFood(serveFood);
});

document.getElementById("orderreview").addEventListener("click", () => {
  orderFood(reviewFood);
});
