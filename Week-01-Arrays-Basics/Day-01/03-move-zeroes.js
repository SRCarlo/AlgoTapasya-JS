/*
 * Name: Move Zeroes
 *
 * Approach: Two Pointer (In-place)
 *
 * Input: nums = [0,1,0,3,12]
 *
 * Output: [1,3,12,0,0]
 *
 * Explanation:
 * Move non-zero elements forward and fill remaining positions with zero.
 *
 * Algorithm Used: Two Pointer
 *
 * Key Learning: Maintain order while modifying array in-place
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 */

function moveZeroes(nums) {
  // Edge case
  if (!nums || nums.length === 0) return nums;

  let insertPosition = 0;

  // Move non-zero elements
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPosition] = nums[i];
      insertPosition++;
    }
  }

  // Fill remaining with zero
  while (insertPosition < nums.length) {
    nums[insertPosition] = 0;
    insertPosition++;
  }

  return nums;
}

// Test Cases
console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(moveZeroes([0, 0, 1])); // [1,0,0]
console.log(moveZeroes([1, 2, 3])); // [1,2,3]
