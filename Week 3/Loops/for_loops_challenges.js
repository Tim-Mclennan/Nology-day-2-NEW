// Challenge: Capitalizing Odd Positioned Letters
// MVP
// Create a variable with a string of your choice
// Loop through the letters in this string and build a new string
// If the current index is odd, capitalize the letter before adding it to the new string

    let letters = "understand";
    let string = [];

    for (let i=0; i<letters.length;++i) {
        if (i % 2 === 0) {
            string.push(letters[i]);
        } else {
            string.push(letters[i].toUpperCase());
        }
        // console.log(string);
    }

    let stringNew = string.join("");
    console.log(stringNew);


//Alternative method using a string instead of an array variable. Major difference is using the += operator instead of push():
    let word = "totally";
    let newString = "";

    for (let i=0; i<letters.length;++i) {
        if (i % 2 === 0) {
            newString += word[i];
        } else {
            newString += word[i].toUpperCase();
        }
    }
    console.log(newString);

// Challenge: Removing Vowels
// MVP
// Create a variable with a string of your choice
// Loop through the letters in this and build a new string
// The new strings should be the same as the input with the vowels missing
// E.g: calum => clm, rachel => rchl, martyna => mrtyn

        // let vowels = "computer";
        // let noVowels = "";

        // for (i=0; i< vowels.length;++i) {
        //     if ()
        // }

let vowels = ["a", "e", "i", "o", "u"];

function removeVowels(name) {
  let rslOfRemoveMethod = "";

  for (let i = 0; i < name.length; ++i) {
    if (!vowels.includes(name[i])) {
      rslOfRemoveMethod += name[i];
    }
  }
  return rslOfRemoveMethod;
}

console.log(removeVowels("computer"));

