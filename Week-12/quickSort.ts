function partition(arr: number[], low: number, high: number): number {
  const pivot = arr[low];
  let i = low;
  let j = high;

  while (i < j) {
    while (arr[i] <= pivot && i <= high - 1) {
      i++;
    }

    while (arr[j] > pivot && j >= low + 1) {
      j--;
    }

    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[low], arr[j]] = [arr[j], arr[low]];
  return j;
}

function qs(arr: number[], low: number, high: number): void {
  if (low < high) {
    const pIndex = partition(arr, low, high);
    qs(arr, low, pIndex - 1);
    qs(arr, pIndex + 1, high);
  }
}

function quickSort(arr: number[]): number[] {
  const copy = [...arr];
  qs(copy, 0, copy.length - 1);
  return copy;
}

const arr = [4, 6, 2, 5, 7, 9, 1, 3];
const sorted = quickSort(arr);
console.log(sorted);
