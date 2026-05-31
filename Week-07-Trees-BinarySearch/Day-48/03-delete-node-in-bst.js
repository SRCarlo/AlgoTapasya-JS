/*
 * Name: Delete Node in BST
 *
 * Approach:
 * Find target node.
 * Replace with inorder successor.
 *
 * Input:
 * BST = [5,3,6,2,4,null,7]
 * key = 3
 *
 * Output: BST after deletion
 *
 * Explanation: Delete node and maintain BST.
 *
 * Algorithm Used: BST Deletion
 *
 * Key Learning: Node replacement strategy.
 *
 * Time Complexity: O(h)
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

function deleteNode(root, key) {
  if (!root) return null;

  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    if (!root.left) return root.right;

    if (!root.right) return root.left;

    let successor = root.right;

    while (successor.left) {
      successor = successor.left;
    }

    root.val = successor.val;

    root.right = deleteNode(root.right, successor.val);
  }

  return root;
}

function inorder(root) {
  if (!root) return;

  inorder(root.left);

  process.stdout.write(root.val + " ");

  inorder(root.right);
}

// Input
const root = new TreeNode(5);

root.left = new TreeNode(3);
root.right = new TreeNode(6);

root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);

root.right.right = new TreeNode(7);

deleteNode(root, 3);

// Output
inorder(root); // 2 4 5 6 7
