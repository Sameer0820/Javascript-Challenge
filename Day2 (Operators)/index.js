// Activity 1

let num1 = 2;
let num2 = 3;

console.log(num1 + num2); //Task 1
console.log(num2 - num1); //Task 2
console.log(num1 * num2); //Task 3
console.log(num2 / num1); //Task 4
console.log(num2 % num1); //Task 5

//Activity 2

num1 += 2;
console.log(num1); //Task 6

num1 -= 2;
console.log(num1); //Task 7

//Activity 3

let num3 = 33,
  num4 = 34;
console.log(num3 > num4);
console.log(num3 < num4); //Task 8

console.log(num3 >= num4);
console.log(num3 <= num4); //Task 9

let num5 = 5,
  num6 = "5";
console.log(num5 == num6);
console.log(num5 === num6); //Task 10

//Activity 4
console.log(6 > 5 && 9 > 10); //Task 11
console.log(6 > 5 || 9 > 10); //Task 12
console.log(!(5 > 6)); //Task13

//Activity 5
console.log(6 > 5 ? false : true); //Task14

// Feature Request:

// 1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and log the result.

function arithmeticOperations(a, b) {
  console.log(a + b);
  console.log(a * b);
  a > b ? console.log(a - b) : console.log(b - a);
  a > b ? console.log(a / b) : console.log(b / a);
  let remainder = 0;
  a > b ? (remainder = a % b) : (remainder = b % a);
  console.log(remainder);
}

arithmeticOperations(5, 7);

// 2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.

function logicalAndComparisonOperators(a, b) {
  if (a > b) {
    console.log(a);
  } else if (a < b) {
    console.log(b);
  } else if (a == b || a === b) {
    console.log(a, b);
  }
}
logicalAndComparisonOperators(5, 7);

// 3. Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.

function ternaryOperatorScript(num) {
  Math.sign(num) === -1
    ? console.log("negative number")
    : console.log("positive number");
}
ternaryOperatorScript(-10);
ternaryOperatorScript(10);
