// The scope of a function determines where we can access variables from.

// Different scopes include global, block and function scope.



//GLOBAL variable, which means it is accessible from anywhere
const myName = "Martyna";

if (myName > 10) {
    console.log("The name is more than 10 characters long");
} else {
    console.log("The name is less than or 10 characters long")
}

// LOCAL VARIABLE (BLOCK & FUNCTION)

if (true) {
    let thing = "variable from if block";
}

function printThing() {
    // Any variable you create inside a function exists only in the context of that function
    let thing = "variable from my function"
    console.log(thing);
}

// This will not print on the console, because the 'thing' variable exists only in the scope of the if block. 
// console.log(thing);

const circleArea = (radius) => {
    const area = Math.PT * radius;
}
// This will also not work, as arrow functions use local variables.
// console.log(radius);


const myGlobal = 'Global String';

const scope1 = (scopeOneArg) => {
    const myNumber = 123;

    const scope2 = (scopeTwoArg) => {
        const myValue = 345; 

        const scope3 = (scopeThreeArg) => {
            const anotherValue = 678;

            // the another value variable wont be accessible from the scopes above.
            console.log(scopeThreeArg)
            console.log(scopeTwoArg)
            console.log(scopeOneArg);
        };

        scope3 ("scope three arg");
    }

    scope2("scope 2")
};

scope1("scope 1")