for(let index = 0;index <=10;index++){
    const element = index;
    if(element == 5){
        // console.log("5 is best number")
    }
    // console.log(element)
}

for(let i = 1; i<=5;i++){
    // console.log("Table of ",i,":");
    for(let j = 1;j<=10;j++){
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}


let myArray = ["aman","ram","sam","tammy"]

for(let i = 0;i<myArray.length;i++){
    // console.log(myArray[i])
}


//break nd continue

for(let i = 0;i<=10;i++){
    if(i == 5){
        console.log("fav no detected");
        break;
    }
    // console.log(`No is ${i}`);
}
for(let i = 0;i<=10;i++){
    if(i == 5){
        console.log("fav no detected");
        continue;
    }
    console.log(`No is ${i}`);
}