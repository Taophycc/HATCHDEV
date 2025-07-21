class StackNode<T> {
  value: T;
  next: StackNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class Stack<T> {
  top: StackNode<T> | null;
  bottom: StackNode<T> | null;
  private length: number;

  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value: T) {
    const newNode = new StackNode(value);
    if (this.isEmpty()) {
      this.bottom = newNode;
      this.top = newNode;
      this.length++;
    } else {
      const holdingNode = this.top;
      this.top = newNode;
      this.top.next = holdingNode;
      this.length++;
    }
    return this;
  }

  peek() {
    if (this.isEmpty()) return "Stack is empty";
    return this.top?.value;
  }

  pop() {
    if (this.isEmpty()) return "Nothing to pop, stack is empty";
    // We can store the popped node
    const poppedNode = this.top;
    // Change this.top to point to the nextnode
    this.top = this.top?.next || null;

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

const myStack = new Stack<number>();
myStack.push(10);
myStack.push(20);
myStack.push(30);
console.log("Peeking before popping", myStack.peek());
myStack.pop();
console.log("Peeking before popping", myStack.peek());
console.log(myStack);
