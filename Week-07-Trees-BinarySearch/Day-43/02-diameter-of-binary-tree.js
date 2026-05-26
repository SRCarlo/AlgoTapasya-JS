/*
 * Name: Diameter of Binary Tree
 *
 * Approach: DFS Depth Calculation
 *
 * Input:
 *        1
 *      /   \
 *     2     3
 *    / \
 *   4   5
 *
 * Output: 3
 *
 * Explanation: Longest path between any two nodes.
 *
 * Algorithm Used: Recursive DFS
 *
 * Key Learning: Global path tracking
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

function diameterOfBinaryTree(root) {
  let diameter = 0;

  function depth(node) {
    if (node === null) {
      return 0;
    }

    let left = depth(node.left);

    let right = depth(node.right);

    diameter = Math.max(diameter, left + right);

    return Math.max(left, right) + 1;
  }

  depth(root);

  return diameter;
}

// Create Tree
let root = new TreeNode(1);

root.left = new TreeNode(2);

root.right = new TreeNode(3);

root.left.left = new TreeNode(4);

root.left.right = new TreeNode(5);

// Output
console.log(diameterOfBinaryTree(root)); // 3
