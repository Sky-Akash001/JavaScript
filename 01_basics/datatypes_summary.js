// Primitive datatypes follow call by value, we dont get their reference but we get copy of their value

//Refernce (Non Primitive)

//Array, Objects, functions

const id = Symbol(123)
const anotherId = Symbol(123)

// console.log(id === anotherId)
// console.log(id == anotherId)

// console.log(typeof 33n) // bigint representation by putting n at end

const heroes = ["Akash","Vardhan","Ravi"];//array
let myObject = {
    name :"Akash",
    age :23
} // object

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heroes);
console.log(typeof myFunction)
console.log(typeof myObject)
console.log(id);