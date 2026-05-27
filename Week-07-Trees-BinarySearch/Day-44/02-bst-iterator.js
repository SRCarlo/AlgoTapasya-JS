/*
 * Name: BST Iterator
 *
 * Approach: Controlled Inorder Traversal
 *
 * Input: BST traversal requests
 *
 * Output: Sorted BST sequence
 *
 * Explanation: Simulate inorder traversal using stack iteration.
 *
 * Algorithm Used: Stack-based DFS
 *
 * Key Learning: Lazy traversal processing
 *
 * Time Complexity: next(): O(1) amortized
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

class BSTIterator {
  constructor(root) {
    this.stack = [];

    this.pushLeft(root);
  }

  pushLeft(node) {
    while (node !== null) {
      this.stack.push(node);

      node = node.left;
    }
  }

  next() {
    let node = this.stack.pop();

    if (node.right) {
      this.pushLeft(node.right);
    }

    return node.value;
  }

  hasNext() {
    return this.stack.length > 0;
  }
}

// Create BST
let root = new TreeNode(7);

root.left = new TreeNode(3);

root.right = new TreeNode(15);

root.right.left = new TreeNode(9);

root.right.right = new TreeNode(20);

// Iterator
const iterator = new BSTIterator(root);

// Output
console.log(iterator.next()); // 3
console.log(iterator.next()); // 7
console.log(iterator.hasNext()); // true
