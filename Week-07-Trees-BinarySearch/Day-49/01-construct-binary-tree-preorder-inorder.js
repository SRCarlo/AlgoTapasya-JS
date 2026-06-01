/*
 * Name: Construct Binary Tree from Preorder and Inorder Traversal
 *
 * Approach:
 * First element of preorder is root.
 * Find root in inorder array.
 * Recursively build left and right subtrees.
 *
 * Input:
 * preorder = [3,9,20,15,7]
 * inorder = [9,3,15,20,7]
 *
 * Output: [3,9,20,null,null,15,7]
 *
 * Explanation: Construct tree using traversal properties.
 *
 * Algorithm Used: Divide and Conquer
 *
 * Key Learning: Tree construction from traversals.
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function buildTree(preorder, inorder) {
  if (!preorder.length || !inorder.length) {
    return null;
  }

  const rootValue = preorder[0];

  const root = new TreeNode(rootValue);

  const mid = inorder.indexOf(rootValue);

  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));

  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

  return root;
}

// Input
const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];

// Output
console.log(buildTree(preorder, inorder));

/*
Output: Binary Tree Root Node

TreeNode {
  val: 3,
  left: TreeNode { val: 9, left: null, right: null },
  right: TreeNode {
    val: 20,
    left: TreeNode { val: 15, left: null, right: null },
    right: TreeNode { val: 7, left: null, right: null }
  }
}
  
*/
