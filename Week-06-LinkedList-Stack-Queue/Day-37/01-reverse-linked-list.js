/**
 * Name: Reverse Linked List
 *
 * Approach: Iterative Pointer Reversal
 *
 * Input: 1 -> 2 -> 3 -> 4 -> 5
 *
 * Output: 5 -> 4 -> 3 -> 2 -> 1
 *
 * Explanation: Reverse node pointers one by one.
 *
 * Algorithm Used: Iterative Linked List Reversal
 *
 * Key Learning: Pointer manipulation
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 */

// Definition for ListNode
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseList(head) {
  let previous = null;

  let current = head;

  while (current !== null) {
    // Store next node
    let nextNode = current.next;

    // Reverse pointer
    current.next = previous;

    // Move pointers
    previous = current;

    current = nextNode;
  }

  return previous;
}

// Create Linked List
let head = new ListNode(1);

head.next = new ListNode(2);

head.next.next = new ListNode(3);

head.next.next.next = new ListNode(4);

head.next.next.next.next = new ListNode(5);

// Reverse list
let reversed = reverseList(head);

// Print Output
while (reversed !== null) {
  process.stdout.write(reversed.value + " -> ");

  reversed = reversed.next;
}

console.log("null"); // 5 -> 4 -> 3 -> 2 -> 1 -> null
