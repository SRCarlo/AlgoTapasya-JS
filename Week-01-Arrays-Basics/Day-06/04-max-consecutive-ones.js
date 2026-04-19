/*
 * Name: Maximum Consecutive Ones
 *
 * Approach: Linear Scan
 *
 * Input: nums = [1,1,0,1,1,1]
 *
 * Output: 3
 *
 * Explanation:
 * Count consecutive ones, reset on zero
 *
 * Algorithm Used: Greedy
 *
 * Key Learning: Counter reset pattern
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 *
 */

function findMaxConsecutiveOnes(nums) {
  let maxCount = 0;
  let currentCount = 0;

  for (let num of nums) {
    if (num === 1) {
      currentCount++;
      maxCount = Math.max(maxCount, currentCount);
    } else {
      currentCount = 0;
    }
  }

  return maxCount;
}

// Test Cases
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // 2
