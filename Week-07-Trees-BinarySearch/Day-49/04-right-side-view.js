/*
 * Name: Binary Tree Right Side View
 *
 * Approach:
 * BFS traversal.
 * Take last node from each level.
 *
 * Input:
 *      1
 *     / \
 *    2   3
 *     \   \
 *      5   4
 *
 * Output: [1,3,4]
 *
 * Explanation: Visible nodes from right side.
 *
 * Algorithm Used: BFS
 *
 * Key Learning: Level ending node identification.
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

function rightSideView(root) {
  if (!root) return [];

  const result = [];

  const queue = [root];

  while (queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      if (i === size - 1) {
        result.push(node.val);
      }

      if (node.left) queue.push(node.left);

      if (node.right) queue.push(node.right);
    }
  }

  return result;
}

// Input
const root = new TreeNode(1);

root.left = new TreeNode(2);

root.right = new TreeNode(3);

root.left.right = new TreeNode(5);

root.right.right = new TreeNode(4);

// Output
console.log(rightSideView(root)); // [1,3,4]
