// Currying

function outerCurry(a){
   return function innerCurry(b){
    return  function mostinnerCurry(c){
            return a+b+c;
        }
    }
}
let outer=outerCurry(1)(2)(3);
console.log(outer);

function multiple(a){
    return function(b){
        return function(c){
           return a*b*c;
        }
    }
}
console.log(multiple(3)(2)(3));

// Benefits of Currying
// 1. Reusability: You can create specialized functions by fixing some arguments.​
// const add5 = sum(5);
// console.log(add5(10)(15)); // Output: 30
// 2. Function Composition: Currying facilitates composing functions in a modular way.

// Currying is a powerful concept in JavaScript that enhances code modularity and reusability
