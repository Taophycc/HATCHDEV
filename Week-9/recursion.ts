/*
const factorial = (n: number): number => {
  if (n < 2) {
    return 1;
  }
  return n * factorial(n - 1);
};

console.log(factorial(4));
// /**
//  * @params n is the number you want to find the sum up to
//  */
// ("How to make the parameters appear when you hover");

// const sum = (n: number): number => {
//   if (n <= 0) {
//     return n;
//   }
//   return n + sum(n - 1);
// };
// console.log(sum(4));

// const fibonacci = (n: number): number => {
//   if (n <= 0) {
//     return 0;
//   } else if (n == 1) {
//     return 1;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// };

// console.log(fibonacci(4));

// let cnt = 0;

// function f() {
//   if (cnt == 4) {
//     return 0;
//   }
//   console.log(cnt);
//   cnt++;
//   f();
// }

// f();

/////////// Print Name n times using recursion

// function f(i: number, n: number) {
//   //Base case
//   if (i > n) {
//     return;
//   }
//   console.log("Taofeek");
//   f(i + 1, n);
// }

// f(1, 3);

////////// Print linearly from 1 -> N
// function f(i: number, N: number) {
//   if (i > N) {
//     return;
//   }
//   console.log(i);
//   f(i + 1, N);
// }

// f(1, 4);

////////// Print linearly from N -> 1
// function f(i: number, N: number) {
//   if (i < 1) {
//     return;
//   }
//   console.log(i);
//   f(i - 1, N);
// }

// f(3,3);

// function f(i: number, N: number) {
//   if (i < 1) {
//     return;
//   }
//   f(i - 1, N);
//   console.log(i);
// }

// f(3, 3);
