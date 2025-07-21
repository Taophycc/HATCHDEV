"use strict";
class Nodes {
    constructor(data) {
        this.next = null;
        this.prev = null;
        this.data = data;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    insertAtBeginning(data) {
        const newNode = new Nodes(data);
        if (!this.head) {
            this.head = this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
    }
    insertAtEnd(data) {
        const newNode = new Nodes(data);
        if (!this.tail) {
            this.head = this.tail = newNode;
        }
        else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    traverseForward() {
        const result = [];
        let current = this.head;
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        return result;
    }
    traverseBackward() {
        const result = [];
        let current = this.tail;
        while (current) {
            result.push(current.data);
            current = current.prev;
        }
        return result;
    }
}
const list = new DoublyLinkedList();
list.insertAtBeginning(3);
list.insertAtBeginning(2);
list.insertAtEnd(4);
list.insertAtEnd(5);
console.log("Forward:", list.traverseForward());
console.log("Backward:", list.traverseBackward());
list.insertAtEnd(8);
