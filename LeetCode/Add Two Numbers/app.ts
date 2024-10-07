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
  let l1AsNum: string = '';
  let l2AsNum: string = '';

  let l1End: ListNode | null = l1;
  let l2End: ListNode | null = l2;
  while (l1End) {
    l1AsNum += l1End.val;
    l1End = l1End.next;
  }

  while (l2End) {
    l2AsNum += l2End.val;
    l2End = l2End.next;
  }

  const l1AsNumReversed = l1AsNum.split('').reverse().join('');
  const l2AsNumReversed = l2AsNum.split('').reverse().join('');
  const total = (
    parseInt(l1AsNumReversed) + parseInt(l2AsNumReversed)
  ).toString();

  console.log(l1AsNumReversed, l2AsNumReversed);
  console.log(total);
  const bottomListNode = new ListNode(parseInt(total[0]));

  if (total.length == 1) return bottomListNode;

  let currentListNode;
  for (let i = 1; i < total.length; i++) {
    if (i == 1) {
      currentListNode = new ListNode(parseInt(total[i]), bottomListNode);
    } else {
      currentListNode = new ListNode(parseInt(total[i]), currentListNode);
    }
  }

  return currentListNode;
}

let l1S3 = new ListNode(3, null);
let l1S2 = new ListNode(4, l1S3);
let l1S1 = new ListNode(2, l1S2);

let l2S3 = new ListNode(4, null);
let l2S2 = new ListNode(6, l2S3);
let l2S1 = new ListNode(5, l2S2);

// let l1S1 = new ListNode(0, null);
// let l2S1 = new ListNode(1, null);

console.log(addTwoNumbers(l1S1, l2S1));
