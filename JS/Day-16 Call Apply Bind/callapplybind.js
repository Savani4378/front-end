const { use } = require("react");

console.log("Call, Apply and Bind Method in JS.");

//! Why do we need call(), apply() and bind() methods in js?
//* Basically call(), apply() and bind() method is used to borrow the logic of external function.
//* It is used to manupulate the behaviour of "this" keyword in JS.

//! 1. call() :
//* The call() method is used to borrow the logic of function and pass the dynamic object.
//* The call() method is immediately invoked or call the function with respective object.
//? Syntax : methodName.call(thisArg)
//? And Here thisArg -> Replace with actual object.

let person1 = {
    name : "Sita",
};

let person2 = {
    name : "Gita",
};

function printName(){
    console.log(`Hello, ${this.username}`);
    
}

// printName.call(person1);
// printName.call(person2);
// printName(); //^ Hello, undefined

//! 2. apply() :
//* The apply() method is works same like as call() method, but it will accept the multiple arguments in the form of array.
//? Syntax : methodName.apply(thisArg, [arg1, arg2, ...argN]);

let user1 = {
    username : "Chintu",
};

let user2 = {
    username : "Montu",
};

function printDetails (city, country){
    console.log(`User Details : ${this.username}! City ${city} Country ${country}`);
}

// printDetails(user1, ["Delhi", "India"]);
// printDetails.apply(user1, ["Ahmedabad", "India"]);
// printDetails.apply(user2, ["Junagadh", "India"]);

//! 3. bind() :
//* The bind() method is used to handle the 'this' keyword behaviour but it will not invoked or called immediately instead of it will return the function.
//? Syntax : methodName.bind(thisArg);

let userInfo = printDetails.bind(user1);
// console.log(userInfo);
userInfo("Ahm", "In");