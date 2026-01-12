console.log("Fncitons in JS ");

// ! Functions:
// * The function is a block of code which will perform the specific task.
// * the advantage of func is we can use it repeatedly in various codes and no need to write code again and again

// ? Syntext: funtion identifier () { ... // code goes here }  --> identifier means func_name

// ! Non-Parameterized funtion :
function greetUser(params) {
    console.log("Hello, user!");
    
}
greetUser(); // <-- function call statement (FCS)
// * FCS is responsible to call or invoke the function execution simply it is a combination of function name and empty ().

// ! Parametrized Funciton :
// * Parameter: it is a temporary variable declared inside the function defintion
// * Argument : these are the actual values passed inside FCS.

function greetPerson(name,name1) {
    console.log(`Greetings from the ${name} and ${name1}`);
    
}
greetPerson("Gautam", "Piku")

//! return keyword or statement in function?
// *The return keyword is used to return the value back to the caller(FCS) for further use.

function sum(num1, num2) {
    let result = num1 + num2;
    return result;

}

// sum(7,18); no output

// ! 1st way:
// ? if the fucntion is returning any value to the function call statement and if you want to access it then directly call the FCS inside the clg.

console.log(sum(7,18));