//Map function
const myNums = [1,2,3,4,5,6,7,8,9,10]

// console.log(myNums.map((item) => item*2 ))      //here also callback, 

// console.log(myNums.map((item) => {return item+2} ))

const newNums = []
myNums.forEach((item) => {newNums.push(item+10)})
// console.log(newNums)


//Chaining
console.log((myNums.map((item) => item*10)).map((item) => item +1).filter((item) => item>=41))