"use strict";
class StackNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    push(value) {
        const newNode = new StackNode(value);
        if (this.isEmpty()) {
            this.bottom = newNode;
            this.top = newNode;
            this.length++;
        }
        else {
            const holdingNode = this.top;
            this.top = newNode;
            this.top.next = holdingNode;
            this.length++;
        }
        return this;
    }
    peek() {
        var _a;
        if (this.isEmpty())
            return "Stack is empty";
        return (_a = this.top) === null || _a === void 0 ? void 0 : _a.value;
    }
    pop() {
        var _a;
        if (this.isEmpty())
            return "Nothing to pop, stack is empty";
        // We can store the popped node
        const poppedNode = this.top;
        // Change this.top to point to the nextnode
        this.top = ((_a = this.top) === null || _a === void 0 ? void 0 : _a.next) || null;
        // If there's no this.top set this.bottom to null;
        if (!this.top) {
            this.bottom = null;
        }
        // Reduced the lenght
        this.length--;
        return poppedNode;
    }
    isEmpty() {
        return this.length === 0;
    }
}
const myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);
console.log("Peeking before popping", myStack.peek());
myStack.pop();
console.log("Peeking before popping", myStack.peek());
console.log(myStack);
