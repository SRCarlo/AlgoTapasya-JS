/*
 * Name: Binary Tree Zigzag Level Order Traversal
 *
 * Approach:
 * Perform BFS.
 * Reverse alternate levels.
 *
 * Input:
 *      3
 *     / \
 *    9  20
 *      /  \
 *     15   7
 *
 * Output: [[3],[20,9],[15,7]]
 *
 * Explanation: Alternate traversal direction.
 *
 * Algorithm Used: BFS
 *
 * Key Learning: Level-based traversal patterns.
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

function zigzagLevelOrder(root) {
  if (!root) return [];

  const result = [];

  const queue = [root];

  let leftToRight = true;

  while (queue.length) {
    const size = queue.length;

    const level = [];

    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      level.push(node.val);

      if (node.left) queue.push(node.left);

      if (node.right) queue.push(node.right);
    }

    if (!leftToRight) {
      level.reverse();
    }

    result.push(level);

    leftToRight = !leftToRight;
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
console.log(zigzagLevelOrder(root)); // [ [3], [20,9], [15,7] ]
