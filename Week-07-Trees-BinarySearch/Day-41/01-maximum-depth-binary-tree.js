/*
 * Name: Maximum Depth of Binary Tree
 *
 * Approach: Recursive DFS
 *
 * Input:
 *        3
 *      /   \
 *     9     20
 *          /  \
 *         15   7
 *
 * Output: 3
 *
 * Explanation: Find longest path from root to leaf.
 *
 * Algorithm Used: Depth First Search
 *
 * Key Learning: Recursive depth calculation
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

function maxDepth(root) {
  if (root === null) {
    return 0;
  }

  let leftDepth = maxDepth(root.left);

  let rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
}

// Create Tree
let root = new TreeNode(3);

root.left = new TreeNode(9);

root.right = new TreeNode(20);

root.right.left = new TreeNode(15);

root.right.right = new TreeNode(7);

// Output
console.log(maxDepth(root)); // 3
