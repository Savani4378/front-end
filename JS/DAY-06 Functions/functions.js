console.log("Types of Functions");

//! Types of functions :
//? 1. Named Functions
//? 2. Anonymous Functions
//? 3. Function as an Expression
//? 4. IIFE
//? 5. Arrow Function (Fat Arrow Function)
//? 6. Callback Function
//? 7. HOF (Higher Order Function)
//~ Advanced
//? 8. Nested Function
//? 9. Closure Function
//? 10. Generator Function
//? 11. Function Currying

//! 1. Named Functions :
//* The function which is defined with identifer is called named function.
//* In simple words, the function which has a name is called named function.

function faltuKaGyan() {
    console.log("Work like a madness and achieve like a greatness!");
}
faltuKaGyan();

//! 2. Anonymous Function :
//* The Function which don't have any name is called Anonymous Function.

//~ 1st way : 
//? store the anonymous function inside a variable and call that variable with empty().

let mrHashmi = function () {
    console.log("Mr. X");
};
console.log(mrHashmi);
mrHashmi();

//! 3. Function as an expression :
//* The function which is assigned to a variable as an expression is called as function as an expression.

//~ 2nd way : 2nd way to call Anonymous Function : 
//? Wrap the entire anonymous function inside the empty () and call the empty () inside the outer () or just after the function block.

(function () {
    console.log("This is anonymous function");
}());

//! argument object : 
//* The arguments object is used to store all values which is passed the FCS as a actual values.

function getNumbers() {
    console.log(arguments);
    
    let argumetnsObject = arguments;
    console.log(Array.isArray(argumetnsObject)); // false
    console.log(arguments[0]);
    

    console.log(typeof arguments); // object    
}
getNumbers(10, 20, 30);

//! 4. IIFE :
//* The IIFE Stands for Immediate Invoking Function Expression.
//* The IIFE function executes only once.

(function () {
    alert("Hello!");
})();

//! 5. Arrow Function : 
//* The arrow function is shorhand syntax to create function is JS.
//* Arrow function is introduced in ES6 concepts which was released in 2015.

//? Syntax : () => {}

    let add = (num1, num2) => {
        console.log(num1 + num2);
        return num1 + num2;
    };

    console.log(add);
    add(10 , 20);
    console.log(add(30, 50)); // 80, 80    