/*
 * Name: Lowest Common Ancestor of a Binary Tree
 *
 * Approach: Use DFS recursion.
 * If current node matches p or q, return it.
 * Search left and right subtrees.
 * If both sides return a node, current node is LCA.
 *
 * Input:
 *         3
 *        / \
 *       5   1
 *      / \ / \
 *     6  2 0  8
 *
 * p = 5
 * q = 1
 *
 * Output: 3
 *
 * Explanation: Node 3 is the lowest node having both 5 and 1 in its subtree.
 *
 * Algorithm Used: Depth First Search (DFS)
 *
 * Key Learning: Recursive tree traversal and ancestor finding.
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

function lowestCommonAncestor(root, p, q) {
  if (root === null || root === p || root === q) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);

  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) {
    return root;
  }

  return left || right;
}

// Input
const root = new TreeNode(3);

root.left = new TreeNode(5);
root.right = new TreeNode(1);

root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);

root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);

// Output
console.log(lowestCommonAncestor(root, root.left, root.right).val); // 3
