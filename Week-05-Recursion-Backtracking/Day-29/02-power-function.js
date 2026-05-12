/*
 * Name: Power Function
 *
 * Approach: Recursion + Fast Exponentiation
 *
 * Input: x = 2, n = 10
 *
 * Output: 1024
 *
 * Explanation: Divide exponent into halves
 *
 * Algorithm Used: Divide and Conquer
 *
 * Key Learning: Recursive optimization
 *
 * Time Complexity: O(log n)
 *
 * Space Complexity: O(log n)
 */

function myPow(x, n) {
  // Base case
  if (n === 0) {
    return 1;
  }

  // Handle negative exponent
  if (n < 0) {
    return 1 / myPow(x, -n);
  }

  const half = myPow(x, Math.floor(n / 2));

  if (n % 2 === 0) {
    return half * half;
  }

  return x * half * half;
}

// Test Cases
console.log(myPow(2, 10)); // 1024
console.log(myPow(2, -2)); // 0.25
console.log(myPow(3, 3)); // 27
