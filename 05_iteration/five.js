const coding = ["js", "ruby", "python", "cpp"]

// coding.forEach(function (item){ console.log(item)})  // we define here a callback function, ie without name

// coding.forEach((item)=>{console.log(item);})

//we can also define a function and givr reference in foreach

function printData(item){
    // console.log(item);
}
coding.forEach(printData)

// coding.forEach((iteam,index,array) => {console.log(iteam, index, array)})

const myCoding = [
    {
        languageName:"Python",
        fileName:"py"
    },
    {
        languageName:"Java",
        fileName:'java'
    },
    {
        languageName:"JavaScript",
        fileName:"js"
    }
]

myCoding.forEach((item) => {console.log(item.languageName)})