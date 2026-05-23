/*
 * Name: Number of Recent Calls
 *
 * Approach: Queue Window
 *
 * Input:
 * ping(1)
 * ping(100)
 * ping(3001)
 * ping(3002)
 *
 * Output: 1, 2, 3, 3
 *
 * Explanation: Count requests within last 3000 milliseconds.
 *
 * Algorithm Used: Queue Sliding Window
 *
 * Key Learning: Dynamic queue shrinking
 *
 * Time Complexity: O(1) amortized
 *
 * Space Complexity: O(n)
 */

class RecentCounter {
  constructor() {
    this.queue = [];
  }

  ping(time) {
    this.queue.push(time);

    // Remove old calls
    while (this.queue[0] < time - 3000) {
      this.queue.shift();
    }

    return this.queue.length;
  }
}

// Test Case
const recentCounter = new RecentCounter();

console.log(recentCounter.ping(1)); // 1
console.log(recentCounter.ping(100)); // 2
console.log(recentCounter.ping(3001)); // 3
console.log(recentCounter.ping(3002)); // 3
