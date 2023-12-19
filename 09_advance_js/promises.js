// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         // console.log("Async task completed")
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     // console.log("Promise one completed")
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         // console.log("Async task completed from Promise Two")
//         resolve()
//     }, 1000)
// }).then(function(){
//     // console.log("Promise two completed")
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         const user = {"username": "Akash",
//     "pwd" : "1234"}
//     resolve(user)
//     }, 1000)
// })

// promiseThree.then(function(user){
//     // console.log(user.username);
//     // console.log(user.pwd)
// })


// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             // console.log("Async task completed")
//             resolve({username: "Hitesh", "email": "hitesh@gmail"})
//         }
//         else{
//             reject("ERROR: Something went wrong")
//         }
//     }, 1000)
// })

// promiseFour.then(function(user){
//     // console.log(`UserName is ${user.username}, and Password is ${user.email}`)
//     return user.username
// }).then(function(data){
//     // console.log("Returning from inner then", data)
// }).catch(function(msg){
//     // console.log(msg)
// // }).finally(() => console.log("Promise is either resolved or rejected"))

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username :"Akash Vardhan",pwd :"abc"})
//         }
//         else{
//             reject("ERROR: JS went wrong")
//         }
//     }, 1000)
// })

// async function consumepromiseFive(){
//     try {
//         const response = await promiseFive
//         // console.log(response)
//     } catch (error) {
//         // console.log(error)
//     }
// }

// consumepromiseFive()


async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(response)
        const data = await response.json()
        // console.log(data)
    } catch (error) {
        console.log(error)
    }
}

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()
})
.then((data) => console.log(data))

.catch(() => console.log("Error"))


 


    