// With for loops, you know how many iterations you have. In contrast, the amount of times a while loop can run can become abit more ambiguous.

// generating a random number:
    let num = Math.ceil(Math.random() * 10); //ceil functio rounds up to nearest integer greter than or equal to.
    // console.log(Math.ceil(Math.random() * 10));


// this function will iterate as many times as possible until it reaches 5.
    while(num !== 5) { //while number ISNT euqal to 5,
        console.log(`the random number is ${num}`); //console log the number,
        num = Math.ceil(Math.random() * 10); //and randomize the number again. 
    }
    // The while loop will then reiterate over and over until it reaaches 5.
    console.log(num);

