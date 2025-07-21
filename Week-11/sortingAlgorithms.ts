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