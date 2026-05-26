/*
 * Name: Path Sum
 *
 * Approach: DFS Path Traversal
 *
 * Input: Target Sum = 22
 *
 * Output: true
 *
 * Explanation: Root-to-leaf path equals target sum.
 *
 * Algorithm Used: Recursive DFS
 *
 * Key Learning: Recursive path accumulation
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

function hasPathSum(root, targetSum) {
  if (root === null) {
    return false;
  }

  // Leaf node
  if (root.left === null && root.right === null) {
    return targetSum === root.value;
  }

  let remaining = targetSum - root.value;

  return hasPathSum(root.left, remaining) || hasPathSum(root.right, remaining);
}

// Create Tree
let root = new TreeNode(5);

root.left = new TreeNode(4);

root.right = new TreeNode(8);

root.left.left = new TreeNode(11);

root.left.left.left = new TreeNode(7);

root.left.left.right = new TreeNode(2);

// Output
console.log(hasPathSum(root, 22)); // true
