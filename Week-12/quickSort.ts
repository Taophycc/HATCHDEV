function quickSort(arr: number[], low: number, high: number): void {
  if (low >= high) return;

  let l = low;
  let h = high;
  let mid = l + Math.floor((h - l) / 2);
  let pivot = arr[mid];

  while (l <= h) {
    while (arr[l] < pivot) l++;
    while (arr[h] > pivot) h--;

    if (l <= h) {
      [arr[l], arr[h]] = [arr[h], arr[l]];
      l++;
      h--;
    }
  }

  quickSort(arr, low, h);
  quickSort(arr, l, high);
}

let nums = [2, 1, 6, 4, 8, 0, 3, 9, 5, 7];
console.log(nums);
quickSort(nums, 0, nums.length - 1);
console.log(nums);
