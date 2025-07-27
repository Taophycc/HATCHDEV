function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var mid = Math.floor(arr.length / 2);
    var left = mergeSort(arr.slice(0, mid));
    var right = mergeSort(arr.slice(mid, arr.length));
    return merge(left, right);
}
function merge(left, right) {
    var result = [];
    var i = 0;
    var j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        }
        else {
            result.push(right[j]);
            j++;
        }
    }
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }
    return result;
}
console.log(mergeSort([6, 2, 8, 5, 3, 7, 1, 4]));
console.log(mergeSort([0, -9, -4, -5, -1, -8]));
