// What are array iterators?
// built in methods, methods that operate on each individual element of an Array

// why do we need iterators?
//it is alot less syntax, more readable, easier to debug, and alot less error prone.

// We need to create a new array where we should store the values of our original array after we modify them.

const numbers = [1,2,3,4,5];

// Say we want to create a new array that will have all the numbers increment by 1.

//first, create an empty aray.

const newNumbers = [];

//loop through our array, incremenet and then push that inremented number to new array

for (let i=0; i<numbers.length;i++) {
    newNumbers.push(numbers[i] +1);
}
console.log(newNumbers);

// now say we would like a new array with every numbers from the original array, with the power of 2.

const squaredNums =[];

for (let i=0;i<numbers.length; i++) {
    squaredNums.push(numbers[i] ** 2)
}
console.log(squaredNums);


// MAP - this method allows us to 'map' an entire array into another new one, without having to manually create the whole process entirely.

    //  numbers.map(/*callback function*/ )        // a callback function is a function passed into anotehr function as an argument, which is then invoked to complete some kind of routine or action. the callback function in map specifies what we want to do with each of the elements in our array. 

    function addOne(num) {
        return num + 1;
    }
     const incrementedWithMapArray = numbers.map(addOne);
     console.log(incrementedWithMapArray, "this is the result of map method called with addone function");


     // SIMILAR EXAMPLE WITH SQUARED NUMS
    function squaredNum(num) {
        return num * num;
    }
    const squaredNumsWithMap = numbers.map(squaredNum);
    console.log (squaredNumsWithMap, "this is the result of map method called with squared function"); 


    // ANOTHER EXAMPLE USING AN ARROW FUNCTION
    const doubledNums = numbers.map((number) => number *2);
    console.log(doubledNums, "This is the doubled numbers arrow function that only uses one line");
    

// with arrow functions, we can skip the return keyword and curly brackets if we have one line of code:
const decByOne = (num) => num - 1;
console.log(decByOne(10), "this is a second example of using an arrow function decbyone");
//is the same as this, if you didnt need to write return. This is because the return is assumed by the arrow function in 'num -1':
const decByOneFull = (num1) => {
    console.log(num1);
    return num1 - 1;
}



//RETURN A STRING THAT SAYS THE ARRAY ELEMENT IS "..." FOR EACH OF THE ELEMENTS
// 'element' represnets one of the elements in an array, and can be called whatever is suitable.
    const stringArr = numbers.map((element) => ` The array element is ${element}`);
    console.log(stringArr, "This arrow function works.");


// PARAMETERS OF A MAP METHOD
const strings = ["hello", "hi", "nology"];

    const halfNums = strings.map((element, index, arr) => {
        // first param of map is the element of our array, the same as numbers[i] in a for loop.
        console.log("first param is ", element);

        console.log("The second parameter of map ", index);

        console.log("this is the third param of map", arr)
    })

// FILTER - we use this function to filter certian elements of an array that dont meet our specfied conditions, into a new array. Similar to map, it takes a callback function. Needs a predicative function (returns true or false), which we can use below:
    function isEven(n) {
        return n % 2 === 0;
    }
// WITH THIS PREDICATIVE FUNCTION, YOU CAN USE:
    const numsToFilter = [2, 3, 4, 5, 10];
    const filteredNums = numsToFilter.filter(isEven);
    console.log(filteredNums);

// OR YOU CAN JUST SIMPLY USE:
    const oddNums = numsToFilter.filter((number) => number % 2 !== 0);
    console.log(oddNums);

//  FILTERING THE NUMSTOFILTER TO ONLY LEAVE NUMBERS GREATER THAN 4:
    const greaterThan4 = numsToFilter.filter((num) => num > 4);
    console.log(greaterThan4);

    //EXAMPLE -   NEW ARRAY WITH NAMES THAT ARE EXACTLY 5 LETTERS
    const names = ["Tim", "eric", "noam", "josh"];
    const greaterThan3 = names.filter((name) => name.length > 3);
    console.log(greaterThan3);


//FIND - returns a single value - the first value that matches the specified condition
const first5LetterName = names.find((name) => name.length === 4);
console.log(first5LetterName);


// EVERY - sometimes you will need to check if ALL elements of an array meet a specified condition. returns true if yes, false if no.
const isEveryName3OrLonger = names.every((name) => name.length >= 3);
console.log(isEveryName3OrLonger);


//SOME - tells us if at least one element meets a certain condition. returns true if yes, false if no.
const arrayHasAName3LettersLong = names.some((name) => names.length = 3);
console.log(arrayHasAName3LettersLong, "One of the names has 3 letters");

// forEach() - say you want to console.log each element. Note that the followig function wont work as foreach can only be used in so many applications. Be careful how it is used.
const fromForEach = names.forEach((name) => console.log(name));
console.log(fromForEach, "This is what a foreach returns");   
