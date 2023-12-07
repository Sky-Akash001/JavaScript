let myArray = [1,2,3]
//js arrays are resizable and can contain different types of elements

//Shallow copies share same reference, and deep copies do not share same reference
//arrays follow shallow copies.

const myArray2 = new Array(2,4,6,7)

// console.log(myArray2.length);
myArray2.push(33)
// console.log(myArray2);

myArray2.unshift(100)
// console.log(myArray2);

const newArr = myArray2.join()
// console.log(typeof newArr)

console.log("A :",myArray2);
myArray2.slice(1,3)
console.log("B :",myArray2);

myArray2.splice(1,3)
console.log("C :",myArray2);


