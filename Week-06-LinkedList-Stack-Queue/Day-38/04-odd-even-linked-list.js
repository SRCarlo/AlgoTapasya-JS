/*
 * Name: Odd Even Linked List
 *
 * Approach: Separate Odd & Even Nodes
 *
 * Input: 1 -> 2 -> 3 -> 4 -> 5
 *
 * Output: 1 -> 3 -> 5 -> 2 -> 4
 *
 * Explanation: Group odd-indexed nodes first, then even-indexed nodes.
 *
 * Algorithm Used: Linked List Rearrangement
 *
 * Key Learning: In-place grouping
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 */

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function oddEvenList(head) {
  if (!head) {
    return null;
  }

  let odd = head;

  let even = head.next;

  let evenHead = even;

  while (even !== null && even.next !== null) {
    odd.next = even.next;

    odd = odd.next;

    even.next = odd.next;

    even = even.next;
  }

  // Attach even list
  odd.next = evenHead;

  return head;
}

// Create Linked List
let head = new ListNode(1);

head.next = new ListNode(2);

head.next.next = new ListNode(3);

head.next.next.next = new ListNode(4);

head.next.next.next.next = new ListNode(5);

// Rearrange list
let result = oddEvenList(head);

// Print Output
while (result !== null) {
  process.stdout.write(result.value + " -> ");

  result = result.next;
}

console.log("null"); //1 -> 3 -> 5 -> 2 -> 4 -> null
