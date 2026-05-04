/*
 * Name: Squares of a Sorted Array
 *
 * Approach: Two Pointers
 *
 * Input: [-4,-1,0,3,10]
 *
 * Output: [0,1,9,16,100]
 *
 * Explanation:
 * Compare absolute values from both ends
 *
 * Algorithm Used: Two Pointers
 *
 * Key Learning: Reverse filling trick
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 */

function sortedSquares(nums) {
  let result = new Array(nums.length);
  let left = 0;
  let right = nums.length - 1;
  let index = nums.length - 1;

  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[index--] = nums[left] * nums[left];
      left++;
    } else {
      result[index--] = nums[right] * nums[right];
      right--;
    }
  }

  return result;
}

// Test Cases
console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0,1,9,16,100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); // [4,9,9,49,121]
