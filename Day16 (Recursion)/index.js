//Activity 1

function factorial(num) {
    if (num <= 1) return 1;
    return num * factorial(num - 1);
}

console.log("Factorial of 5 is", factorial(5));
console.log("Factorial of 7 is", factorial(7)); //Task 1

function fibonacci(num) {
    if (num === 1) return 1;
    if (num === 2) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log("Third fibonacci number is", fibonacci(3));
console.log("Fourth fibonacci number is", fibonacci(4));
console.log("Fifth fibonacci number is", fibonacci(5)); //Task 2

//Activity 2

function sumArray(arr, i) {
    if (i == arr.length) return 0;
    return arr[i] + sumArray(arr, i + 1);
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
console.log(sumArray(arr1, 0));
console.log(sumArray(arr2, 0)); //Task 3

function maxArray(arr) {
    if (arr.length === 1) return arr[0];

    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);

    const leftMax = maxArray(leftHalf);
    const rightMax = maxArray(rightHalf);

    return Math.max(leftMax, rightMax);
}

let myArray = [4, 1, 7, 3, 9, 0];
console.log("Maximum number of the array:", maxArray(myArray)); //Task 4

//Activity 3

function reverseString(str) {
    if (str === "") return "";
    return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("hello"));
console.log(reverseString("javascript")); //Task 5

function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("sameer")); //Task 6

//Activity 4

function binarySearch(arr, i, n, num) {
    if (i > n) return -1;
    let mid = i + Math.floor((n - i) / 2);
    if (arr[mid] === num) return mid;
    else if (arr[mid] > num) return binarySearch(arr, i, mid - 1, num);
    else return binarySearch(arr, mid + 1, n, num);
}

let arrSearch = [1, 3, 5, 7, 9, 11, 13];
console.log(binarySearch(arrSearch, 0, arrSearch.length - 1, 7));
console.log(binarySearch(arrSearch, 0, arrSearch.length - 1, 11));
console.log(binarySearch(arrSearch, 0, arrSearch.length - 1, 1));
console.log(binarySearch(arrSearch, 0, arrSearch.length - 1, 2)); //Task 7

function countOccurrences(arr, i, num) {
    if (i === arr.length) return 0;
    let restCount = countOccurrences(arr, i + 1, num);
    return arr[i] === num ? restCount + 1 : restCount;
}

let countArray = [1, 1, 5, 4, 5, 1, 3, 3, 4, 3, 1]; // 4 1s, 2 5s, 2 4s, 3 3s
console.log("Count of 1:", countOccurrences(countArray, 0, 1));
console.log("Count of 5:", countOccurrences(countArray, 0, 5));
console.log("Count of 3:", countOccurrences(countArray, 0, 3)); //Task 8
