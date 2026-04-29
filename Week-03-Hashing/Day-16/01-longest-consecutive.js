/*
 *
 * Name: Longest Consecutive Sequence
 *
 * Approach: HashSet
 *
 * Input: [100,4,200,1,3,2]
 *
 * Output: 4
 *
 * Explanation:
 * Start counting only when num-1 not present
 *
 * Algorithm Used: HashSet
 *
 * Key Learning: Sequence start detection
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 *
 */

function longestConsecutive(nums) {
  let set = new Set(nums);
  let maxLength = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let current = num;
      let length = 1;

      while (set.has(current + 1)) {
        current++;
        length++;
      }

      maxLength = Math.max(maxLength, length);
    }
  }

  return maxLength;
}

// Test Cases
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
