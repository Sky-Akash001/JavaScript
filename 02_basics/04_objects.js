const user = new Object() //Singleton Object

// const user = {}
user.id = "123a"
user.name = "Sam"
user.isLoggedIn = false

const newUser = {
    email : "user@gmail.com",
    fullname : {
        firstname : "Akash",
        lastname : "Vardhan"
    },
    isLoggedIn : true
}
// console.log(newUser);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c", 4:"d"}
//Object.assign(source, target)
// console.log(Object.assign({},obj1, obj2))
// console.log(obj1)
// console.log({...obj1, ...obj2})

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

// console.log(user.hasOwnProperty("id"))

const course = {
    courseInstructor :"Akash",
    price : 399,
    scheduledDay :"Tuesday"
}
//Object destructuring
const {courseInstructor : instructor} = course

console.log(instructor)