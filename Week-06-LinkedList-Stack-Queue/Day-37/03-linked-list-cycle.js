/**
 * Name: Linked List Cycle
 *
 * Approach: Floyd Cycle Detection
 *
 * Input:
 * 3 -> 2 -> 0 -> -4
 *           ↑      ↓
 *           ← ← ← ←
 *
 * Output: true
 *
 * Explanation: Detect cycle using fast & slow pointers.
 *
 * Algorithm Used: Floyd's Algorithm
 *
 * Key Learning: Cycle detection
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

function hasCycle(head) {
  let slow = head;

  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;

    fast = fast.next.next;

    // Cycle detected
    if (slow === fast) {
      return true;
    }
  }

  return false;
}

// Create Linked List
let head = new ListNode(3);

head.next = new ListNode(2);

head.next.next = new ListNode(0);

head.next.next.next = new ListNode(-4);

// Create cycle
head.next.next.next.next = head.next;

// Check cycle
console.log(hasCycle(head)); // true
