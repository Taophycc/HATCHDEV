function binarySearch(arr, target) {
    var l = 0;
    var h = arr.length - 1;
    while (l <= h) {
        var mid = Math.floor((l + h) / 2);
        if (target == arr[mid]) {
            return mid;
        }
        else if (target > arr[mid]) {
            l = mid + 1;
        }
        else {
            h = mid - 1;
        }
    }
    return -1;
}
console.log(binarySearch([-5, -4, -2, 5, 7, 10, 14, 20, 40], 40));
