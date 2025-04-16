//high order function 

//to send in parameter

function add(a,b){
    return a+b;
}

function operation(add){
    return add(2,3);
}

console.log(operation(add));

//to return the function

function outer(){
   function inner(){
     return "inner function";
   }
   return inner;

}
console.log(outer()());

// Notes
// Higher-Order Functions: As mentioned, a higher-order function is one that either takes another function as an argument or returns a function as its result. Your outer function fits this definition by returning the inner function.​

// Function Execution: Remember that in JavaScript, defining a function doesn't execute it. You need to invoke it using parentheses ().

