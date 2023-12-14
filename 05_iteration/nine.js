const priceList = [299,101,125,275,500]

let myTotal = priceList.reduce(function (acc, currVal) {
    console.log(`Current item is ${currVal}, and cartPrice is ${acc}`)
    return acc+currVal
},0)

console.log("Total Price of cart is:", myTotal)

myTotal = priceList.reduce((acc,currVal) => acc+currVal,0)
console.log(myTotal)


const myCourse = [
    {
        itemName:"Js Course",
        price:2999
    },
    {
        itemName:"Py Course",
        price:999
    },
    {
        itemName:"Mobile dev Course",
        price:5999
    },
    {
        itemName:"Data Science Course",
        price:12999
    }
]

const finalPrice = myCourse.reduce((acc,currVal) => acc+currVal.price,0)
console.log("Price of all courses :",finalPrice)