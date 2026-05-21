/*
 * Name: Palindrome Linked List
 *
 * Approach: Reverse Second Half
 *
 * Input: 1 -> 2 -> 2 -> 1
 *
 * Output: true
 *
 * Explanation: Compare first half and reversed second half.
 *
 * Algorithm Used: Fast & Slow Pointer
 *
 * Key Learning: Half reversal technique
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

function isPalindrome(head) {
  let slow = head;
  let fast = head;

  // Find middle
  while (fast !== null && fast.next !== null) {
    slow = slow.next;

    fast = fast.next.next;
  }

  // Reverse second half
  let previous = null;

  while (slow !== null) {
    let nextNode = slow.next;

    slow.next = previous;

    previous = slow;

    slow = nextNode;
  }

  // Compare halves
  let left = head;
  let right = previous;

  while (right !== null) {
    if (left.value !== right.value) {
      return false;
    }

    left = left.next;
    right = right.next;
  }

  return true;
}

// Create Linked List
let head = new ListNode(1);

head.next = new ListNode(2);

head.next.next = new ListNode(2);

head.next.next.next = new ListNode(1);

// Check palindrome
console.log(isPalindrome(head)); // true
