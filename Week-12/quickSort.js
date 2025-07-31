// function partition(arr: number[], low: number, high: number): number {
//   const pivot = arr[low];
//   let i = low;
//   let j = high;
//   while (i <= j) {
//     while (arr[i] <= pivot && i <= high - 1) {
//       i++;
//     }
//     while (arr[j] > pivot && j >= low + 1) {
//       j--;
//     }
//     if (i < j) {
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//   }
//   [arr[low], arr[j]] = [arr[j], arr[low]];
//   return j;
// }
// function qs(arr: number[], low: number, high: number): void {
//   if (low < high) {
//     const pIndex = partition(arr, low, high);
//     qs(arr, low, pIndex - 1);
//     qs(arr, pIndex + 1, high);
//   }
// }
// function quickSort(arr: number[]): number[] {
//   const copy = [...arr];
//   qs(copy, 0, copy.length - 1);
//   return copy;
// }
// const arr = [4, 6, 2, 5, 7, 9, 1, 3];
// const sorted = quickSort(arr);
// console.log(sorted);
function quickSort(arr, low, high) {
    var _a;
    if (low >= high)
        return;
    var l = low;
    var h = high;
    var mid = l + Math.floor((h - l) / 2);
    var pivot = arr[mid];
    while (l <= h) {
        while (arr[l] < pivot)
            l++;
        while (arr[h] > pivot)
            h--;
        if (l <= h) {
            _a = [arr[h], arr[l]], arr[l] = _a[0], arr[h] = _a[1];
            l++;
            h--;
        }
    }
    quickSort(arr, low, h);
    quickSort(arr, l, high);
}
var nums = [2, 1, 6, 4, 8, 0, 3, 9, 5, 7];
console.log(nums);
quickSort(nums, 0, nums.length - 1);
console.log(nums);
