class Nodes<T> {
  data: T;
  next: Nodes<T> | null = null;
  prev: Nodes<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}

class DoublyLinkedList<T> {
  private head: Nodes<T> | null = null;
  private tail: Nodes<T> | null = null;
  private length: number = 0;

  insertAtBeginning(data: T): void {
    const newNode = new Nodes(data);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  insertAtEnd(data: T): void {
    const newNode = new Nodes(data);
    if (!this.tail) {
      this.head = this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  traverseForward(): T[] {
    const result: T[] = [];
    let current = this.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }

  traverseBackward(): T[] {
    const result: T[] = [];
    let current = this.tail;
    while (current) {
      result.push(current.data);
      current = current.prev;
    }
    return result;
  }
}

const list = new DoublyLinkedList<number>();

list.insertAtBeginning(3);
list.insertAtBeginning(2);
list.insertAtEnd(4);
list.insertAtEnd(5);

console.log("Forward:", list.traverseForward());
console.log("Backward:", list.traverseBackward());
list.insertAtEnd(8);

