"use strict";
// Queue methods
// Enqueue -> 0(1)
// Dequeue -> 0(1)
// Peek -> 0(1)
class QueueNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    enqueue(value) {
        const newNode = new QueueNode(value);
        if (!this.isEmpty()) {
            this.first = newNode;
            this.last = newNode;
            this.length++;
        }
        else {
            const holdingNode = this.last;
            this.last = newNode;
            this.last.next = holdingNode;
            this.length++;
        }
    }
    dequeue() {
        var _a;
        if (this.isEmpty())
            return "Nothing to pop, queue is empty";
        const firstNodeOut = this.first;
        this.first = ((_a = this.first) === null || _a === void 0 ? void 0 : _a.next) || null;
    }
    isEmpty() {
        return this.length === 0;
    }
}
const myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(20);
console.log(myQueue);
