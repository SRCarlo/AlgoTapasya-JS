/*
 * Name: Palindrome Partitioning
 *
 * Approach: Backtracking
 *
 * Input: "aab"
 *
 * Output: All palindrome partitions
 *
 * Explanation:
 * Split string recursively using valid palindromes
 *
 * Algorithm Used: Backtracking
 *
 * Key Learning: Recursive partition exploration
 *
 * Time Complexity: Exponential
 *
 * Space Complexity: O(n)
 */

function partition(s) {
  const result = [];

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

  function backtrack(start, currentPartition) {
    // Full partition formed
    if (start === s.length) {
      result.push([...currentPartition]);
      return;
    }

    for (let end = start; end < s.length; end++) {
      if (!isPalindrome(start, end)) {
        continue;
      }

      // Choose
      currentPartition.push(s.substring(start, end + 1));

      // Explore
      backtrack(end + 1, currentPartition);

      // Undo
      currentPartition.pop();
    }
  }

  backtrack(0, []);

  return result;
}

// Test Cases
console.log(partition("aab")); // [ [ 'a', 'a', 'b' ], [ 'aa', 'b' ] ]
console.log(partition("efe")); // [ [ 'e', 'f', 'e' ], [ 'efe' ] ]
