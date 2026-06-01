/*
 * Name: Binary Tree Level Order Traversal
 *
 * Approach: Use Queue for BFS traversal.
 *
 * Input:
 *      3
 *     / \
 *    9  20
 *      /  \
 *     15   7
 *
 * Output: [[3],[9,20],[15,7]]
 *
 * Explanation: Traverse tree level by level.
 *
 * Algorithm Used: Breadth First Search (BFS)
 *
 * Key Learning: Queue based traversal.
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

function levelOrder(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length) {
    const size = queue.length;

    const level = [];

    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      level.push(node.val);

      if (node.left) queue.push(node.left);

      if (node.right) queue.push(node.right);
    }

    result.push(level);
  }

  return result;
}

// Input
const root = new TreeNode(3);

root.left = new TreeNode(9);

root.right = new TreeNode(20);

root.right.left = new TreeNode(15);

root.right.right = new TreeNode(7);

// Output
console.log(levelOrder(root)); // [ [3], [9,20], [15,7] ]
