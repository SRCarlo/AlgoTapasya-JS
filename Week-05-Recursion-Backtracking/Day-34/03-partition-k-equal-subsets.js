/*
 * Name: Partition to K Equal Sum Subsets
 *
 * Approach: Backtracking
 *
 * Input: nums array + k
 *
 * Output: true / false
 *
 * Explanation: Divide array into k equal subsets.
 *
 * Algorithm Used: Backtracking
 *
 * Key Learning: Recursive bucket partitioning
 *
 * Time Complexity: Exponential
 *
 * Space Complexity: O(n)
 */

function canPartitionKSubsets(nums, k) {
  const total = nums.reduce((sum, value) => sum + value, 0);

  // Impossible partition
  if (total % k !== 0) {
    return false;
  }

  const target = total / k;

  const buckets = Array(k).fill(0);

  nums.sort((a, b) => b - a);

  function backtrack(index) {
    // All numbers placed
    if (index === nums.length) {
      return true;
    }

    const current = nums[index];

    for (let bucket = 0; bucket < k; bucket++) {
      // Skip overflow
      if (buckets[bucket] + current > target) {
        continue;
      }

      // Choose
      buckets[bucket] += current;

      // Explore
      if (backtrack(index + 1)) {
        return true;
      }

      // Undo
      buckets[bucket] -= current;
    }

    return false;
  }

  return backtrack(0);
}

// Test Cases
console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4)); // true
