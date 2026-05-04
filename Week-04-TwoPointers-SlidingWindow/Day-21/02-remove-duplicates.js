/*
 * Name: Remove Duplicates from Sorted Array
 *
 * Approach: Two Pointers
 *
 * Input: [1,1,2]
 *
 * Output: 2
 *
 * Explanation:
 * Slow pointer keeps unique elements
 *
 * Algorithm Used: Two Pointers
 *
 * Key Learning: In-place array update
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 */

function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let slow = 0;

  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }

  return slow + 1;
}

// Test Cases
let arr1 = [1, 1, 2];
console.log(removeDuplicates(arr1), arr1); // 2 [ 1, 2, 2 ]

let arr2 = [0, 0, 1, 1, 2];
console.log(removeDuplicates(arr2), arr2); // 3 [ 0, 1, 2, 1, 2 ]
