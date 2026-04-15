/*
 * Name: Find Pivot Index
 *
 * Approach: Prefix Sum
 *
 * Input: nums = [1,7,3,6,5,6]
 *
 * Output: 3
 *
 * Explanation:
 * Left sum equals right sum at index 3
 *
 * Algorithm Used: Prefix Sum
 *
 * Key Learning: Use total sum to optimize
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 */

function pivotIndex(nums) {
  let totalSum = nums.reduce((sum, num) => sum + num, 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    let rightSum = totalSum - leftSum - nums[i];

    if (leftSum === rightSum) return i;

    leftSum += nums[i];
  }

  return -1;
}

// Test Cases
console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3
console.log(pivotIndex([1, 2, 3])); // -1
