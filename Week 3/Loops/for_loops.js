// WHAT IS A FOR LOOP?
// It is a way to run our code multiple items; one of the use cases would be to iterate through an array when certain parameters are met. 

// writing code like below, is time consuming and error prone, and is not easy to make changes.
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);
// console.log(11);

// an alternative way is to use a for loop below: 

/* for (let i=0; i < 11;i++) { 
    //This for loop is structured as (variable initialiased;condition;increment/decrement). In this case, i is initialised at 0, will run until i is no longer less than 11 and will increment.
    console.log(i);
} */

function sum(n) {
    let value = 0;
    let addArray = [];
    
    for (i = 1; i <= n; ++i) {
      addArray.push(i);
      value += i;
    }
    return `${addArray.join("+")} = ${value}`;
  }
  
  console.log(sum(5));

// MVP:
// Create a function with a for loop that will add all the numbers up to n
// You should create a variable to set the upper limit of your loop
// Your loop should increment by 1 on each iteration
// Your loop should print the final result:
// sum(10) => 55

const sum = (n) => {
    let finalValue = 0;

    for(let i = 1; i<=n; ++i) {
        // console.log(i, "i")
        finalValue += i;
    }
    return finalValue;
}
console.log(sum(10));
  


// How to loop throguh arrays with a for loop
    const students = ["tomo", "tim", "luke", "alex"];

    for (i=0; i < students.length; ++i) { //i should always be initialised at 0 as you want to access all arrays thrugh an element.
        console.log(students[i], i);
    }

// loooping through an array backwards (using students example)
const reversed = []; //storing new elements, starting from the last element

for (let i=students.length-1; i >= 0; --i) {
    reversed.push(students[i])
}
console.log(reversed);
console.log(students);


// Creating a new array with the same names but all uppercase:
    const upperCaseStudents = [];
    for(let i=0; i < students.length; ++i) {
        let student = students[i].toUpperCase();
        upperCaseStudents.push(student);
    }
    console.log(upperCaseStudents);

// similar example - add each element array into another variable
    let letters = ["n", "o", "l", "o", "g", "y"]
    let str = ""; //creating an

    for (let i=0; i < letters.length; ++i) {
        str += letters[i].toUpperCase()
    }
    console.log(str);

// BREAK - iterating through an array for a specific element ( and stopping it with break keyword)

const names = ['daniel', 'ella', 'jack', 'john'];
const toFind = 'ella';
let found = false;

for (i=0; i < names.length; ++i) {

    if(names[i] === toFind) {
        found = true;
        break; //this will stop the function from searching once the found variable is true.
    }
}

// CONTINUE 

