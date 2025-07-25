// Bubble sort

function bubbleSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    let isSwapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
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
function minAndMaxIdx(arr: number[]): number {
  let minIdx = 0;
  let maxIdx = 0;
  for (let i = 0; i < arr.length; i++) {
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

function SelectionSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
  return arr;
}
// console.log(SelectionSort([2, 3, 5, 7, 1]));

// Insertion sort
function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}
// console.log(insertionSort([2, 3, 5, 7, 1]));

function InsertionSort(arr: number[]): number[] {
  // create a for loop
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    if (arr[j + 1] !== current) arr[j + 1] = current;
  }
  return arr;
}
// console.log(insertionSort([2, 3, 5, 7, 1]));

// Merge Sort

// function merge(arr: number[], left: number, mid: number, right: number) {
//   const n1 = mid - left + 1;
//   const n2 = right - mid;

//   const l: number[] = new Array(n1);
//   const r: number[] = new Array(n2);

//   for (let i = 0; i < n1; i++) {
//     l[i] = arr[left + i];
//   }
//   for (let j = 0; i < n2; j++) {
//     r[j] = arr[mid + 1 + j];
//   }

//   let i = 0,
//     j = 0,
//     k = left;

//   while (i < n1 &&j < n2) {
//     if (l[i] <= r[j]) {
//       arr[k++] = l[i++];
//     } else {
//       arr[k++] = r[j++];
//     }
//   }

//   while (i < n1) {
//     arr[k++] = l[i++];
//   }

//   while (j < n2) {
//     arr[k++] = r[j++];
//   }
// }

// function mergeSort(arr: number[], left: number, right: number): void {
//   if (left < right) {
//     const mid: number = Math.floor((left + right) / 2);
//     mergeSort(arr, left, mid);
//     mergeSort(arr, mid + 1, right);
//     merge(arr, left, mid, right);
//   }
// }
// const numbers = [38, 27, 43, 3, 9, 82, 10];
// mergeSort(numbers, 0, numbers.length - 1);
// console.log(numbers);
