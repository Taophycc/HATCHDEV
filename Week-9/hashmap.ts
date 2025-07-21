class ListNodee<k, v> {
  key: k;
  val: v;
  next: ListNodee<k, v> | null;

  constructor(key: k, val: v, next: ListNodee<k, v> | null) {
    this.key = key;
    this.val = val;
    this.next = next;
  }
}

class HashMap<k, v> {
  private buckets: Array<ListNodee<k, v> | null>;
  private size: number;

  constructor(size: number = 10) {
    this.size = size;
    this.buckets = new Array(this.size).fill(null);
  }

  private hash(key: k): number {
    const strK = String(key);
    let hash = 0;

    for (let i = 0; i < strK.length; i++) {
      hash = (hash + strK.charCodeAt(i) * i) % this.size;
    }
    return hash;
  }

  set(key: k, val: v): void {
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

  get(key: k): v | undefined {
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

  remove(key: k): void {
    const idx = this.hash(key);
    let curr = this.buckets[idx];
    let prev: ListNodee<k, v> | null = null;

    while (curr) {
      if (curr.key == key) {
        if (prev) {
          prev.next = curr.next;
        } else {
          this.buckets[idx] = curr.next;
        }
      }
      prev = curr;
      curr = curr.next;
    }
    return;
  }
}
