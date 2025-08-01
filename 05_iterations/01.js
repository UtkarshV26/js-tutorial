// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is five.");
        
    }
    // console.log(element);  
}

// console.log(element); // can't be accessed outside


// nested loops: printing tables from 1 to 10.

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(i + " * " + j + " = " + i*j)
        
    }
    
    
}

let myArray =["thor", "ironman", "spiderman"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
    
}

// break: break is used to exit a loop immediately without completing further iterations when a certain condition is met.

for (let i = 1; i <= 20; i++) {

    if (i == 5) {
        console.log(`Detected 5`)
        break
    }
    console.log(`Value of i is ${i}`)
}

// continue: continue is used to skip one loop cycle when a specific condition is met.

for (let i = 1; i <= 20; i++) {

    if (i == 5) {
        console.log(`Detected 5`)
        continue
    }
    console.log(`Value of i is ${i}`)
}

