/*
 * Name: Balanced Binary Tree
 *
 * Approach: DFS Height Check
 *
 * Input:
 *        3
 *      /   \
 *     9     20
 *          /  \
 *         15   7
 *
 * Output: true
 *
 * Explanation: Height difference of every node must not exceed 1.
 *
 * Algorithm Used: Recursive DFS
 *
 * Key Learning: Height-balanced trees
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

function isBalanced(root) {
  function height(node) {
    if (node === null) {
      return 0;
    }

    let leftHeight = height(node.left);

    if (leftHeight === -1) {
      return -1;
    }

    let rightHeight = height(node.right);

    if (rightHeight === -1) {
      return -1;
    }

    if (Math.abs(leftHeight - rightHeight) > 1) {
      return -1;
    }

    return Math.max(leftHeight, rightHeight) + 1;
  }

  return height(root) !== -1;
}

// Create Tree
let root = new TreeNode(3);

root.left = new TreeNode(9);

root.right = new TreeNode(20);

root.right.left = new TreeNode(15);

root.right.right = new TreeNode(7);

// Output
console.log(isBalanced(root)); // true
