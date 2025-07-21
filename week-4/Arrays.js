"use strict";
// Hackerrank questions
// 1.
// function reverseArra(arr: number[]): number[] {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     // swap
//     [arr[left], arr[right]] = [arr[right], arr[left]];
//     left++;
//     right--;
//   }
//   return arr;
// }
// console.log(reverseArra([1, 2, 3, 4]));
// console.log(reverseArra([0, 0, 1, 1]));
// 2.
// function rotate(n) {
//   for (let i = 0; i < n; i++) {
//     console.log(n);
//   }
// }
// rotate(2);
// function rotateLeft(d, arr) {
//   // Write your code here
//   const tt = d % arr.length;
//   for (let i = 0; i < arr.length; i++) {
//     const a = arr.slice(0, arr[tt - 1]);
//     console.log(a);
//     let count = 0;
//     arr[count] = arr[4];
//     arr[count] = arr[3];
//     arr[count] = arr[2];
//     // arr.concat(a);
//     console.log(arr);
//   }
// }
// rotateLeft(2, [1, 2, 3, 4, 5]);
// function rotate(d, arr) {
//   const actualRotate = d % arr.length;
//   const init = [];
//   let i = 0;
//   for (; i < actualRotate; i++) {
//     init.push(arr[i]);
//   }
//   let cnt = 0;
//   let p = i;
//   for (; p < arr.length; p++) {
//     arr[cnt] = arr[p];
//     cnt++;
//   }
//   let end = arr.length - init.length;
//   for (let j = 0; j < init.length; j++) {
//     arr[end] = init[j];
//     end++;
//   }
//   return arr;
// }
// console.log(rotate(2, [1, 2, 3, 4, 5]));
// 3.)
// function hourglassSum(arr: number[][]): number {
//   // Write your code here
//   let maxsum = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (
//         i === 0 ||
//         i === arr.length - 1 ||
//         j === 0 ||
//         j === arr[i].length - 1
//       ) {
//         continue;
//       }
//       let sum =
//         arr[i][j] +
//         arr[i - 1][j] +
//         arr[i - 1][j - 1] +
//         arr[i - 1][j + 1] +
//         arr[i + 1][j] +
//         arr[i + 1][j - 1] +
//         arr[i + 1][j + 1];
//       if (sum > maxsum) {
//         maxsum = sum;
//       }
//     }
//   }
//   return maxsum;
// }
// console.log(
//   hourglassSum([
//     [1, 1, 1, 0, 0, 0],
//     [1, 1, 1, 0, 0, 0],
//     [0, 0, 2, 4, 4, 0],
//     [0, 0, 0, 2, 0, 0],
//     [0, 0, 1, 2, 4, 0],
//   ])
// );
///////////  Time complexity   ///////
// // 0(1) - constant time
// 1;
// function isEven(n: number): boolean {
//   return n % 2 == 0;
// }
// console.log(isEven(4));
// console.log(isEven(9));
// 2;
// function getFirstItem(arr: number[]): number {
//   return arr[0];
// }
// console.log(getFirstItem([10, 20, 30]));
// //0(n) - linear time
// 1;
// function printAllItems(arr: number[]): void {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }
// printAllItems([10, 20, 30]);
// 2;
// function sumArray(arr: number[]): number {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(sumArray([1, 2, 3, 4, 5]));
// // 0(LogN)
// 1;
// function cutInHalf(n: number): void {
//   while (n > 1) {
//     console.log(n);
//     n = Math.floor(n / 2);
//   }
//   console.log(1);
// }
// cutInHalf(20);
// function reverseArray(a: number[]): number[] {
//   // Write your code here
//   const arr = [1, 4, 3, 2];
//   return arr.reverse();
// }
// console.log(reverseArray([]));
// function reverseArra(arr: number[]): number[] {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     // swap
//     [arr[left], arr[right]] = [arr[right], arr[left]];
//     left++;
//     right--;
//   }
//   return arr;
// }
// console.log(reverseArra([1, 2, 3, 4]));
// console.log(reverseArra([0, 0, 1, 1]));
