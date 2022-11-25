// OBJECTS
// objects are a crucial stepping stone. Objects solve problems.
// it creates a format for data that is easy to use, for example when it needs to be called towards the back end.

myData = {
    movie: "the menu",
    rating: "4.5/10",
    comment: "not good",
}
// the benefits of objects is that you can access the properties directly.  

console.log(myData.movie);
console.log("Review comment is:", myData.comment);
// the order of the properties doesnt matter, you can add as many properties as you want and it wont ruin other properties. 

// sohuld i use an array or an object?
// if all of the data you want to store is the same data type, such as a list of movies currently out, use an array. If you have alot of different types of data about a single conecpt, use an object. 
// In other words, an object is an encapsulation of an object. all of its data correlates to a single thing. 

// HOW DO YOU CREATE THEM? you will need  to use curly braces . 
    const cat = {color: "black"};

    //you can also add properties after it is created: 
    cat.personality = "shy";

    //how to access that property:
    console.log("the cat is", cat.personality);

    // properties are composed of a key and a value:
    cat.eyeColour = "brown";
    cat.age = 2;
    console.log(cat);
    // eyeColour is the Key, and "brown" is the value. 
    
// a property is a variable that belongs to an object, the key is the name of tht variable, and the value is the value which that variable contains.




student = {
    name: "Tim",
    age: "25",
    isHungry: "true",
} 

function studentDetails(student) {
    console.log("Hello, I am ", student.name, ", I'm ", student.age, " years old, and right now I am feeling hungry/I'm not that hungry");
}
