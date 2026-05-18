/*
 * Name: Palindrome Partitioning II
 *
 * Approach: DFS + Memoization
 *
 * Input: String s
 *
 * Output: Minimum cuts needed
 *
 * Explanation: Partition string into palindromes with minimum cuts.
 *
 * Algorithm Used: DFS + Memoization
 *
 * Key Learning: Recursive DP optimization
 *
 * Time Complexity: O(n²)
 *
 * Space Complexity: O(n²)
 */

function minCut(s) {
  const memo = new Map();

  // Check palindrome
  function isPalindrome(left, right) {
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }

      left++;
      right--;
    }

    return true;
  }

  function dfs(start) {
    // Entire string processed
    if (start === s.length) {
      return -1;
    }

    // Memoized state
    if (memo.has(start)) {
      return memo.get(start);
    }

    let minimumCuts = Infinity;

    for (let end = start; end < s.length; end++) {
      // Valid palindrome
      if (isPalindrome(start, end)) {
        minimumCuts = Math.min(minimumCuts, 1 + dfs(end + 1));
      }
    }

    memo.set(start, minimumCuts);

    return minimumCuts;
  }

  return dfs(0);
}

// Test Cases
console.log(minCut("aab")); // 1
console.log(minCut("a")); // 0
