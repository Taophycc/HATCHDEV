// Bubble sort
function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var isSwapped = false;
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;
            }
        }
        if (!isSwapped) {
            break;
        }
    }
    return arr;
}
// console.log(bubbleSort([2, 3, 5, 7, 1]));
// Max and min
function minAndMaxIdx(arr) {
    var minIdx = 0;
    var maxIdx = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[maxIdx]) {
            maxIdx = i;
            continue;
        }
        if (arr[i] > arr[minIdx]) {
            minIdx = i;
        }
    }
    console.log(arr[minIdx]);
    console.log(arr[maxIdx]);
    return Math.abs(arr[minIdx] - arr[maxIdx]);
}
// console.log(minAndMaxIdx([2, 3, 5, 7, 1]));
// Selection sort
function SelectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var minIdx = i;
        for (var j = i; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
    return arr;
}
// console.log(SelectionSort([2, 3, 5, 7, 1]));
// Insertion sort
function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var current = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}
// console.log(insertionSort([2, 3, 5, 7, 1]));
function InsertionSort(arr) {
    // create a for loop
    for (var i = 1; i < arr.length; i++) {
        var current = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        if (arr[j + 1] !== current)
            arr[j + 1] = current;
    }
    return arr;
}
// console.log(insertionSort([2, 3, 5, 7, 1]));
// Merge Sort
function merge(arr, left, mid, right) {
    var n1 = mid - left + 1;
    var n2 = right - mid;
    var l = new Array(n1);
    var r = new Array(n2);
    for (var i_1 = 0; i_1 < n1; i_1++) {
        l[i_1] = arr[left + i_1];
    }
    for (var j_1 = 0; i < n2; j_1++) {
        r[j_1] = arr[mid + 1 + j_1];
    }
    var i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (l[i] <= r[j]) {
            arr[k++] = l[i++];
        }
        else {
            arr[k++] = r[j++];
        }
    }
    while (i < n1) {
        arr[k++] = l[i++];
    }
    while (j < n2) {
        arr[k++] = r[j++];
    }
}
function mergeSort(arr, left, right) {
    if (left < right) {
        var mid = Math.floor((left + right) / 2);
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}
var numbers = [38, 27, 43, 3, 9, 82, 10];
mergeSort(numbers, 0, numbers.length - 1);
console.log(numbers);
