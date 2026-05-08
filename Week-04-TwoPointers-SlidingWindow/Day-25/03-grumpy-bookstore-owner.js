/*
 * Name: Grumpy Bookstore Owner
 *
 * Approach: Sliding Window
 *
 * Input: customers[], grumpy[], minutes
 *
 * Output: 16
 *
 * Explanation:
 * Maximize additional satisfied customers
 *
 * Algorithm Used: Sliding Window
 *
 * Key Learning: Gain optimization
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 */

function maxSatisfied(customers, grumpy, minutes) {
  let satisfied = 0;

  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] === 0) {
      satisfied += customers[i];
    }
  }

  let extra = 0;

  for (let i = 0; i < minutes; i++) {
    if (grumpy[i] === 1) {
      extra += customers[i];
    }
  }

  let maxExtra = extra;

  for (let i = minutes; i < customers.length; i++) {
    if (grumpy[i] === 1) {
      extra += customers[i];
    }

    if (grumpy[i - minutes] === 1) {
      extra -= customers[i - minutes];
    }

    maxExtra = Math.max(maxExtra, extra);
  }

  return satisfied + maxExtra;
}

// Test Cases
console.log(
  maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3),
); // 16
