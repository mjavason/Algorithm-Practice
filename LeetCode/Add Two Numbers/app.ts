//   Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let l1AsString: string = '';
  let l2AsString: string = '';

  while (l1 || l2) {
    if (l1) {
      l1AsString += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      l2AsString += l2.val;
      l2 = l2.next;
    }
  }

  let l1AsStringReversed = l1AsString.split('').reverse().join('');
  let l2AsStringReversed = l2AsString.split('').reverse().join('');
  const total = (
    BigInt(l1AsStringReversed) + BigInt(l2AsStringReversed)
  ).toString();

  let currentListNode;
  for (let i = 0; i < total.length; i++) {
    if (i == 0) {
      currentListNode = new ListNode(parseInt(total[i]));
    } else {
      currentListNode = new ListNode(parseInt(total[i]), currentListNode);
    }
  }

  return currentListNode;
}

// let l1S3 = new ListNode(3, null);
// let l1S2 = new ListNode(4, l1S3);
// let l1S1 = new ListNode(2, l1S2);

// let l2S3 = new ListNode(4, null);
// let l2S2 = new ListNode(6, l2S3);
// let l2S1 = new ListNode(5, l2S2);

// let l1S1 = new ListNode(0, null);
// let l2S1 = new ListNode(1, null);

let l1S3 = new ListNode(0, null);
let l1S2 = new ListNode(0, l1S3);
let l1S1 = new ListNode(5, l1S2);

let l2S3 = new ListNode(0, null);
let l2S2 = new ListNode(0, l2S3);
let l2S1 = new ListNode(5, l2S2);

// let l1S30 = new ListNode(1, null); // Last element
// let l1S29 = new ListNode(0, l1S30);
// let l1S28 = new ListNode(0, l1S29);
// let l1S27 = new ListNode(0, l1S28);
// let l1S26 = new ListNode(0, l1S27);
// let l1S25 = new ListNode(0, l1S26);
// let l1S24 = new ListNode(0, l1S25);
// let l1S23 = new ListNode(0, l1S24);
// let l1S22 = new ListNode(0, l1S23);
// let l1S21 = new ListNode(0, l1S22);
// let l1S20 = new ListNode(0, l1S21);
// let l1S19 = new ListNode(0, l1S20);
// let l1S18 = new ListNode(0, l1S19);
// let l1S17 = new ListNode(0, l1S18);
// let l1S16 = new ListNode(0, l1S17);
// let l1S15 = new ListNode(0, l1S16);
// let l1S14 = new ListNode(0, l1S15);
// let l1S13 = new ListNode(0, l1S14);
// let l1S12 = new ListNode(0, l1S13);
// let l1S11 = new ListNode(0, l1S12);
// let l1S10 = new ListNode(0, l1S11);
// let l1S9 = new ListNode(0, l1S10);
// let l1S8 = new ListNode(0, l1S9);
// let l1S7 = new ListNode(0, l1S8);
// let l1S6 = new ListNode(0, l1S7);
// let l1S5 = new ListNode(0, l1S6);
// let l1S4 = new ListNode(0, l1S5);
// let l1S3 = new ListNode(0, l1S4);
// let l1S2 = new ListNode(0, l1S3);
// let l1S1 = new ListNode(1, l1S2); // First element

// let l2S3 = new ListNode(4, null); // Last element
// let l2S2 = new ListNode(6, l2S3);
// let l2S1 = new ListNode(5, l2S2); // First element

console.log(addTwoNumbers(l1S1, l2S1));
