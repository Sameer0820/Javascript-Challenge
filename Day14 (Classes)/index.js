//Activity 1

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hi ${this.name}, your age is ${this.age}`;
    } //Task 1

    updateAge(newAge) {
        this.age = newAge;
        return `New age after update is ${this.age}`;
    } //Task 2

    static genericGreeting() {
        return `Welcome to class Person`;
    } //Task 5
}

const chai = new Person("Chai", 22);
console.log(chai.greet()); //Task 1

console.log(chai.updateAge(21)); //Task 2

//Activity 2

class Student extends Person {
    static studentCount = 0;
    constructor(name, age, id) {
        super(name, age);
        this.studentId = id;
        Student.studentCount++;
    }

    getId() {
        return `Student with name ${this.name} and age ${this.age} has ID ${this.studentId}`;
    } //Task 3

    greet() {
        return `Hi ${this.name}, your age is ${this.age} and id is ${this.studentId}`;
    } //Task 4

    static countStudent() {
        return `Total students registered is ${this.studentCount}`;
    }
}

const student = new Student("Sameer", 21, 650095);
console.log(student.getId()); //Task 3

console.log(student.greet()); //Task 4

//Activity 3

console.log(Person.genericGreeting()); //Task 5

const student2 = new Student("Bob", 11, 678493);
const student3 = new Student("Aditi", 20, 678343);
console.log(Student.countStudent()); //Task 6

//Activity 4

class People {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    get fullname() {
        return `Your full name is ${this.firstname} ${this.lastname}`;
    } //Task 7

    set fullname(name) {
        const [firstname, lastname] = name.split(" ");
        this.firstname = firstname;
        this.lastname = lastname;
    } //Task 8
}

const newPerson = new People("Sameer", "Raj");
console.log(newPerson.fullname); //Task 7

newPerson.fullname = "Aditi Dubey";
console.log(newPerson.fullname); //Task 8

//Activity 5

class BankAccount {
    #balance; // Private field for balance

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(
                `Deposited $${amount}. Current Balance: $${this.#balance}`
            );
        } else {
            console.log("Invalid deposit amount.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && this.#balance >= amount) {
            this.#balance -= amount;
            console.log(
                `Withdrew $${amount}. Current Balance: $${this.#balance}`
            );
        } else {
            console.log("Invalid withdrawal amount or insufficient funds.");
        }
    }

    getBalance() {
        return `$Current balance : $${this.#balance}`;
    }
} //Task 9

const myAccount = new BankAccount(1000);
console.log(myAccount.getBalance())
myAccount.deposit(500);
myAccount.withdraw(200);
myAccount.deposit(1000); //Task 10