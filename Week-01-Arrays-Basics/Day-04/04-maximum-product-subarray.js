/**
 * Name: Maximum Product Subarray
 *
 * Approach: Track max & min
 *
 * Input: [2,3,-2,4]
 *
 * Output: 6
 *
 * Explanation:
 * Negative flips sign → track min also
 *
 * Algorithm Used: Dynamic tracking
 *
 * Key Learning: Handle negatives carefully
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 */

function maxProduct(nums) {
  let maxVal = nums[0];
  let minVal = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let current = nums[i];

    if (current < 0) {
      [maxVal, minVal] = [minVal, maxVal];
    }

    maxVal = Math.max(current, maxVal * current);
    minVal = Math.min(current, minVal * current);

    result = Math.max(result, maxVal);
  }

  return result;
}

// Test Cases
console.log(maxProduct([2, 3, -2, 4])); // 6
console.log(maxProduct([-2, 0, -1])); // 0
