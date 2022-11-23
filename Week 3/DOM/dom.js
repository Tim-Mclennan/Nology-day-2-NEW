// DOM - Document Object Manipulation
// when browsers load our documents it will convert every element into a node (an object with properties that describe that object) so it can display appropriately.

// lets say you want to grab the input and store it in a variable so you dont have to grab it each time:
const taskInput = document.querySelector("#taskInput")  //query selctor allows you to select elements in the same way you would select it  in css.
console.log(taskInput);

// another method to do the same thing:
const heading = document.getElementById("mainTitle");
console.log(heading);

const buttons = document.querySelectorAll(".button");
console.log(buttons)

const divs = document.getElementsByClassName("container");
console.log(divs)


// CHANGE LIGHT MODE EXAMPLE
const modeBtn = document.querySelectorAll("modebtn");
