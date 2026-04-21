/*
 * Name: Valid Palindrome
 *
 * Approach: Two Pointer
 *
 * Input: s = "A man, a plan, a canal: Panama"
 *
 * Output: true
 *
 * Explanation:
 * Ignore non-alphanumeric, compare lowercase
 *
 * Algorithm Used: Two Pointer
 *
 * Key Learning: Clean input before processing
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 */

function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !/[a-z0-9]/i.test(s[left])) left++;
    while (left < right && !/[a-z0-9]/i.test(s[right])) right--;

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

// Test Cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
