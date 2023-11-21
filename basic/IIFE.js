//Immediately Invoked Function Expression

//global scope se pollution se prob hoti hai, us global scope ke variables or polltion hai unhe hatane ke liye IIFE use krte hai

//for running two IIFE functions simultaneously we must have to give seperation between both IIFE(;) semicolon as termination after first IIFE 

//structure for IIFE
//(for function definition)(for function execution)

//named IIFE function
/*(function practice(){
    console.log("hi")
})()*/

//unnamed IIFE function


//this gives an error because to IIFE are running without termination 
/*(() => {
    console.log("hi")
})()

((name) => {
    console.log(`My name is ${name}.`)
})("Shumail")*/


//this code works properly because of termination
/*(() => {
    console.log("hi")
})();

((name) => {
    console.log(`My name is ${name}.`)
})("Shumail")*/