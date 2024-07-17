// Activity 1

var sameer = 10;
console.log(sameer);

let name = "sameer";
console.log(name);

//Activity 2

const isLoggedIn = false;
console.log(isLoggedIn);

//Activity 3

let number = 22;
let string = "Sameer"
let bool = false
let myObj = {name: "Sameer", age: 22}
let myArr = [11, 22, 33, 44]

console.log(typeof number);
console.log(typeof string);
console.log(typeof bool);
console.log(typeof myObj);
console.log(typeof myArr);

//Activity 4

let var1 = 22
console.log(var1);

var1 = 44
console.log(var1);

//Activity 5

const var2 = 22
console.log(var2);

try{
    var2 = 44
}catch(error){
    console.log(error);
}

//Feature Request
// 1. Variable Types Console Log
let newNumber = 889;
let newString = "You can't see me";
let newBoolean = false;
let newUndefined;
let newNull = null;
let newObject = {
  firstname: "Naruto",
  lastName: "Uzumaki",
  address: "Leaf Village",
};
let newArray = [209, 657, 821, 592, 25];

console.log(newNumber, typeof newNumber);
console.log(newString, typeof newString);
console.log(newBoolean, typeof newBoolean);
console.log(newUndefined, typeof newUndefined);
console.log(newNull, typeof newNull);
console.log(newObject, typeof newObject);
console.log(newArray, typeof newArray);

// Reassignment Demo
let greetings = "Let's start the show";
console.log(greetings);

try {
  greetings = "Are you ready";
  console.log(greetings);
} catch (error) {
  console.log(error);
}

const anotherGreetings = "Chaliye shuru karte hain";
console.log(anotherGreetings);

try {
  anotherGreetings = "Chaliye band karte hain";
  console.log(anotherGreetings);
} catch (error) {
  console.log(error);
}