import lodash from "lodash";

let array = [1, 2, 3, 4, 5, 6];
const sum = lodash.sum(array);
console.log(sum);

const evenNumbers = lodash.filter(array, (num) => num % 2 === 0);
console.log(evenNumbers);