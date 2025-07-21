class SinglyLinkedListNode {
  value: number;
  next: null | SinglyLinkedListNode;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  head: SinglyLinkedListNode;
  tail: SinglyLinkedListNode;
  private length: number;

  constructor(value: number) {
    this.head = new SinglyLinkedListNode(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value: number) {
    // We need to create node with our own value
    const newNode = new SinglyLinkedListNode(value);
    // Let the tail point to the new node
    this.tail.next = newNode;
    // Set the tail to the new node
    this.tail = newNode;
    // Increase the length
    this.length++;
  }

  prepend(value: number) {
    // Create a new node
    const newNode = new SinglyLinkedListNode(value);
    //Assigned  newNode.next to this.head
    newNode.next = this.head;
    // Set this.head to newNode
    this.head = newNode;
    // Increase the length
    this.length++;
  }

  insertion(index: number, value: number) {
    if (index >= this.length) {
      this.append(value);
      return "Index too large, but value has been appended";
    }
    if (index === 0) {
      this.prepend(value);
      return "Since index is 0, node has been prepended";
    }
    // Create a node
    const newNode = new SinglyLinkedListNode(value);
    // Create a variable to store the node before the index ==> nodeBeforeIndex
    const nodeBeforeIndex = this.traverseToIndex(index - 1);
    // Create a holdingNode variable that stores the nodeBeforeIndex.next
    const holdingNode = nodeBeforeIndex.next;
    // Set the nodeBeforeIndex.next to the newNode
    nodeBeforeIndex.next = newNode;
    // Set newNode.next to holdingNode
    newNode.next = holdingNode;
  }

  traverseToIndex(index: number) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next as SinglyLinkedListNode;
      counter++;
    }
    return currentNode;
  }

  deletion(index: number) {
    // Traverse to the node before the index. We call this prevNode
    const prevNode = this.traverseToIndex(index - 1);
    // Save the node to delete ==> prevNode.next
    const nodeToDelete = prevNode.next;
    // Create a holding node that stores the node after nodeToDelete
    const holdingNode = nodeToDelete?.next;
    // Then we point the prevNode to the holdingNode
    prevNode.next = holdingNode as SinglyLinkedListNode;
    // Then we reduce the length
    this.length--;
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    // Create a first variable, which stores the head;
    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
  }
}

const ourSinglyLinkedList = new SinglyLinkedList(10);
ourSinglyLinkedList.append(40);
ourSinglyLinkedList.prepend(20);

ourSinglyLinkedList.insertion(2, 50);
ourSinglyLinkedList.insertion(3, 70);
ourSinglyLinkedList.reverse();
console.log(ourSinglyLinkedList);
