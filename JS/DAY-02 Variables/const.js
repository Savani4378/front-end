//! 3. const : 
//* here, const stands for constant value.
//* The consy variable is introduced in ES6 concepts which was released in year 2015.
//* The const variable hs a default scope is block.

//? 1. Declaration (D) : Not-Possible ❌
//const num;
//'const' declarations must be initialized.

//? 2. Initialization (I) : Possible ❌

//? 3. D + I : Possible ✅
const num = 10;
console.log(num);

//? 4. R - D : Not-Possible ❌
// const num;
// Error : 'const' declarations must be initialized.
// Error : Cannot redeclare block-scoped variable 'num'.
 
//? 5. R - I : Not-Possible ❌
num = 50;
console.log(num); // assignment to const variable.


