/*
 * Name: Majority Element
 *
 * Approach: Boyer-Moore Voting Algorithm
 *
 * Input: [3,2,3]
 *
 * Output: 3
 *
 * Explanation:
 * Track candidate and count
 *
 * Algorithm Used: Greedy
 *
 * Key Learning: Cancel-out technique
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 *
 */

function majorityElement(nums) {
  let count = 0;
  let candidate = null;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += num === candidate ? 1 : -1;
  }

  return candidate;
}

// Test Cases
console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
