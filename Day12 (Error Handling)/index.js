//Activity 1

function throwError() {
  throw new Error("Got an error!");
}

try {
  throwError();
} catch (error) {
  console.log("Error:", error.message);
} //Task 1

function divideTwoNumber(a, b) {
  if (b === 0) throw new Error("Cannot divide by 0");
  return a / b;
}

try {
  let div = divideTwoNumber(5, 0);
  console.log(div);
} catch (error) {
  console.log(error.message);
} //Task 2

//Activity 2

try {
  console.log("Running try block");
  throw new Error("An error occured");
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Execution complete");
} //Task 3

//Activity 3

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "Custom Error";
  }
}

function throwCustomError() {
  throw new CustomError("This is a custom error");
}

try {
  throwCustomError();
} catch (error) {
  console.log(error.message);
  console.log(error.name);
} //Task 4

function validateUserInput(input) {
  if (!input || input.trim() === "")
    throw new CustomError("Input cannot be empty!");
  console.log("Input is valid");
}

try {
  validateUserInput();
} catch (error) {
  console.log("Got Error", error.message);
  console.log(error.name);
} //Task 5

//Activity 4

new Promise((resolve, reject) => {
  let randomNumber = Math.floor(Math.random() * 2);
  if (randomNumber === 0) resolve("Promise resolved");
  else reject(new Error("Promise rejected"));
})
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error.message);
  }); //Task 6

const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber === 0) resolve("Promise resolved");
    else reject(new Error("Promise rejected"));
  }, 1000);
});

async function randomPromise() {
  try {
    const response = await newPromise;
    console.log(response);
  } catch (error) {
    console.log("ERROR :", error.message);
  }
}

randomPromise(); //Task 7

//Activity 5

fetch("https://invalidurl.com")
  .then((response) => {
    console.log(response.json());
  })
  .catch((error) => console.log("ERROR during fetch :", error.message)); //Task 8

async function fetchApi() {
  try {
    let res = await fetch("https://invalidurl.com");
    console.log(res.json());
  } catch (error) {
    console.log("ERROR during second fetch :", error.message);
  }
} //Task 9
