/*
 * Name: Validate Binary Search Tree
 *
 * Approach: Use DFS recursion with min and max bounds.
 * Every node must satisfy: min < node.val < max
 *
 * Input:
 *      2
 *     / \
 *    1   3
 *
 * Output: true
 *
 * Explanation: Tree satisfies BST properties.
 *
 * Algorithm Used: DFS + Range Validation
 *
 * Key Learning: BST validation using constraints.
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(h)
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function isValidBST(root, min = -Infinity, max = Infinity) {
  if (!root) {
    return true;
  }

  if (root.val <= min || root.val >= max) {
    return false;
  }

  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
}

// Input
const root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);

// Output
console.log(isValidBST(root)); // true
