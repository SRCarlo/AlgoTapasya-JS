/**
 * Name: Minimum XOR Sum of Two Arrays
 *
 * Approach: DFS + Bitmask DP
 *
 * Input: nums1 array
 *        nums2 array
 *
 * Output: Minimum XOR sum
 *
 * Explanation: Pair numbers optimally using recursive DP.
 *
 * Algorithm Used: DFS + Bitmask Memoization
 *
 * Key Learning: State compression optimization
 *
 * Time Complexity: O(n × 2^n)
 *
 * Space Complexity: O(2^n)
 */

function minimumXORSum(nums1, nums2) {
  const memo = new Map();

  function dfs(index, mask) {
    // All elements paired
    if (index === nums1.length) {
      return 0;
    }

    const key = `${index}-${mask}`;

    // Memoized state
    if (memo.has(key)) {
      return memo.get(key);
    }

    let minimum = Infinity;

    for (let position = 0; position < nums2.length; position++) {
      // Skip used element
      if (mask & (1 << position)) {
        continue;
      }

      const xorValue = nums1[index] ^ nums2[position];

      minimum = Math.min(
        minimum,
        xorValue + dfs(index + 1, mask | (1 << position)),
      );
    }

    memo.set(key, minimum);

    return minimum;
  }

  return dfs(0, 0);
}

// Test Case
console.log(minimumXORSum([1, 2], [2, 3])); // 2
