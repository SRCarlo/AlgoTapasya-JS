/*
 * Name: Invert Binary Tree
 *
 * Approach: Recursive Swapping
 *
 * Input:
 *        4
 *      /   \
 *     2     7
 *    / \   / \
 *   1   3 6   9
 *
 * Output:
 *        4
 *      /   \
 *     7     2
 *    / \   / \
 *   9   6 3   1
 *
 * Explanation: Swap left and right subtree recursively.
 *
 * Algorithm Used: DFS Recursion
 *
 * Key Learning: Tree transformation
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

function invertTree(root) {
  if (root === null) {
    return null;
  }

  // Swap children
  let temp = root.left;

  root.left = root.right;

  root.right = temp;

  invertTree(root.left);

  invertTree(root.right);

  return root;
}

// Create Tree
let root = new TreeNode(4);

root.left = new TreeNode(2);

root.right = new TreeNode(7);

root.left.left = new TreeNode(1);

root.left.right = new TreeNode(3);

root.right.left = new TreeNode(6);

root.right.right = new TreeNode(9);

// Invert Tree
invertTree(root);

// Output
console.log(JSON.stringify(root, null, 2));

//        4
//      /   \
//     7     2
//    / \   / \
//   9   6 3   1
