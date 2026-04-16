/*
 * Name: Remove Duplicates from Sorted Array
 *
 * Approach: Two Pointer (In-place)
 *
 * Input: nums = [1,1,2]
 *
 * Output: 2
 *
 * Explanation:
 * Keep unique elements at front using slow pointer
 *
 * Algorithm Used: Two Pointer
 *
 * Key Learning: In-place overwrite pattern
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 */

function removeDuplicates(nums) {
  if (!nums || nums.length === 0) return 0;

  let uniqueIndex = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[uniqueIndex]) {
      uniqueIndex++;
      nums[uniqueIndex] = nums[i];
    }
  }

  return uniqueIndex + 1;
}

// Test Cases
console.log(removeDuplicates([1, 1, 2])); // 2
console.log(removeDuplicates([0, 0, 1, 1, 2])); // 3
