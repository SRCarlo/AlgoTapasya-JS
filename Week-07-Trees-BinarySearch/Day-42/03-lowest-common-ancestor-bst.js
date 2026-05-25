/**
 * Name: Lowest Common Ancestor of BST\
 *
 * Approach: BST Traversal
 *
 * Input:
 *        6
 *      /   \
 *     2     8
 *    / \   / \
 *   0   4 7   9
 *
 * p = 2
 * q = 8
 *
 * Output: 6
 *
 * Explanation: First split point becomes lowest common ancestor.
 *
 * Algorithm Used: BST Property Traversal
 *
 * Key Learning: Ancestor search optimization
 *
 * Time Complexity: O(h)
 *
 * Space Complexity: O(1)
 */

class TreeNode {
  constructor(value) {
    this.value = value;

    this.left = null;

    this.right = null;
  }
}

function lowestCommonAncestor(root, p, q) {
  while (root !== null) {
    if (p.value < root.value && q.value < root.value) {
      root = root.left;
    } else if (p.value > root.value && q.value > root.value) {
      root = root.right;
    } else {
      return root;
    }
  }
}

// Create BST
let root = new TreeNode(6);

root.left = new TreeNode(2);

root.right = new TreeNode(8);

root.left.left = new TreeNode(0);

root.left.right = new TreeNode(4);

root.right.left = new TreeNode(7);

root.right.right = new TreeNode(9);

// Output
console.log(lowestCommonAncestor(root, root.left, root.right).value); // 6
