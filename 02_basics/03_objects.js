const mySym = Symbol("Key1")
const myObje = {
    name : "akash",
    "full name" : "Akash Vardhan",
    [mySym] : "mykey1"
}

// console.log(myObje)
// Object.freeze(myObje)
myObje.name = "Akash"
// console.log(myObje);

myObje.greeting = function(){
    console.log("Welcome to this object")
}

console.log(myObje.greeting())

myObje.greeting2 = function(){
    console.log(`Welcome ${myObje["full name"]} to this object`)
}

myObje.greeting2()