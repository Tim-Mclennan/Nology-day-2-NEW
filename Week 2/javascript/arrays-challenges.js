// Challenge: Listing Hobbies
// MVP
// Create an array with 3 of your hobbies
const hobbies = ["cooking", "exercising", "sleeping"]


// Print in the console the first hobby in the array
console.log(hobbies[0]);

// Remove that first hobby from the array and store that hobby in a variable
let firstHobby = (hobbies.shift());
console.log(firstHobby);

// Store the length of the array in a variable
let hobbiesLength = (hobbies.length);
console.log(hobbiesLength);

// Add another hobby at the end of the array
hobbies.push("driving");

// Print that last hobby in the console
console.log(hobbies[hobbiesLength -1]);

// Bonus:
// Join all your hobbies in a single string each hobby being comma separated (i.e. “My hobbies are: hobby1, hobby2, hobby2”)
console.log(hobbies.join(", "));




// Challenge: Grocery Lists
// MVP
// Create an array containing 5 grocery items you often buy
let groceries = ["milk", "bread", "vegetables", "chocolate", "vodka"];
console.log(groceries);

// Log this list to the console, make sure the output is pipe delimited
console.log(groceries.join("|"));

