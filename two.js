//IIFE (Immediately Invoked Function Expression)

(function(){
    console.log("Hello qwerty")
}());

(function (a,b){
    console.log(a+b);
}(3,4));

(function (name){
    console.log(`Hello ${name}`);
}('priya'))

// Use Cases:

// Encapsulation: IIFEs are commonly used to create a private scope, preventing variables from polluting the global namespace.​

// Initialization: They can execute code immediately, which is useful for initialization tasks.​