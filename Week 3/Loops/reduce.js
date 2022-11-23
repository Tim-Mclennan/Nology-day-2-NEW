// REDUCE OPERATOR

// takes in a function with at least two parameters. It is used to iterate through an array, as total is the first element of the array, and current is the next element in the array.
// in the example below, it will add all the elements together through iteration. It will start off with total, add that to the current, and will loop back until the iteration is complete:
const numbers =[1, 2, 3, 4, 5, 6];

    const sum = numbers.reduce((total, current) => {
        console.log({ total, current});

        return total + current;
    });
    console.log(sum);


// PRIOR REDUCE METHOD ISTHE SAME THING AS WRITING THIS FOR LOOP:
    let sumOfNum = 0;

    for (let i=0;i<numbers.length; i++) {
        sumOfNum += numbers[i];
    }
    console.log(sumOfNum);

// EXAMPLE WITH turning an ARRAY OF STRINGS INTO A SINGLE STRING:
    const letters = ['n', 'o', 'l', 'o', 'g', 'y'];
    const word = letters.reduce((acc, current) => {
        console.log({acc, current});
        return acc + current;
    })
    console.log(word, ", this should say nology!");

//EXAMPLE - OPTIONAL SECOND ARGUMENT - INITIAL VALUE (The 5 at the end becomes the first value in the array.)
    const numbersTwo = [2, 4, 6];
    const numTwoSum = numbersTwo.reduce((acc, current) => {
        console.log({acc, current});
        return acc * current;
    }, 5);
    console.log(numTwoSum);

// EXAMPLE WITH MULTIPLICATION ARROW FUNCTION:

const toMultiply = [5, 6, 9];
let multipliedNums = toMultiply.reduce((acc, current) => acc * current);
console.log( multipliedNums);



// EXAMPLE USING MULTIPLE METHODS to get the initials of each name: 
    const someNames = "Tim Andrew McLennan";
    const initials = someNames.split(" ").reduce((acc, curr) => {
        console.log({acc, curr});
        return acc + curr[0];
    }, "My Initials are ");
    console.log(initials);



// AN EXAMPLE USING AN ARRAY OF NUMBERS - WANT A NEW ARRAY WITH DOUBLED NUMBERS:
    const numsToDouble = [2, 3, 4, 5];
    let doubledNums = numsToDouble.reduce((acc, curr) => {
        console.log({acc, curr});
        acc.push(curr * 2); //pushing the curr value (2 *2) into the acc ([empty array]).

        return acc; // now returning the acc, on first iteration it is [4].
                    // on second iteration, you are then pushing 3*2 to the acc - which is now [4, 6] and so forth.

    }, [])
    console.log(doubledNums);


// INCREASING EXAMPLES
const numToIncrease = [1,2,3,4,5];

const increasedNums = numToIncrease.reduce((acc, curr) => {
    console.log({acc, curr});
    acc.push(curr + 1);
    return acc;
}, []);
console.log(increasedNums);

// first iteration: accumulator is an empty array, current is the first array element -> 1.
//we are adding 1 to 1, pushing it to acc -> empty array, push 2 -> [2].

// seocnd iteration: accumulator is [2], current is the second element of the array -> 2.
// we are adding 1 to 2 = 3. then pushing 3 to the accumulator -> [2,3].

//third iteration: accumulator is [2,3]. current is the third element of the array -> 3.
// we are adding 1+3 -> 4 which is then pushed to the array -> [2,3,4].

// etc.




// USING REDUCE INSTEAD OF FILTER AND MAP COMBINED:
// Lets say you need an array of only even numbers, and you want them doubled.

    const numToFilterAndMap = [2, 3, 4, 5, 6];
    console.log(numToFilterAndMap);
    const evenNums = numToFilterAndMap.filter((num) => num % 2 === 0);
    console.log(evenNums);
    const doubledNums1 = evenNums.map((num) => num * 2);
    console.log(doubledNums1);

// DOING THE SAME THING WITH REDUCE:
    const final = numToFilterAndMap.reduce((acc, curr) => {
        if (curr % 2 ===0) {
            acc.push(curr * 2);
        }
        return acc;
    }, []);
    console.log(final, "This is using the reduce method.");