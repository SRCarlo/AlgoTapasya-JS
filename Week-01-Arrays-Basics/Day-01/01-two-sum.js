/*
 * Name: Two Sum
 *
 * Approach: Hash Map (Single Pass)
 *
 * Input: nums = [2,7,11,15], target = 9
 *
 * Output: [0,1]
 *
 * Explanation:
 * We store each number in a map and check if its complement exists.
 * If yes, return indices.
 *
 * Algorithm Used: Hashing
 *
 * Key Learning: Use Map for O(1) lookup instead of nested loops
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 */

function twoSum(nums, target) {
  // Edge case: if array is too small
  if (!nums || nums.length < 2) return [];

  const numMap = new Map(); // Stores number -> index

  for (let index = 0; index < nums.length; index++) {
    const currentValue = nums[index];
    const complement = target - currentValue;

    // Check if complement exists
    if (numMap.has(complement)) {
      return [numMap.get(complement), index];
    }

    // Store current value
    numMap.set(currentValue, index);
  }

  return [];
}

// Test Cases
console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3, 3], 6)); // [0,1]
