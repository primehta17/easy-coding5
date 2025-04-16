//closer

function outer(){
    let count=0;
    return function(){
        return ++count;
    }
}
let table=outer();
console.log(table());
console.log(table());

function createCounter(){
    let count=0;
    return function(){
        count++;
        console.log(count);
    }
}
let counter = createCounter();

counter();
counter();
counter();
counter();

function outer(){
    let name="Rosh";
    function inner(){
        console.log(`${name}`)
    }
    return inner;
}
const greeting = outer();
greeting();


// Use Cases:

// Data Privacy: Closures enable the creation of private variables that cannot be accessed directly from outside the function.​

// Function Factories: They allow the creation of functions with preset configurations.​

// Maintaining State: Closures can maintain state between function calls without using global variables.