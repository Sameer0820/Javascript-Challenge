//Activity 1

for (let i = 1; i < 11; i++) {
  console.log(i);
} //Task 1

for (let i = 1; i <= 10; i++) {
  console.log(5 * i);
} //Task 2

//Activity 2

let sum = 0;
let num = 1;
while (num < 11) {
  sum += num;
  num++;
}
console.log(sum); //Task 3

num = 10;
while (num > 0) {
  console.log(num);
  num--;
} //Task 4

//Activity 3

num = 1;
do {
  console.log(num);
  num++;
} while (num < 6); //Task 5

num = 6;
let fac = 1;
do {
  fac = fac * num;
  num--;
} while (num > 1);
console.log(fac); //Task 6

//Activity 4

for (let i = 1; i <= 5; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }
  console.log(pattern);
} //Task 7

//Activity 5

for (let i = 1; i < 11; i++) {
  if (i === 5) continue;
  console.log(i);
} //Task 8

for (let i = 1; i < 11; i++) {
  if (i === 7) break;
  console.log(i);
} //Task 9
