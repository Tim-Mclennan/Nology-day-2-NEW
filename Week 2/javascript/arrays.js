// ARRAYS

// arrays are a collection of data. It is JS's way of creating lists of information: 

const coach1 = "Sandra";
const coach2 = "Remi";
const coach3 = "cal";

// console.log(coach1);
// console.log(coach2);
// console.log(coach3);

// Instead of doing this, you can store all values under one variable name.
    const coaches = [coach1, coach2, coach3, "Martyna"];
    console.log(coaches);

// what if you just needed to access one element? 
//each element in an array has an index which you can call, starting at 0
    console.log(coaches[1]);

// How to access the last element?
// use the length property, and knowing that the last item will always have the length of the index -1.
    const lastItem = coaches.length;
    console.log(coaches[lastItem -1]);



// ARRAY CONSTRUCTOR - A different way to write arrays
    const myArray = new Array(1,2,3);
    console.log(myArray);

    // This array below will not work the way you want. It will create an array with 5 empty spots.
    const anotherArray = new Array (5);
    console.log(anotherArray);

    // sometimes you need to create an array filled with some values
    const myArrayOfZeros = new Array(4).fill(0);
    console.log(myArrayOfZeros);

    

// ARRAY MANIPULATION

//ADDING ELEMENTS TO AN ARRAY
    const students = []; //empty array initialise
    console.log(students.length);

//PUSH
    students.push("Tim");
    students.push("timmy") // this will add an element to the end of the array

    console.log(students.length);
    console.log(students);

    students.push("paul");
    console.log(students.length);
    console.log(students);

//UNSHIFT
    students.unshift("amanda"); // this will add an element to the start
    console.log(students);

    students[0] = "edric"; //this will replace the index value of an element in your array
    console.log(students);
    console.log(students.length);


// REMOVING ELEMENTS FROM AN ARRAY - two methods, either from the start or the end
    students.pop(); // this removes an elements from the end.
    console.log(students);

    students.shift(); //this will remove an element from the start.
    console.log(students);

    // ADDING SOMETHING WITHOUT METHDODS (less dynamic)
    console.log(students.length);
    students[2] = "dan";
    console.log(students);
    
    // Using it this way can create empty elements (Notice the empty elements in the console)
    students[5] = "john";
    console.log(students);
    console.log(students);

    

// INCLUDES - this will check whether or not a specific array has an element (Will return true or false)
    console.log(students.includes("john")); 

// INDEX.OF - checks index number of element
    console.log(students.indexOf("Tim"));

    if (students.includes("Tim")) {
        console.log("Tim is one of the students");
    }

    // .join
    // This helps to turn an array of strings into one string. The join property will also let you add any string you want between those array elements.
    console.log(students.join(" + "))


