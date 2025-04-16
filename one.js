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

