//call //bind //apply

let person ={
    name:"priya",
    age:31
}

function greet(country,state,city){
    console.log(`Hey My Name is ${this.name} and age is ${this.age}. Country ${country} and State is ${state} and City ${city}`);
}

greet.call(person,"India","Uttar Pradesh","Noida");
greet.apply(person, ["India","Madhya Pradesh","Bhopal"]);
let bindfun= greet.bind(person,"India","West Bengal","Calcutta");
bindfun();
// Explanation:
// call(): Invokes the function immediately, allowing you to pass arguments individually. ​

// apply(): Also invokes the function immediately, but accepts arguments as an array. ​
// bind(): Returns a new function with a specified this value and optional initial arguments. The function is not executed immediately; you need to call it explicitly. ​

// By using this.name and this.age, the function correctly accesses the properties of the person object when invoked with call, apply, or bind.