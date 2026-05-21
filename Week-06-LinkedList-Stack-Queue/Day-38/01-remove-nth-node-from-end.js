/*
 * Name: Remove Nth Node From End
 *
 * Approach: Two Pointer Technique
 *
 * Input: 1 -> 2 -> 3 -> 4 -> 5
 *
 * n = 2
 *
 * Output: 1 -> 2 -> 3 -> 5
 *
 * Explanation: Remove 2nd node from end.
 *
 * Algorithm Used: Fast & Slow Pointer
 *
 * Key Learning: Gap pointer traversal
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

function removeNthFromEnd(head, n) {
  let dummy = new ListNode(0);

  dummy.next = head;

  let fast = dummy;
  let slow = dummy;

  // Create gap
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  // Move together
  while (fast !== null) {
    slow = slow.next;

    fast = fast.next;
  }

  // Remove node
  slow.next = slow.next.next;

  return dummy.next;
}

// Create Linked List
let head = new ListNode(1);

head.next = new ListNode(2);

head.next.next = new ListNode(3);

head.next.next.next = new ListNode(4);

head.next.next.next.next = new ListNode(5);

// Remove node
let result = removeNthFromEnd(head, 2);

// Print Output
while (result !== null) {
  process.stdout.write(result.value + " -> ");

  result = result.next;
}

console.log("null"); // 1 -> 2 -> 3 -> 5 -> null
