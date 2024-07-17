//Activity 1

let num = 0;
if (num > 0) console.log("Number is positive");
else if (num < 0) console.log("Number is negative");
else console.log("Number is 0"); //Task 1

let age = 20;
if (age >= 18) console.log("Elegible to vote");
else console.log("Not elegibel to vote"); //Task 2

let num1 = 6,
  num2 = 9,
  num3 = 10;

//Activity 2

if (num1 > num2) {
  if (num1 > num3) console.log(`${num1} is largest number`);
  else {
    console.log(`${num3} is largest number`);
  }
} else {
  if (num2 > num3) console.log(`${num2} is largest number`);
  else {
    console.log(`${num3} is largest number`);
  }
} //Task 3

//Activity 3

let day = 4;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("No such day exists");
    break;
} //Task 4

let score = 78;
let grade;

switch (true) {
  case score > 90:
    console.log("A");
    break;
  case score > 80:
    console.log("B");
    break;
  case score > 70:
    console.log("C");
    break;
  case score > 60:
    console.log("D");
    break;
  default:
    console.log("F");
    break;
} //Task 5

//Activity 4

let oddEven = 9;
oddEven % 2 == 0 ? console.log("Even") : console.log("Odd"); //Task 6

//Activity 5

let year = 1900;
if (year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0)) {
  console.log("The year is a leap year");
} else {
  console.log("The year is not a leap year");
} //Task 7
