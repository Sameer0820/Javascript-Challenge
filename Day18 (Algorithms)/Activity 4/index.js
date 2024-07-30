function rotateArray(arr, k) {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
}

let arr = [4, 2, 9, 7, 21, 5, 3, 75];
console.log(rotateArray(arr, 3)); //Task 8

function mergeSortedArrays(arr1, arr2) {
    let newArray = [];
    let i = 0,
        j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            newArray.push(arr1[i]);
            i++;
        } else {
            newArray.push(arr2[j]);
            j++;
        }
    }
    return newArray.concat(arr1.slice(i), arr2.slice(j));
}

let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8, 10];
console.log(mergeSortedArrays(arr1, arr2)); //Task 9
