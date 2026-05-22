/*
 * Name: Min Stack
 *
 * Approach: Dual Stack
 *
 * Input:
 * push(-2)
 * push(0)
 * push(-3)
 * getMin()
 *
 * Output: -3
 *
 * Explanation: Maintain minimum values in separate stack.
 *
 * Algorithm Used: Stack
 *
 * Key Learning: Constant-time minimum retrieval
 *
 * Time Complexity: O(1)
 *
 * Space Complexity: O(n)
 */

class MinStack {
  constructor() {
    this.stack = [];

    this.minimumStack = [];
  }

  push(value) {
    this.stack.push(value);

    if (this.minimumStack.length === 0 || value <= this.getMin()) {
      this.minimumStack.push(value);
    }
  }

  pop() {
    const removed = this.stack.pop();

    if (removed === this.getMin()) {
      this.minimumStack.pop();
    }

    return removed;
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minimumStack[this.minimumStack.length - 1];
  }
}

// Test Cases
const minStack = new MinStack();

minStack.push(-2);
minStack.push(0);
minStack.push(-3);

console.log(minStack.getMin()); // -3

minStack.pop();

console.log(minStack.top()); // 0

console.log(minStack.getMin()); // -2
