const myArr = [1,2,3,4,5,6,7,8,9]

for(const num of myArr){
    // console.log(num);
}

const greetings = "Hello World"
for(const alphabet of greetings){
    // console.log(`Each alphabet is ${alphabet}`);
}

const myMap = new Map()
myMap.set("Bihar","Patna")
myMap.set("UP","Lucknow")
myMap.set("MP","Bhopal")

// console.log(myMap);

for(const [key, value] of myMap){      //destructuring of array
    // console.log(`Key: ${key}: Value: ${value}`)
}


const myObj = {
    'game1':"BGM",
    'game2':"TikToe"
}

for(const [key, value] of myObj){
    // console.log(key, value)           //not iteratable by this way
}