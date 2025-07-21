"use strict";
// Implementing a Stack with an array
// Pop
// Push
// Peek
// class Stacks {
//   items: number[] = [];
//   constructor(...args: number[]) {
//     this.items = args;
//   }
//   push(value: number): number {
//     this.items.push(value);
//     return value;
//   }
//   pop() {
//     if (this.items.length === 0) return undefined;
//     return this.items.pop();
//   }
//   peek() {
//     if (this.items.length === 0) return null;
//     return this.items[this.items.length - 1];
//   }
// }
// const stack = new Stacks(1, 2, 3, 4);
// stack.push(9);
// stack.push(10);
// stack.pop();
// stack.peek();
// console.log(stack);
/*
class StackWithArray<T = number | string> {
  stack: T[];
  constructor() {
    this.stack = [];
  }

  pop() {
    if (this.isEmpty()) return "This stack is empty, nothing to pop!";
    return this.stack.pop();
  }

  push(value: T) {
    this.stack.push(value);
  }

  peek() {
    if (this.isEmpty()) return "The stack is empty, nothing to peek!";
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

const stack = new StackWithArray();
stack.push(9);
stack.push(10);
stack.push(11);
stack.pop();
stack.peek();
console.log(stack);

*/
class StackWithArray {
    constructor() {
        this.stack = [];
    }
}
