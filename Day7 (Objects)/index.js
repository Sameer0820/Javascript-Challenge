//Activity 1

let ObjBook = {
  title: "Merchant of Venice",
  author: "William Shakespeare",
  year: 1596,
};

console.log(ObjBook); //Task 1

console.log(ObjBook.title);
console.log(ObjBook.author); //Task 2

//Activity 2

ObjBook.info = () => {
  return `The book's title is ${ObjBook.title} and it's author is ${ObjBook.author}`;
};

console.log(ObjBook.info()); //Task 3

ObjBook.updateYear = (year) => {
  ObjBook.year = year;
};

ObjBook.updateYear(1598);
console.log(ObjBook.year); //Task 4

//Activity 3

let library = {
  name: "Science Books",
  books: [
    {
      title: "Silent Spring",
      author: "Rachel Carson",
      year: 1962,
    },
    {
      title: "Fire Weather: A True Story From a Hotter World",
      author: "John Vaillant",
      year: 2023,
    }
  ],
};
console.log(library); //Task5

console.log(library.name);
library.books.forEach(e => {
    console.log(e.title);
}); //Task 6

//Activity 4

ObjBook.info2 = function(){
    return `The book's title is ${this.title} and it was released in ${this.year}`;
} //Arrow functions do not have their own this context

console.log(ObjBook.info2()); //Task 7

//Activity 5

for (const key in ObjBook) {
    console.log(key, " ", ObjBook[key]);
} //Task 8

console.log(Object.keys(ObjBook));
console.log(Object.values(ObjBook)); //Task 9