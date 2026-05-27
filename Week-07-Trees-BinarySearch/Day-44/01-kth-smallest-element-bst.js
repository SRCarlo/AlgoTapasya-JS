/*
 * Name: Kth Smallest Element in BST
 *
 * Approach: Inorder Traversal
 *
 * Input:
 *        3
 *      /   \
 *     1     4
 *      \
 *       2
 *
 * k = 1
 *
 * Output: 1
 *
 * Explanation: Inorder traversal of BST gives sorted sequence.
 *
 * Algorithm Used: DFS Inorder Traversal
 *
 * Key Learning: Ordered BST traversal
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

function kthSmallest(root, k) {
  let count = 0;

  let answer = null;

  function inorder(node) {
    if (node === null || answer !== null) {
      return;
    }

    inorder(node.left);

    count++;

    if (count === k) {
      answer = node.value;

      return;
    }

    inorder(node.right);
  }

  inorder(root);

  return answer;
}

// Create BST
let root = new TreeNode(3);

root.left = new TreeNode(1);

root.right = new TreeNode(4);

root.left.right = new TreeNode(2);

// Output
console.log(kthSmallest(root, 1)); // 1
