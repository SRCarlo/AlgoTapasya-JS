/*
 * Name: Search in a Binary Search Tree
 *
 * Approach: Recursive BST Search
 *
 * Input:
 *        4
 *      /   \
 *     2     7
 *    / \
 *   1   3
 *
 * Search Value: 2
 *
 * Output: Subtree rooted at 2
 *
 * Explanation: Use BST property to search efficiently.
 *
 * Algorithm Used: Binary Search Tree Traversal
 *
 * Key Learning: Ordered tree search
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

function searchBST(root, value) {
  if (root === null || root.value === value) {
    return root;
  }

  if (value < root.value) {
    return searchBST(root.left, value);
  }

  return searchBST(root.right, value);
}

// Create BST
let root = new TreeNode(4);

root.left = new TreeNode(2);

root.right = new TreeNode(7);

root.left.left = new TreeNode(1);

root.left.right = new TreeNode(3);

// Search node
let result = searchBST(root, 2);

// Output
console.log(JSON.stringify(result, null, 2));

/*
Input:
Search = 2

Output:
Subtree rooted at 2


{
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
}
  
*/
