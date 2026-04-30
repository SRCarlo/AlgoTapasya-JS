/*
 * Name: Find All Duplicates in an Array
 *
 * Approach: Index Marking
 *
 * Input: [4,3,2,7,8,2,3,1]
 *
 * Output: [2,3]
 *
 * Explanation:
 * Mark visited index negative
 *
 * Algorithm Used: Array Manipulation
 *
 * Key Learning: In-place hashing
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 */

function findDuplicates(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;

    if (nums[index] < 0) {
      result.push(index + 1);
    } else {
      nums[index] = -nums[index];
    }
  }

  return result;
}

// Test Cases
console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // [2,3]
console.log(findDuplicates([1, 1, 2])); // [1]
