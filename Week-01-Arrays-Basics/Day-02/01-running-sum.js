/*
 * Name: Running Sum of 1D Array

 * Approach: Prefix Sum (In-place)

 * Input: nums = [1,2,3,4]

 * Output: [1,3,6,10]

 * Explanation:
 * Each element becomes sum of itself + previous element
 * 
 * Algorithm Used: Prefix Sum
 * 
 * Key Learning: Build cumulative results efficiently
 * 
 * Time Complexity: O(n)
 * 
 * Space Complexity: O(1)
 */

function runningSum(nums) {
  if (!nums || nums.length === 0) return [];

  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i] + nums[i - 1];
  }

  return nums;
}

// Test Cases
console.log(runningSum([1, 2, 3, 4])); // [1,3,6,10]
console.log(runningSum([1, 1, 1, 1])); // [1,2,3,4]
