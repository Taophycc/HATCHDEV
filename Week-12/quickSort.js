//   if (low < high) {
//     const pIndex = partition(arr, low, high);
//     quickSort(arr, low, pIndex - 1);
//     quickSort(arr, pIndex + 1, high);
//   }
//   return arr;
// }
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// function partition(arr: number[], low: number, high: number): number {
//   // let pivot = arr[low];
//   let pivot = arr[low];
//   let i = low;
//   let j = high;
//   while (i < j) {
//     while (arr[i] <= pivot && i <= high - 1) {
//       i++;
//     }
//     while (arr[j] >= pivot && j >= low + 1) {
//       j--;
//     }
//     if (i < j) {
//       const temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
//   const temp = arr[low];
//   arr[low] = arr[j];
//   arr[j] = temp;
//   return j;
function partition(arr, low, high) {
    var _a, _b;
    var pivot = arr[low];
    var i = low;
    var j = high;
    while (i < j) {
        while (arr[i] <= pivot && i <= high - 1) {
            i++;
        }
        while (arr[j] > pivot && j >= low + 1) {
            j--;
        }
        if (i < j) {
            _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1]; // swap
        }
    }
    _b = [arr[j], arr[low]], arr[low] = _b[0], arr[j] = _b[1]; // swap pivot with j
    return j;
}
function qs(arr, low, high) {
    if (low < high) {
        var pIndex = partition(arr, low, high);
        qs(arr, low, pIndex - 1);
        qs(arr, pIndex + 1, high);
    }
}
function quickSort(arr) {
    var copy = __spreadArray([], arr, true); // clone to avoid mutating original
    qs(copy, 0, copy.length - 1);
    return copy;
}
// 🧪 Test it
var arr = [4, 6, 2, 5, 7, 9, 1, 3];
var sorted = quickSort(arr);
