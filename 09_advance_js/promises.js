const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        // console.log("Async task completed")
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    // console.log("Promise one completed")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        // console.log("Async task completed from Promise Two")
        resolve()
    }, 1000)
}).then(function(){
    // console.log("Promise two completed")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        const user = {"username": "Akash",
    "pwd" : "1234"}
    resolve(user)
    }, 1000)
})

promiseThree.then(function(user){
    // console.log(user.username);
    // console.log(user.pwd)
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            console.log("Async task completed")
            resolve({username: "Hitesh", "email": "hitesh@gmail"})
        }
        else{
            reject("ERROR: Something went wrong")
        }
    }, 1000)
})

promiseFour.then(function(user){
    console.log(`UserName is ${user.username}, and Password is ${user.email}`)
    return user.username
}).then(function(data){
    console.log("Returning from inner then", data)
}).catch(function(msg){
    console.log(msg)
}).finally(() => console.log("Promise is either resolved or rejected"))
    