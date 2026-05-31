/*
 * Name: Kth Smallest Element in BST
 *
 * Approach:
 * Perform inorder traversal.
 * BST inorder gives sorted order.
 *
 * Input:
 *      3
 *     / \
 *    1   4
 *     \
 *      2
 *
 * k = 1
 *
 * Output: 1
 *
 * Algorithm Used: Inorder Traversal
 *
 * Key Learning: BST inorder traversal.
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function kthSmallest(root, k) {
  const values = [];

  function inorder(node) {
    if (!node) return;

    inorder(node.left);

    values.push(node.val);

    inorder(node.right);
  }

  inorder(root);

  return values[k - 1];
}

// Input
const root = new TreeNode(3);

root.left = new TreeNode(1);
root.right = new TreeNode(4);

root.left.right = new TreeNode(2);

// Output
console.log(kthSmallest(root, 1)); //1
