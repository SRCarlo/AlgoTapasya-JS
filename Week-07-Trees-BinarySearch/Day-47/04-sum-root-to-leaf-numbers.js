/*
 * Name: Sum Root to Leaf Numbers
 *
 * Approach: Build numbers while traversing root-to-leaf paths.
 *
 * Input:
 *      1
 *     / \
 *    2   3
 *
 * Output: 25
 *
 * Explanation: 12 + 13 = 25
 *
 * Algorithm Used: DFS Recursion
 *
 * Key Learning: Path accumulation technique.
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

function sumNumbers(root) {
  function dfs(node, current) {
    if (!node) {
      return 0;
    }

    current = current * 10 + node.val;

    if (!node.left && !node.right) {
      return current;
    }

    return dfs(node.left, current) + dfs(node.right, current);
  }

  return dfs(root, 0);
}

// Input
const root = new TreeNode(1);

root.left = new TreeNode(2);
root.right = new TreeNode(3);

// Output
console.log(sumNumbers(root)); // 25
