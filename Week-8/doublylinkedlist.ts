// class DoublyLinkedListNode {
//   value: number;
//   next: null | DoublyLinkedListNode;
//   prev: null | DoublyLinkedListNode;

//   constructor(value: number) {
//     this.value = value;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class DoublyLinkedListt {
//   head: DoublyLinkedListNode;
//   tail: DoublyLinkedListNode;
//   length: number;

//   constructor(value: number) {
//     this.head = new DoublyLinkedListNode(value);
//     this.tail = this.head;
//     this.length = 1;
//   }

//   append(value: number) {
//     const newNode = new DoublyLinkedListNode(value);
//     this.tail.next = newNode;
//     newNode.prev = this.tail;
//     this.tail = newNode;
//     this.length++;
//   }

//   prepend(value: number) {
//     const newNode = new DoublyLinkedListNode(value);
//     newNode.next = this.head;
//     this.head.prev = newNode;
//     this.head = newNode;
//     this.length++;
//   }

//   traverseToIndex(index: number) {
//     let counter = 0;
//     let currentNode = this.head;
//     while (counter !== index) {
//       currentNode = currentNode.next as DoublyLinkedListNode;
//       counter++;
//     }
//     return currentNode;
//   }

//   insertion(index: number, value: number) {
//     if (index >= this.length) {
//       this.append(value);
//       return "Index too large, but value has been appended";
//     }
//     if (index === 0) {
//       this.prepend(value);
//       return "Since index is 0, node has been prepende";
//     }

//     const newNode = new DoublyLinkedListNode(value);
//     const prevNode = this.traverseToIndex(index - 1);
//     const holdingNode = prevNode.next;
//     prevNode.next = newNode;
//     newNode.prev = prevNode;
//     newNode.next = holdingNode;
//     holdingNode && (holdingNode.prev = newNode);
//     this.length++;
//   }

//   remove(index: number) {
//     const prevNode = this.traverseToIndex(index - 1);
//     const nodeToDelete = prevNode.next;
//     const holdingNode = nodeToDelete?.next;
//     prevNode.next = holdingNode as DoublyLinkedListNode;
//     holdingNode && (holdingNode.prev = prevNode);
//     this.length--;
//   }
// }

// const ourDoublyLinkedList = new DoublyLinkedListt(10);
// ourDoublyLinkedList.append(40);
// ourDoublyLinkedList.prepend(20);

// ourDoublyLinkedList.insertion(2, 50);
// ourDoublyLinkedList.insertion(3, 70);
// console.log(ourDoublyLinkedList);
