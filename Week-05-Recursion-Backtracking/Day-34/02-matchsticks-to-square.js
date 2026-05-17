/*
 * Name: Matchsticks to Square
 *
 * Approach: Backtracking
 *
 * Input: Matchsticks array
 *
 * Output: true / false
 *
 * Explanation: Try forming 4 equal sides recursively.
 *
 * Algorithm Used: Backtracking
 *
 * Key Learning: Bucket recursion
 *
 * Time Complexity: Exponential
 *
 * Space Complexity: O(n)
 */

function makesquare(matchsticks) {
  const total = matchsticks.reduce((sum, value) => sum + value, 0);

  // Impossible case
  if (total % 4 !== 0) {
    return false;
  }

  const sideLength = total / 4;

  const sides = [0, 0, 0, 0];

  // Sort descending for optimization
  matchsticks.sort((a, b) => b - a);

  function backtrack(index) {
    // All matchsticks placed
    if (index === matchsticks.length) {
      return true;
    }

    const currentStick = matchsticks[index];

    for (let side = 0; side < 4; side++) {
      // Skip invalid side
      if (sides[side] + currentStick > sideLength) {
        continue;
      }

      // Choose
      sides[side] += currentStick;

      // Explore
      if (backtrack(index + 1)) {
        return true;
      }

      // Undo
      sides[side] -= currentStick;
    }

    return false;
  }

  return backtrack(0);
}

// Test Cases
console.log(makesquare([1, 1, 2, 2, 2])); // true
console.log(makesquare([3, 3, 3, 3, 4])); // false
