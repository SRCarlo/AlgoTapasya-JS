/**
 * Name: Insert into a Binary Search Tree
 *
 * Approach: Recursive Insertion
 *
 * Input: Insert 5 into BST
 *
 * Output: BST after insertion
 *
 * Explanation: Insert node while preserving BST rules.
 *
 * Algorithm Used: Recursive BST Insertion
 *
 * Key Learning: Ordered node placement
 *
 * Time Complexity: O(h)
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

function insertIntoBST(root, value) {
  if (root === null) {
    return new TreeNode(value);
  }

  if (value < root.value) {
    root.left = insertIntoBST(root.left, value);
  } else {
    root.right = insertIntoBST(root.right, value);
  }

  return root;
}

// Create BST
let root = new TreeNode(4);

root.left = new TreeNode(2);

root.right = new TreeNode(7);

root.left.left = new TreeNode(1);

root.left.right = new TreeNode(3);

// Insert node
insertIntoBST(root, 5);

// Output
console.log(JSON.stringify(root, null, 2));

/*
Input:
Insert 5

Output:
{
  "value": 4,
  "left": {
    "value": 2,
    "left": {
      "value": 1,
      "left": null,
      "right": null
    },
    "right": {
      "value": 3,
      "left": null,
      "right": null
    }
  },
  "right": {
    "value": 7,
    "left": {
      "value": 5,
      "left": null,
      "right": null
    },
    "right": null
  }
}
*/
