//Activity 1
function oddEven(num) {
  if (num % 2) console.log("Odd");
  else console.log("even");
}

oddEven(8);
oddEven(9); //Task 1

function square(num) {
  return num * num;
}

num2 = square(9);
console.log(num2); //Task 2

//Activity 2

const maximumNumber = function (num1, num2) {
  if (num1 > num2) return num1;
  else return num2;
};

console.log(maximumNumber(2, 3));
console.log(maximumNumber(9, 5)); //Task 3

const addTwoStrings = function (str1, str2) {
  return str1 + str2;
};

console.log(addTwoStrings("Sameer ", "Raj")); //Task 4

//Activity 3

const sumOfTwoNumbers = (num1, num2) => num1 + num2;

console.log(sumOfTwoNumbers(9, 10)); //Task 5

const checkString = (str, char) => {
  if (str.includes(char)) {
    return true;
  } else {
    return false;
  }
};

console.log(checkString("Are you ready?", "P"));
console.log(checkString("Are you ready?", "?")); //Task 6

//Activity 4

function product(num1, num2 = 1) {
  return num1 * num2;
}

console.log(product(9, 8));
console.log(product(6)); //Task 7

function greeting(name, age = 18) {
  console.log(`Hi ${name}, your age is ${age}`);
}

greeting("sameer", 22); //Task 8

//Activity 5

const hoFunction = (fn, num) => {
  for (let i = 0; i < num; i++) fn();
};

hoFunction(() => {
  console.log("Hi there!");
}, 5); //Task 9

const calculateSquareOfNumber = (num) => {
  return num * num;
};

const calculatePower = (num, pow) => {
  return Math.pow(num, pow);
};

const higherOrderFunction = (calculateSquareOfNumber, calculatePower, number) => {
  const result = calculateSquareOfNumber(number);
  console.log(`Power of ${result} is ${calculatePower(result, 2)}`);
};

higherOrderFunction(calculateSquareOfNumber, calculatePower, 5); //Task 10