"use strict";
class ListNodee {
    constructor(key, val, next) {
        this.key = key;
        this.val = val;
        this.next = next;
    }
}
class HashMap {
    constructor(size = 10) {
        this.size = size;
        this.buckets = new Array(this.size).fill(null);
    }
    hash(key) {
        const strK = String(key);
        let hash = 0;
        for (let i = 0; i < strK.length; i++) {
            hash = (hash + strK.charCodeAt(i) * i) % this.size;
        }
        return hash;
    }
    set(key, val) {
        const idx = this.hash(key);
        let head = this.buckets[idx];
        let curr = head;
        while (curr) {
            if (curr.key == key) {
                curr.val = val;
                return;
            }
            curr = curr.next;
        }
        let newNode = new ListNodee(key, val, head);
        this.buckets[idx] = newNode;
    }
    get(key) {
        const idx = this.hash(key);
        let curr = this.buckets[idx];
        while (curr) {
            if (curr.key == key) {
                return curr.val;
            }
            curr = curr.next;
        }
        return;
    }
    remove(key) {
        const idx = this.hash(key);
        let curr = this.buckets[idx];
        let prev = null;
        while (curr) {
            if (curr.key == key) {
                if (prev) {
                    prev.next = curr.next;
                }
                else {
                    this.buckets[idx] = curr.next;
                }
            }
            prev = curr;
            curr = curr.next;
        }
        return;
    }
}
