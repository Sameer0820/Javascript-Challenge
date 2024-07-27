//Activity 1

function outer(outerVariable) {
    return function inner() {
        return outerVariable;
    };
}

const myFunc = outer(20);
console.log(myFunc()); //Task 1

function createCounter() {
    let count = 0;

    return {
        increment() {
            count += 1;
        },
        get value() {
            return count;
        },
    };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.value); // Task 2

//Activity 2

function generateIDs() {
    let id = Math.floor(Math.random() * 100) + 1;
    return {
        getID() {
            id++;
            return id;
        },
    };
}

const id = generateIDs();
console.log(id.getID());
console.log(id.getID());
console.log(id.getID()); //Task 3

function userName(username) {
    return function () {
        console.log(`Hi ${username}, welcome to js challenge.`);
    };
}

let myName = userName("Sameer Raj");
myName(); //Task 4

//Activity 3

function arrayFunc() {
    let array = [];
    for (let i = 0; i < 5; i++) {
        array.push(function () {
            return `My index is ${i}`;
        });
    }
    return array;
}

let arrfunc = arrayFunc();
arrfunc.forEach((func) => console.log(func())); //Task 5

//Activity 4

function carCollection() {
    let cars = [];

    return {
        addCar(newCar) {
            cars.push(newCar);
        },

        removeCar(oldCar) {
            const index = cars.indexOf(oldCar);
            if (index != -1) {
                cars.splice(index, 1);
            }
            console.log(`${oldCar} removed.`);
        },

        listCars() {
            return [...cars];
        },
    };
}

let myCarCollection = carCollection();
myCarCollection.addCar("911");
myCarCollection.addCar("Chiron");
myCarCollection.addCar("Tourbillon");
myCarCollection.addCar("Panamera");
myCarCollection.addCar("Nissan GTR");
myCarCollection.addCar("Supra");
myCarCollection.removeCar("911");
console.log(myCarCollection.listCars()); //Task 6

//Activity 5

function memoize(originalFunction) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache[key] === undefined) {
            cache[key] = originalFunction(...args);
        }

        return cache[key];
    };
}

function expensiveCalculation(n) {
    console.log(`Calculating for ${n}`);
    return n * 2;
}

const memoizedCalculation = memoize(expensiveCalculation);

console.log(memoizedCalculation(5));
console.log(memoizedCalculation(5));
console.log(memoizedCalculation(10));
console.log(memoizedCalculation(10)); //Task 7

function factorialMemoize(fn) {
    const cache = {};

    return function (x) {
        if (cache[x] !== undefined) {
            console.log("Returning from cache...");
            return cache[x];
        }
        console.log("Calculating result...");
        const res = fn(x);
        cache[x] = res;
        return res;
    };
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const memoizedFactorial = factorialMemoize(factorial);

console.log(memoizedFactorial(5));
console.log(memoizedFactorial(5));
console.log(memoizedFactorial(6));
console.log(memoizedFactorial(6)); //Task 8
