/*
 * Name: Binary Tree Paths
 *
 * Approach: Use DFS traversal.
 * Store every root-to-leaf path.
 *
 * Input:
 *      1
 *     / \
 *    2   3
 *     \
 *      5
 *
 * Output:
 * [
 *   "1->2->5",
 *   "1->3"
 * ]
 *
 * Explanation: Collect all root-to-leaf paths.
 *
 * Algorithm Used: DFS + Backtracking
 *
 * Key Learning: Path building during traversal.
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

function binaryTreePaths(root) {
  const result = [];

  function dfs(node, path) {
    if (!node) {
      return;
    }

    path += node.val;

    if (!node.left && !node.right) {
      result.push(path);

      return;
    }

    path += "->";

    dfs(node.left, path);

    dfs(node.right, path);
  }

  dfs(root, "");

  return result;
}

// Input
const root = new TreeNode(1);

root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.right = new TreeNode(5);

// Output
console.log(binaryTreePaths(root)); // [ '1->2->5', '1->3' ]
