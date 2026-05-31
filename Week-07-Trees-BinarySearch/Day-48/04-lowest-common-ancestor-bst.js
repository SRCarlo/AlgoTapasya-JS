/*
 * Name: Lowest Common Ancestor in BST
 *
 * Approach: Use BST properties.
 *
 * Input:
 *         6
 *       /   \
 *      2     8
 *
 * p = 2
 * q = 8
 *
 * Output: 6
 *
 * Explanation: Nodes split at root.
 *
 * Algorithm Used: BST Traversal
 *
 * Key Learning: Use ordering property of BST.
 *
 * Time Complexity: O(h)
 *
 * Space Complexity: O(1)
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function lowestCommonAncestor(root, p, q) {
  while (root) {
    if (p.val < root.val && q.val < root.val) {
      root = root.left;
    } else if (p.val > root.val && q.val > root.val) {
      root = root.right;
    } else {
      return root;
    }
  }
}

// Input
const root = new TreeNode(6);

root.left = new TreeNode(2);
root.right = new TreeNode(8);

const p = root.left;
const q = root.right;

// Output
console.log(lowestCommonAncestor(root, p, q).val); // 6
