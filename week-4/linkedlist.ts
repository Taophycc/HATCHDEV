// class LNode {
//     value: number;
//     next: LNode | null;

//     constructor(value: number) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     head: LNode | null;

//     constructor(initialValue: number) {
//         const newNode = new LNode(initialValue);
//         this.head = newNode;
//     }

// }

// const list = new LinkedList(10);
// console.log(list); // Output: 10

// // Assignment
// // Array Class
// //

/*

class LNode {
  value: number;
  next: LNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: LNode | null;

  constructor() {
    this.head = null;
  }

  add(value: number) {
    const newNode = new LNode(value);

    if (this.head == null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }
}

const list = new LinkedList();
list.add(20);
list.add(50);
list.add(30);
console.log(list);
*/
/*
class Nodee {
  value: number;
  next: Nodee | null;

  constructor(value: number, next: Nodee | null = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  head: Nodee | null = null;
  constructor(arr: number[]) {
    for (let i = arr.length - 1; i >= 0; i--) {
      this.head = new Nodee(arr[i], this.head);
    }
  }

  print() {
    let curr = this.head;
    while (curr) {
      console.log(curr.value);
      console.log(curr.next);
      curr = curr.next;
    }
  }
}

// const node = new Nodee(10,;
// console.log(node);
const n = new LinkedList([1, 2, 3, 4]);
n.print();
console.log(n);
*/

class SinglyLinkedListNodes {
  value: number;
  next: SinglyLinkedListNodes | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedLists {
  head: SinglyLinkedListNodes;
  tail: SinglyLinkedListNodes;
  private length: number;
  constructor(value: number) {
    this.head = new SinglyLinkedListNodes(value);
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    const values: number[] = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      values.push(currentNode.value);
      currentNode = currentNode.next as SinglyLinkedListNodes;
    }
    console.log(values.join(" -> "));
  }

  append(value: number) {
    const newNode = new SinglyLinkedListNodes(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value: number) {
    const newNode = new SinglyLinkedListNodes(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insertion(index: number, value: number) {
    if (index >= this.length) {
      this.append(value);
      return "Index to large, but value has been appended";
    }
    if (index === 0) {
      this.prepend(value);
      return "Since index is 0, node has been prepended";
    }

    const newNode = new SinglyLinkedListNodes(value);
    const nodeBeforeIndex = this.traverseToIndex(index - 1);
    const holdingNode = nodeBeforeIndex.next;
    nodeBeforeIndex.next = newNode;
    newNode.next = holdingNode;
  }

  traverseToIndex(index: number) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next as SinglyLinkedListNodes;
      counter++;
    }
    return currentNode;
  }

  deletionAtEnd(index: number) {
    const nodeBeforeIndex = this.traverseToIndex(index - 1);
    nodeBeforeIndex.next = null;
    this.length--;
  }

  deletionAtBegin(index: number) {
    // let currentNode = this.head;
    // const nodeAfterIndex = this.traverseToIndex(index + 1);
    // currentNode = nodeAfterIndex;
    // this.length--;

    if (this.length === 1) {
      this.head.value = 0; 
      this.tail = this.head;
      return;
    }

    this.head = this.head.next!;
    this.length--;
  }
}

const linkedlist = new SinglyLinkedLists(1);
linkedlist.append(2);
linkedlist.append(3);
linkedlist.append(4);
linkedlist.prepend(0);
linkedlist.insertion(5, 5);
linkedlist.deletionAtEnd(5);
linkedlist.deletionAtBegin(1);
linkedlist.printList();
console.log(linkedlist);
