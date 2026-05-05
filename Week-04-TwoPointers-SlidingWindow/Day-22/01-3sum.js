/*
 * Name: 3Sum
 *
 * Approach: Sorting + Two Pointers
 *
 * Input: [-1,0,1,2,-1,-4]
 *
 * Output: [[-1,-1,2],[-1,0,1]]
 *
 * Explanation:
 * Fix one element, find pair using two pointers
 *
 * Algorithm Used: Two Pointers
 *
 * Key Learning: Duplicate handling
 *
 * Time Complexity: O(n^2)
 *
 * Space Complexity: O(1)
 */

function threeSum(nums) {
  nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

// Test Cases
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
console.log(threeSum([0, 0, 0])); // [ [ 0, 0, 0 ] ]
