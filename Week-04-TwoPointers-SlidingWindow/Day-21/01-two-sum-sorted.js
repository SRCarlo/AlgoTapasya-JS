/*
 * Name: Two Sum II (Sorted Array)
 *
 * Approach: Two Pointers
 *
 * Input: [2,7,11,15], target = 9
 *
 * Output: [1,2]
 *
 * Explanation:
 * Move pointers based on sum comparison
 *
 * Algorithm Used: Two Pointers
 *
 * Key Learning: Sorted array advantage
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 */

function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}

// Test Cases
console.log(twoSum([2, 7, 11, 15], 9)); // [1,2]
console.log(twoSum([1, 2, 3, 4, 4, 9], 8)); // [4,5]
