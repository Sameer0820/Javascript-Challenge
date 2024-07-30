function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            console.log("Target found at index", i);
            return;
        }
    }
    console.log("Target not found");
    return;
}

let arr = [4, 1, 5, 2, 6, 3];
linearSearch(arr, 3); //Task 4

function binarySearch(arr, target) {
    let l = 0, r = arr.length - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return -1;
}

arr = [1, 4, 9, 12, 23, 45, 59];
console.log(binarySearch(arr, 23)); //Task 5