/*
 * Name: Same Tree
 *
 * Approach: Recursive Comparison
 *
 * Input:
 * Tree 1:
 *   1
 *  / \
 * 2   3
 *
 * Tree 2:
 *   1
 *  / \
 * 2   3
 *
 * Output: true
 *
 * Explanation: Compare structure and values.
 *
 * Algorithm Used: DFS Recursion
 *
 * Key Learning: Tree traversal comparison
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

function isSameTree(p, q) {
  if (p === null && q === null) {
    return true;
  }

  if (p === null || q === null) {
    return false;
  }

  if (p.value !== q.value) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// Tree 1
let tree1 = new TreeNode(1);

tree1.left = new TreeNode(2);

tree1.right = new TreeNode(3);

// Tree 2
let tree2 = new TreeNode(1);

tree2.left = new TreeNode(2);

tree2.right = new TreeNode(3);

// Output
console.log(isSameTree(tree1, tree2)); // true
