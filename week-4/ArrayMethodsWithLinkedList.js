"use strict";
class ArrayTaofeek {
    constructor(...args) {
        this.items = [];
        this.size = 0;
        this.items = args;
        this.size = args.length;
    }
    // Push
    push(...items) {
        for (const item of items) {
            this.items[this.size++] = item;
        }
        return this.size;
    }
    pop() {
        if (this.size === 0)
            return undefined;
        const lastitem = this.items[this.size - 1];
        this.size--;
        this.items.length = this.size;
        return lastitem;
    }
    shift() {
        if (this.size === 0)
            return undefined;
        const firstItem = this.items[0];
        for (let i = 1; i < this.size; i++) {
            this.items[i - 1] = this.items[i];
        }
        this.size--;
        this.items.length = this.size;
        return firstItem;
    }
    unshift(...newItems) {
        const newLength = this.size + newItems.length;
        for (let i = this.size - 1; i >= 0; i--) {
            this.items[i + newItems.length] = this.items[i];
        }
        for (let i = 0; i < newItems.length; i++) {
            this.items[i] = newItems[i];
        }
        this.size = newLength;
        return this.size;
    }
    filter(callback) {
        const result = new ArrayTaofeek();
        for (let i = 0; i < this.size; i++) {
            const value = this.items[i];
            if (callback(value, i, this.items)) {
                result.push(value);
            }
        }
        return result;
    }
    // includes(item: T): boolean {
    //   for (let i = 0; i < this.size; i++) {
    //     if (this.items[i] === item) {
    //       console.log(item);
    //       return true;
    //     }
    //   }
    //   return false;
    // }
    includes(item) {
        for (let i = 0; i < this.size; i++) {
            if (this.items[i] === item) {
                return this.items[i];
            }
        }
        return undefined;
    }
    reverse() {
        let left = 0;
        let right = this.items.length - 1;
        while (left < right) {
            // swap
            [this.items[left], this.items[right]] = [
                this.items[right],
                this.items[left],
            ];
            left++;
            right--;
        }
        return this.items;
    }
}
/////// push - adds an element to the back of an array
// myName.push(100);
// myName.push(50);
// myName.push(10);
// console.log(myName.items);
// console.log(myName);
/////// pop - rmemoves an element from the back of an array
// console.log(myName.pop());
// console.log(myName.pop());
// console.log(myName.items);
// console.log(myName.items[0]);
// console.log(myName.size);
/////// Shift - removes an item from the the front of an array
// console.log(myName.shift());
// console.log(myName.items);
// console.log(myName.size);
/////// Unshift - adds an item to the front of an array
// myName.unshift(0, 0, 0);
// console.log(myName.items);
// console.log(myName.size);
/////// Filter - loops through an and filter out elements that pass through a certain condition
// const filtered = myName.filter((x) => x % 2 === 0);
// console.log(filtered.items);
/////// Includes - checks the if the elements of an array is present
// const myName = new ArrayTaofeek<number>(1, 2, 3, 4);
// console.log(myName.includes(1));
////// reverse - changes the order of an array from the last to first
// const myName = new ArrayTaofeek<number>();
// myName.push(1, 2, 3, 4, 5);
// console.log(myName.reverse());
// console.log(myName.reverse());
// console.log(myName.reverse());
/*
class Nodes {
  value: number;
  next: Nodes | null;

  constructor(value: number, next: Nodes | null = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedLists {
  head: Nodes | null = null;
  constructor(arr: number[]) {
    for (let i = arr.length - 1; i >= 0; i--) {
      this.head = new Nodes(arr[i], this.head);
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
const ns = new LinkedLists([1, 2, 3, 4]);
console.log(ns);
*/
/*
class Nodes<T> {
  public next: Nodes<T> | null = null;
  public prev: Nodes<T> | null = null;

  constructor(public data: T) {}
}

interface ILinkedList<T> {
  insertInBegin(data: T): Nodes<T>;
  insertAtEnd(data: T): Nodes<T>;
  // deleteNode(node: Nodes<T>): void;
  // traverse(): T[];
  // size(): number;
  // search(comparator: (data: T) => boolean): Nodes<T> | null;
}

class LinkedListz<T> implements ILinkedList<T> {
  private head: Nodes<T> | null = null;

  public insertAtEnd(data: T): Nodes<T> {
    const node = new Nodes(data);
    if (!this.head) {
      this.head = node;
    } else {
      const getLast = (node: Nodes<T>): Nodes<T> => {
        return node.next ? getLast(node.next) : node;
      };

      const lastNode = getLast(this.head);
      node.prev = lastNode;
      lastNode.next = node;
    }
    return node;
  }

  public insertInBegin(data: T): Nodes<T> {
    const node = new Nodes(data);
    if (!this.head) {
      this.head = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    return node;
  }

  public traverse(): T[] {
    const array: T[] = [];
    if (!this.head) {
      return array;
    }

    const addToArray = (node: Nodes<T>): T[] => {
      array.push(node.data);
      return node.next ? addToArray(node.next) : array;
    };
    return addToArray(this.head);
  }

  public size(): number {
    return this.traverse().length;
  }
}

// const lin = new LinkedListz<string>();
const linkedList = new LinkedListz<String>();
linkedList.traverse();
linkedList.insertAtEnd("Post A");
linkedList.insertAtEnd("Post B");
linkedList.insertInBegin("Post C");
linkedList.insertInBegin("Post D");
*/
