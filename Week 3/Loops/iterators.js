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