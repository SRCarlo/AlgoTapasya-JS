/*
 * Name: House Robber
 *
 * Approach: Choose current house or skip it.
 *
 * Input: [2,7,9,3,1]
 *
 * Output: 12
 *
 * Explanation: Rob houses: 2 + 9 + 1
 *
 * Algorithm Used: Dynamic Programming
 *
 * Key Learning: Pick / Not Pick
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 */

function rob(nums) {
  let prev1 = 0;

  let prev2 = 0;

  for (const money of nums) {
    const current = Math.max(prev1, prev2 + money);

    prev2 = prev1;

    prev1 = current;
  }

  return prev1;
}

// Input
console.log(rob([2, 7, 9, 3, 1])); // 12
