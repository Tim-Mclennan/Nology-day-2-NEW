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




// WE WANT TO ADD A LINE OF HTML TO A P TAG EVERY TIME A USER ENTERS A TASK: (<p>{taskInput.value}</p>)
    // create an empty p element - this is empty.
    // this means you will have to also create a text node - the value of our input.
    // wre also need to tell the text to go inside the p tags.
    // we need to tell the prepared element where to go on the page -> by selecting an existing element from our page 



    // instead, you can create a function that adds html elements to the page:
const createElement = (elementType, text, parent) => {
    const newElement = document.createElement(elementType);

    const textNode = document.createTextNode(text);

    newElement.appendChild(textNode);

    parent.appendChild(newElement);

};



    const taskBtn = document.querySelector("#taskbtn");
    const taskList = document.querySelectorAll("#Tag");

    taskBtn.addEventListener("click", () => {
        if (taskInput.value === "") {
            return alert("Please put in a task!");
        }
        console.log(taskInput.value);

        //removing  a childnode:
        taskList.removeChild(document.querySelector("#nothingPara"));

        createElement("p", taskInput.value, taskList);

    taskList.appendChild(para);
    });





