/*
 * Name: Beautiful Arrangement
 *
 * Approach: Backtracking
 *
 * Input: n = 2
 *
 * Output: 2
 *
 * Explanation: Count permutations where:
 * number % position == 0
 * OR
 * position % number == 0
 *
 * Algorithm Used: Backtracking
 *
 * Key Learning: Constraint permutation recursion
 *
 * Time Complexity: (n!)
 *
 * Space Complexity: O(n)
 */

function countArrangement(n) {
  let total = 0;

  const used = Array(n + 1).fill(false);

  function backtrack(position) {
    // Valid arrangement formed
    if (position > n) {
      total++;
      return;
    }

    for (let number = 1; number <= n; number++) {
      // Skip used numbers
      if (used[number]) {
        continue;
      }

      // Constraint validation
      if (number % position !== 0 && position % number !== 0) {
        continue;
      }

      // Choose
      used[number] = true;

      // Explore
      backtrack(position + 1);

      // Undo
      used[number] = false;
    }
  }

  backtrack(1);

  return total;
}

// Test Cases
console.log(countArrangement(2)); // 2
console.log(countArrangement(3)); // 3
