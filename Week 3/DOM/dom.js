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



//one of the prperties each node has , is the classList. Using this, you can add, remove and toggle classes which is in the next example.
console.log(divs[0].classList)

 // using it for the body:
 const body = document.querySelector("body");
 console.log(body);

// CHANGE LIGHT MODE EXAMPLE
    const modeBtn = document.getElementById("modeBtn");
    console.log(modeBtn);

    modeBtn.addEventListener("click", () => {
        // console.log("user clicked on button"); //to confirm it works.
        // divs[0].classList.toggle('darkmode');
        for (let i=0;i<divs.length; i++) {
            divs[i].classList.toggle("darkmode");
        }

        // for (let i=0; i<buttons.length;i++) {
        //     buttons[i].classList.toggle("darkmode");
        // }
        buttons.forEach((btn) => {
            btn.classList.toggle("darkmode");
        });


        body.classList.toggle("darkmode");
        heading.classList.toggle("darkmode");
    });

   
// using task example

const taskBtn = document.querySelector("#taskbtn");

taskBtn.addEventListener("click", () => {
    console.log(taskInput.value);
    if (taskInput.value === "") {
        return alert("Please put in a task!");
    }
});







