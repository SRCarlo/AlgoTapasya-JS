/*
 * Name: Validate Binary Search Tree
 *
 * Approach: Range Validation
 *
 * Input:
 *        2
 *      /   \
 *     1     3
 *
 * Output: true
 *
 * Explanation: Every node must satisfy BST ordering rules.
 *
 * Algorithm Used: DFS with Min/Max Range
 *
 * Key Learning: BST validation logic
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(h)
 */

class TreeNode {
  constructor(value) {
    this.value = value;

    this.left = null;

    this.right = null;
  }
}

function isValidBST(root, min = -Infinity, max = Infinity) {
  if (root === null) {
    return true;
  }

  if (root.value <= min || root.value >= max) {
    return false;
  }

  return (
    isValidBST(root.left, min, root.value) &&
    isValidBST(root.right, root.value, max)
  );
}

// Create BST
let root = new TreeNode(2);

root.left = new TreeNode(1);

root.right = new TreeNode(3);

// Output
console.log(isValidBST(root)); // true
