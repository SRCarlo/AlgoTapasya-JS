/*
 * Name: Rotate Array
 *
 * Approach: Reverse Technique
 *
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 *
 * Output: [5,6,7,1,2,3,4]
 *
 * Explanation:
 * Reverse entire array, then reverse first k and remaining
 *
 * Algorithm Used: Array Reversal
 *
 * Key Learning: In-place rotation without extra space
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 * 
 */

function rotate(nums, k) {
  if (!nums || nums.length === 0) return;

  let n = nums.length;
  k = k % n;

  function reverse(start, end) {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }

  reverse(0, n - 1);
  reverse(0, k - 1);
  reverse(k, n - 1);

  return nums;
}

// Test Cases
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); //[5, 6, 7, 1,2, 3, 4]
console.log(rotate([-1, -100, 3, 99], 2)); //[ 3, 99, -1, -100 ]
