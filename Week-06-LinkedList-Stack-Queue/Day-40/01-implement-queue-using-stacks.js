/*
 * Name: Implement Queue Using Stacks
 *
 * Approach: Two Stack Simulation
 *
 * Input:
 * push(1)
 * push(2)
 * pop()
 *
 * Output: 1
 *
 * Explanation: Simulate queue behavior using two stacks.
 *
 * Algorithm Used: Stack Transfer Technique
 *
 * Key Learning: FIFO using LIFO
 *
 * Time Complexity:
 * Push: O(1)
 * Pop: Amortized O(1)
 *
 * Space Complexity: O(n)
 */

class MyQueue {
  constructor() {
    this.input = [];

    this.output = [];
  }

  push(value) {
    this.input.push(value);
  }

  pop() {
    this.moveData();

    return this.output.pop();
  }

  peek() {
    this.moveData();

    return this.output[this.output.length - 1];
  }

  empty() {
    return this.input.length === 0 && this.output.length === 0;
  }

  moveData() {
    if (this.output.length === 0) {
      while (this.input.length > 0) {
        this.output.push(this.input.pop());
      }
    }
  }
}

// Test Case
const queue = new MyQueue();

queue.push(1);
queue.push(2);

console.log(queue.peek()); // 1
console.log(queue.pop()); // 1
console.log(queue.empty()); // false
