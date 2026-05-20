/**
 * Name: Middle of the Linked List
 *
 * Approach: Fast & Slow Pointer
 *
 * Input: 1 -> 2 -> 3 -> 4 -> 5
 *
 * Output: 3
 *
 * Explanation: Slow moves one step, fast moves two steps.
 *
 * Algorithm Used: Two Pointer Technique
 *
 * Key Learning: Fast-slow pointer pattern
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

function middleNode(head) {
  let slow = head;

  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;

    fast = fast.next.next;
  }

  return slow;
}

// Create Linked List
let head = new ListNode(1);

head.next = new ListNode(2);

head.next.next = new ListNode(3);

head.next.next.next = new ListNode(4);

head.next.next.next.next = new ListNode(5);

// Find middle
let middle = middleNode(head);

console.log("Middle Node:", middle.value); // Middle Node: 3
