/**
 * Name: Merge Two Sorted Lists
 *
 * Approach: Iterative Merge
 *
 * Input:
 * List 1:
 * 1 -> 2 -> 4
 *
 * List 2:
 * 1 -> 3 -> 4
 *
 * Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> null
 *
 * Explanation: Compare nodes and merge in sorted order.
 *
 * Algorithm Used: Linked List Merge
 *
 * Key Learning: Pointer merging logic
 *
 * Time Complexity: O(n + m)
 *
 * Space Complexity: O(1)
 */

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function mergeTwoLists(list1, list2) {
  let dummy = new ListNode(-1);

  let current = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.value <= list2.value) {
      current.next = list1;

      list1 = list1.next;
    } else {
      current.next = list2;

      list2 = list2.next;
    }

    current = current.next;
  }

  // Attach remaining nodes
  current.next = list1 !== null ? list1 : list2;

  return dummy.next;
}

// Create List 1
let list1 = new ListNode(1);

list1.next = new ListNode(2);

list1.next.next = new ListNode(4);

// Create List 2
let list2 = new ListNode(1);

list2.next = new ListNode(3);

list2.next.next = new ListNode(4);

// Merge lists
let merged = mergeTwoLists(list1, list2);

// Print Output
while (merged !== null) {
  process.stdout.write(merged.value + " -> ");

  merged = merged.next;
}

console.log("null"); // 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> null
