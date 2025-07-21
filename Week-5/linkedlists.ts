class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);
const e = new ListNode(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// A ->    B    ->  C   -> D  -> E  ->   NULL
// cur curr.next

// const printLinkedList = (head: ListNode | null) => {
//   const values = [];
//   let current = head;
//   while (current !== null) {
//     values.push(current.val);
//     current = current.next;
//     // console.log(current.val);
//   }
//   return values;
// };
// // printLinkedList(a);

// const sumList = (head: ListNode | null) => {
//   // todo
//   const values = [];
//   let current = head;
//   while (current !== null) {
//     values.push(current.val);
//     current = current.next;
//   }
//   const sum = values.reduce((acc, age) => acc + age, 0);
//   console.log(sum);
//   return sum;
// };
// sumList(a);