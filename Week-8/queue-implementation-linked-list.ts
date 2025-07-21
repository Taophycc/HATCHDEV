// Queue methods
// Enqueue -> 0(1)
// Dequeue -> 0(1)
// Peek -> 0(1)

class QueueNode<T> {
  value: T;
  next: QueueNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class Queue<T> {
  first: QueueNode<T> | null;
  last: QueueNode<T> | null;
  private length: number;
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value: T) {
    const newNode = new QueueNode(value);

    if (!this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
      this.length++;
    } else {
      const holdingNode = this.last;
      this.last = newNode;
      this.last.next = holdingNode;
      this.length++;
    }
  }

  dequeue() {
    if (this.isEmpty()) return "Nothing to pop, queue is empty";

    const firstNodeOut = this.first;
    this.first = this.first?.next || null;
  }

  isEmpty() {
    return this.length === 0;
  }
}
const myQueue = new Queue<number>();
myQueue.enqueue(10);
myQueue.enqueue(20);
console.log(myQueue);
