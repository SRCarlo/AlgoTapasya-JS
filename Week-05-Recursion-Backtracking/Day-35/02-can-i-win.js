/*
 * Name: Can I Win
 *
 * Approach: DFS + Memoization
 *
 * Input: maxChoosableInteger desiredTotal
 *
 * Output: true / false
 *
 * Explanation: Determine whether first player can force a win.
 *
 * Algorithm Used: DFS + Memoization
 *
 * Key Learning: Game state recursion
 *
 * Time Complexity: Exponential
 *
 * Space Complexity: O(2^n)
 */

function canIWin(maxChoosableInteger, desiredTotal) {
  const totalSum = (maxChoosableInteger * (maxChoosableInteger + 1)) / 2;

  // Impossible case
  if (totalSum < desiredTotal) {
    return false;
  }

  const memo = new Map();

  function dfs(usedMask, remaining) {
    // Memoized state
    if (memo.has(usedMask)) {
      return memo.get(usedMask);
    }

    for (let number = 1; number <= maxChoosableInteger; number++) {
      const currentMask = 1 << number;

      // Skip used number
      if (usedMask & currentMask) {
        continue;
      }

      // Winning move
      if (
        number >= remaining ||
        !dfs(usedMask | currentMask, remaining - number)
      ) {
        memo.set(usedMask, true);
        return true;
      }
    }

    memo.set(usedMask, false);

    return false;
  }

  return dfs(0, desiredTotal);
}

// Test Case
console.log(canIWin(10, 11)); // false
