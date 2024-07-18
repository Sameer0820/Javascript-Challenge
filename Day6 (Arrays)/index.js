//Activity 1

let numArr = [1,2,3,4,5];
console.log(numArr); //Task 1

console.log(numArr[0]);
console.log(numArr[4]); //Task 2

//Activity 2

numArr.push(6)
numArr.push(7)
console.log(numArr); //Task 3

numArr.pop()
console.log(numArr);
numArr.pop()
console.log(numArr); //Task 4

numArr.shift()
console.log(numArr); //Task 5

numArr.unshift(1)
console.log(numArr); //Task 6

//Activity 3

let newArr = numArr.map((num) => num*2)
console.log(newArr); //Task 7

newArr = numArr.filter((num) => {
    if(num%2==0)
        return num
})
console.log(newArr); //Task 8

let sum = numArr.reduce((prev, res) => prev+res)
console.log(sum); //Task 9

//Activity 4

for (let i = 0; i < numArr.length; i++) {
    console.log(numArr[i]);
} //Task 10

numArr.forEach(element => {
    console.log(element);
}); //Task 11

//Activity 5

let dArr = [[1,2,3], [4,5,6],[7,8,9]];
console.log(dArr); //Task 12

console.log(dArr[2][0]);
console.log(dArr[1][1]);
console.log(dArr[0][2]); //Task 13