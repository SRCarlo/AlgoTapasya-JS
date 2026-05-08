/*
 * Name: Diet Plan Performance
 *
 * Approach: Fixed Sliding Window
 *
 * Input: calories[], k, lower, upper
 *
 * Output: score
 *
 * Explanation:
 * Compare each window sum with thresholds
 *
 * Algorithm Used: Sliding Window
 *
 * Key Learning: Window scoring pattern
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 */

function dietPlanPerformance(calories, k, lower, upper) {
  let windowSum = 0;
  let score = 0;

  for (let i = 0; i < k; i++) {
    windowSum += calories[i];
  }

  if (windowSum < lower) score--;
  else if (windowSum > upper) score++;

  for (let i = k; i < calories.length; i++) {
    windowSum += calories[i] - calories[i - k];

    if (windowSum < lower) score--;
    else if (windowSum > upper) score++;
  }

  return score;
}

// Test Cases
console.log(dietPlanPerformance([1, 2, 3, 4, 5], 1, 3, 3)); // 0

console.log(dietPlanPerformance([6, 5, 0, 0], 2, 1, 5)); // 0
