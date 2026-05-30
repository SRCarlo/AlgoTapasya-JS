/*
 * Name: Path Sum
 *
 * Approach: Recursively subtract node values from target sum while traversing.
 *
 * Input: targetSum = 22
 *
 * Output: true
 *
 * Explanation: Path: 5 → 4 → 11 → 2  equals 22.
 *
 * Algorithm Used: DFS Recursion
 *
 * Key Learning: Root-to-leaf path validation.
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

function hasPathSum(root, targetSum) {
  if (!root) {
    return false;
  }

  if (!root.left && !root.right) {
    return targetSum === root.val;
  }

  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
}

// Input
const root = new TreeNode(5);

root.left = new TreeNode(4);
root.right = new TreeNode(8);

root.left.left = new TreeNode(11);

root.left.left.left = new TreeNode(7);

root.left.left.right = new TreeNode(2);

// Output
console.log(hasPathSum(root, 22)); // true
