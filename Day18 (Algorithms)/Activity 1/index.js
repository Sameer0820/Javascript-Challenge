function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let arr = [8, 10, 2, 5, 1, 21];
console.log(bubbleSort(arr)); //Task 1

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let idx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[idx]) idx = j;
        }
        let temp = arr[idx];
        arr[idx] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
arr = [92, 21, 45, 63, 2, 53];
console.log(selectionSort(arr)); //Task 2

function quickSortArray(arr, l, r) {
    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    function partition(arr, l, r) {
        let pivot = arr[r];
        let i = l - 1;

        for (let j = l; j < r; j++) {
            if (arr[j] < pivot) {
                i++;
                swap(arr, i, j);
            }
        }
        swap(arr, i + 1, r);
        return i + 1;
    }

    function quickSort(arr, l, r) {
        if (l < r) {
            let pi = partition(arr, l, r);
            quickSort(arr, l, pi - 1);
            quickSort(arr, pi + 1, r);
        }
    }

    quickSort(arr, l, r);
}

arr = [14, 62, 95, 25, 71, 6];
quickSortArray(arr, 0, arr.length - 1);
console.log(arr); //Task 3