//Activity 1

let pname = "Sameer";
let page = 22;

console.log(`Person name is ${pname} and his age is ${page}`); //Task 1

let myString = `My name is ${pname}
and my age is ${page}
and I am currently doing javascript.`;

console.log(myString); //Task 2

//Activity 2

let numArr = [1, 2, 3, 4, 5, 6, 7];
const [first, second] = numArr;
console.log(first);
console.log(second); //Task 3

let ObjBook = {
  title: "Merchant of Venice",
  author: "William Shakespeare",
  year: 1596,
};

const { title, author } = ObjBook;
console.log(title, " ", author); //Task 4

//Activity 3

let newArr = [0, ...numArr, 8, 9];
console.log(newArr); //Task 5

function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); //Task 6

//Activity 4

function product(a, b=2){
    return a*b;
}
console.log(product(5,5));
console.log(product(5)); //Task 7

//Activity 5

const bookTitle = "To Kill a Mockingbird";
const bookAuthor = "Harper Lee";
const publicationYear = 1960;

function getDetails() {
    return `${this.bookTitle} by ${this.bookAuthor}, published in ${this.publicationYear}`;
}

const book = {
    bookTitle,
    bookAuthor,
    publicationYear,
    getDetails
};


console.log(book);
console.log(book.getDetails()); //Task 8

const propName1 = "title";
const propName2 = "author";
const propName3 = "year";

const book3 = {
    [propName1]: "To Kill a Mockingbird",
    [propName2]: "Harper Lee",
    [propName3]: 1960
};

console.log(book3); //Task 9