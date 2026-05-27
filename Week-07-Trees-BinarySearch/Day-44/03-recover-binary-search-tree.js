/*
 * Name: Recover Binary Search Tree
 *
 * Approach: Inorder Violation Detection
 *
 * Input: Swapped BST nodes
 *
 * Output: Correct BST
 *
 * Explanation: Detect swapped nodes using inorder traversal.
 *
 * Algorithm Used: DFS Inorder Traversal
 *
 * Key Learning: BST anomaly correction
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

function recoverTree(root) {
  let first = null;

  let second = null;

  let previous = null;

  function inorder(node) {
    if (node === null) {
      return;
    }

    inorder(node.left);

    if (previous !== null && previous.value > node.value) {
      if (first === null) {
        first = previous;
      }

      second = node;
    }

    previous = node;

    inorder(node.right);
  }

  inorder(root);

  // Swap values
  let temp = first.value;

  first.value = second.value;

  second.value = temp;
}

// Create incorrect BST
let root = new TreeNode(3);

root.left = new TreeNode(1);

root.right = new TreeNode(4);

root.right.left = new TreeNode(2);

// Recover tree
recoverTree(root);

// Output
console.log(JSON.stringify(root, null, 2));

/*
Output:
Recovered BST


{
  "value": 2,
  "left": {
    "value": 1,
    "left": null,
    "right": null
  },
  "right": {
    "value": 4,
    "left": {
      "value": 3,
      "left": null,
      "right": null
    },
    "right": null
  }
}
*/
