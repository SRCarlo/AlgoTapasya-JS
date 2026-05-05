/*
 * Name: Remove Element
 *
 * Approach: Two Pointers
 *
 * Input: [3,2,2,3], val = 3
 *
 * Output: 2
 *
 * Explanation:
 * Move valid elements forward
 *
 * Algorithm Used: Two Pointers
 *
 * Key Learning: In-place filtering
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 */

function removeElement(nums, val) {
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[index++] = nums[i];
    }
  }

  return index;
}

// Test Cases
let arr = [3, 2, 2, 3];
console.log(removeElement(arr, 3), arr); // 2  [ 2, 2, 2, 3 ]

let arr2 = [0, 1, 2, 2, 3, 0, 4, 2];
console.log(removeElement(arr2, 2), arr2); // 5 [ 0, 1, 3, 0, 4, 0, 4, 2]
