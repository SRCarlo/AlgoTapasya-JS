/*
 * Name: Binary Tree Level Order Traversal
 *
 * Approach: Breadth First Search
 *
 * Input:
 *        3
 *      /   \
 *     9     20
 *          /  \
 *         15   7
 *
 * Output: [[3],[9,20],[15,7]]
 *
 * Explanation: Traverse level by level.
 *
 * Algorithm Used: BFS Queue Traversal
 *
 * Key Learning: Queue-based tree processing
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 */

class TreeNode {
  constructor(value) {
    this.value = value;

    this.left = null;

    this.right = null;
  }
}

function levelOrder(root) {
  if (root === null) {
    return [];
  }

  const result = [];

  const queue = [root];

  while (queue.length > 0) {
    let size = queue.length;

    let level = [];

    for (let i = 0; i < size; i++) {
      let node = queue.shift();

      level.push(node.value);

      if (node.left !== null) {
        queue.push(node.left);
      }

      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    result.push(level);
  }

  return result;
}

// Create Tree
let root = new TreeNode(3);

root.left = new TreeNode(9);

root.right = new TreeNode(20);

root.right.left = new TreeNode(15);

root.right.right = new TreeNode(7);

// Output
console.log(levelOrder(root)); // [[3],[9,20],[15,7]]


