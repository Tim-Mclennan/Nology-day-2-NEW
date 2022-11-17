// /* Challenge: Storing Personal Information

// ### MVP:

// 1. Create three variables to store your first name, last name and age.


// 1. Assign values to these variables.
// 1. Print a string containing all three variables in the console (should look like "Hi, my name is XXX XXX and I am XX years old) */

// // const firstName = "Tim";
// // const lastName = "Mclennan";

// // let age = 25;

// // console.log(
// //     "Hi, my name is" + firstname + lastName + "and I am" + age " years old."
// // );

// // CONTROL FLOW (The order in which our code isexecuted, by default it is done from top to bottom)


// //CHALLENGE ODDS AND EVENS
// console.log("Hi, just making sure that this node command works.")

// let n = 6

// if (n % 2 == 0) {
//     console.log("n is even")
// } else {
//     console.log("n is odd")
// }

// //COMPARING NUMBERS CHALLENGE
// x = 9
// y = 9

// if (x > y) {
//     console.log("X is greater than Y")
// } else if (x < y) {
//     console.log("X is smaller than Y")
// } else {
//     console.log("X is equal to Y")
// }


// // USER INPUT TYPE CHALLENGE

// let userInput = 5;


// if (typeof userInput == "number") {
//     console.log(`The number is the root of ${userInput ** 2}`);
// } else if (typeof userInput == "string") {
//     console.log (userInput);
// } else {
//     console.log("invalid input");
// }

// // SWITCH STATEMENTS

// const errorCode = 2;

// switch (errorCode) {
//     //if (errorcode ===0)
//     case 0:
//         console.log("Program has run successfully.");
//         break;
//         // elseif (errorcode === 1)
//     case 1:
//         console.log("error code 1");
//         break;
//     case 2:
//         console.log("error code 2");
//         break;
//     case 3:
//         console.log("error code 3");
//         break;
//     // else
//     default: 
//     console.log("error code not valid");
// }

// // 2ND EXAMPLE
// const input = "C";

// switch(input) {
//     case "e":
//     case "E":
//     case "exit":
//         console.log("The app is exiting..")
//         break;
//     case "c":
//     case "C":
//     case "continue":
//         console.log("Continue..")
//         break;
//     default: 
//         console.log("command not found")
// }

// // WEEKLY DAY CHALLENGE

// const day = 3

// switch(day) {
//     case 1: 
//         console.log("Today is Monday")
//         break;
//     case 2:
//         console.log("Today is Tuesday")
//         break;
//     case 3:
//         console.log("Today is wednesday")
//         break;
//     case 4:
//         console.log("Today is thursday")
//         break;
//     case 5:
//         console.log("Today is friday")
//         break;
//     case 6:
//         console.log("Today is saturday")
//         break;
//     case 7:
//         console.log("Today is sunday")
//         break;
//     default: 
//         console.log("Number is not a day of the week!")
// }

//Eye colour Challenge

// let parent1 = "brown"
// let parent2 = "green"

// switch (parent1 + parent2) {
//     case"greengreen":
//         console.log("Your eye colours are green and green. Your chances are..")
//         break;
//     case "bluegreen":
//         console.log("Your eye colours are blue and green. Your chances are..")
//         break;
// }


// Challenge: Calculating Moon Orbits

// let earthDays = 54;

function moonOrbits(earthDays) {
    return (earthDays * 0.03703704).toFixed(3);
}
console.log(moonOrbits(54));


// Challenge: Years to Days & Seconds

function ageInDays(age) {
    return (age * 365);
}
console.log(ageInDays(3));

function ageInSeconds(age) {
    return (age * 3.154e+7).toFixed(3);
}
console.log(ageInSeconds(3));

// Challenge: Return the Remainder from Two Numbers
function remainder(firstNumber,lastNumber) {
    return (firstNumber % lastNumber);
}
console.log(remainder(25,6));

// Challenge: Basketball Points
function basketballPoints(numOfTwos, numOfThrees) {
    return numOfTwos * 2 + numOfThrees * 3;
}

const number1 = 100;
const number2 = 200;

const findSmallestNumber = (number1, number2) => {
    /* Write your code here */
    array = [number1, number2];
    return Math.min(array);
  
    // if (number1 < number2) {
    //   return number1;
    // } else (number1 > number2) {
    //   return number2;
    // } 
  };