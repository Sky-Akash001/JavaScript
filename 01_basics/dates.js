let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString())

console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());