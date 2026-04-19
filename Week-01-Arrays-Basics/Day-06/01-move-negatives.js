/*
 * Name: Move Negative Numbers to Beginning
 *
 * Approach: Two Pointer Partition
 *
 * Input: nums = [1,-2,3,-4,5]
 *
 * Output: [-2,-4,1,3,5]
 *
 * Explanation:
 * Swap negatives to front using partition logic
 * 
 * Algorithm Used: Two Pointer
 * 
 * Key Learning: Partition pattern (like quicksort)
 * 
 * Time Complexity: O(n)
 * 
 * Space Complexity: O(1)
 * 
 */

function moveNegatives(nums) {
  if (!nums || nums.length === 0) return nums;

  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] < 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
  }

  return nums;
}

// Test Cases
console.log(moveNegatives([1, -2, 3, -4, 5])); // [-2,-4,1,3,5]
console.log(moveNegatives([-1, -2, 3])); // [-1,-2,3]
