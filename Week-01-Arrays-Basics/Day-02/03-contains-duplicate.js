/*
 * Name: Contains Duplicate
 *
 * Approach: Hash Set
 *
 * Input: nums = [1,2,3,1]
 *
 * Output: true
 *
 * Explanation:
 * Duplicate 1 exists
 *
 * Algorithm Used: Hashing
 *
 * Key Learning: Set helps detect duplicates quickly
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 */

function containsDuplicate(nums) {
  const seen = new Set();

  for (let num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }

  return false;
}

// Test Cases
console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
