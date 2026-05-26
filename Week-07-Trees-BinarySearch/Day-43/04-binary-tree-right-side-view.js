/*
 * Name: Binary Tree Right Side View
 *
 * Approach: BFS Level Traversal
 *
 * Input:
 *        1
 *      /   \
 *     2     3
 *      \     \
 *       5     4
 *
 * Output: [1,3,4]
 *
 * Explanation: Capture last node of every level.
 *
 * Algorithm Used: BFS Queue Traversal
 *
 * Key Learning: Level-based processing
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

function rightSideView(root) {
  if (root === null) {
    return [];
  }

  const result = [];

  const queue = [root];

  while (queue.length > 0) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let node = queue.shift();

      // Rightmost node
      if (i === size - 1) {
        result.push(node.value);
      }

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  return result;
}

// Create Tree
let root = new TreeNode(1);

root.left = new TreeNode(2);

root.right = new TreeNode(3);

root.left.right = new TreeNode(5);

root.right.right = new TreeNode(4);

// Output
console.log(rightSideView(root)); // [1,3,4]
