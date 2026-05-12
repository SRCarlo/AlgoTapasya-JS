/*
 * Name: Fibonacci Number
 *
 * Approach: Simple Recursion
 *
 * Input: n = 6
 *
 * Output: 8
 *
 * Explanation: fib(n) = fib(n-1) + fib(n-2)
 *
 * Algorithm Used: Recursion
 *
 * Key Learning: Base case + recursive breakdown
 *
 * Time Complexity: O(2^n)
 *
 * Space Complexity: O(n)
 */

function fibonacci(n) {
  // Base cases
  if (n <= 1) {
    return n;
  }

  // Recursive relation
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Test Cases
console.log(fibonacci(6)); // 8
console.log(fibonacci(4)); // 3
console.log(fibonacci(0)); // 0
