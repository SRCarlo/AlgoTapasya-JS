/*
 * Name: Climbing Stairs
 *
 * Approach: Current step depends on previous two steps.
 *
 * Input: n = 5
 *
 * Output: 8
 *
 * Explanation:
 * Ways:
 * 1+1+1+1+1
 * 1+1+1+2
 * 1+1+2+1
 * ...
 *
 * Algorithm Used: Dynamic Programming
 *
 * Key Learning: DP State Transition
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 */

function climbStairs(n) {
  let prev2 = 1;

  let prev1 = 1;

  for (let i = 2; i <= n; i++) {
    const current = prev1 + prev2;

    prev2 = prev1;

    prev1 = current;
  }

  return prev1;
}

// Input
console.log(climbStairs(5)); // 8
