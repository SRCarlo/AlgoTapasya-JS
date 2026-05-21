/*
 * Name: Reorder List
 *
 * Approach: Split + Reverse + Merge
 *
 * Input: 1 -> 2 -> 3 -> 4
 *
 * Output: 1 -> 4 -> 2 -> 3
 *
 * Explanation: Reorder nodes alternately from front and back.
 *
 * Algorithm Used: Linked List Manipulation
 *
 * Key Learning: Multi-step pointer operations
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

function reorderList(head) {
  if (!head || !head.next) {
    return;
  }

  let slow = head;
  let fast = head;

  // Find middle
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;

    fast = fast.next.next;
  }

  // Reverse second half
  let previous = null;

  let current = slow.next;

  slow.next = null;

  while (current !== null) {
    let nextNode = current.next;

    current.next = previous;

    previous = current;

    current = nextNode;
  }

  // Merge halves
  let first = head;
  let second = previous;

  while (second !== null) {
    let temp1 = first.next;
    let temp2 = second.next;

    first.next = second;
    second.next = temp1;

    first = temp1;
    second = temp2;
  }
}

// Create Linked List
let head = new ListNode(1);

head.next = new ListNode(2);

head.next.next = new ListNode(3);

head.next.next.next = new ListNode(4);

// Reorder list
reorderList(head);

// Print Output
let current = head;

while (current !== null) {
  process.stdout.write(current.value + " -> ");

  current = current.next;
}

console.log("null"); // 1 -> 4 -> 2 -> 3 -> null
