/*
 * Name: Intersection of Two Arrays
 *
 * Approach: Set
 *
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 *
 * Output: [2]
 *
 * Explanation:
 * Use set to store unique elements
 *
 * Algorithm Used: HashSet
 *
 * Key Learning: Unique filtering
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 *
 */

function intersection(nums1, nums2) {
  let set1 = new Set(nums1);
  let result = new Set();

  for (let num of nums2) {
    if (set1.has(num)) {
      result.add(num);
    }
  }

  return Array.from(result);
}

// Test Cases
console.log(intersection([1, 2, 2, 1], [2, 2])); // [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // [4,9]
