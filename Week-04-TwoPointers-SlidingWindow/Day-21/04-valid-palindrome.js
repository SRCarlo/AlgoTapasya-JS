/*
 * Name: Valid Palindrome
 *
 * Approach: Two Pointers
 *
 * Input: "A man, a plan, a canal: Panama"
 *
 * Output: true
 *
 * Explanation:
 * Ignore non-alphanumeric and compare
 *
 * Algorithm Used: Two Pointers
 *
 * Key Learning: String normalization
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 */

function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphaNum(s[left])) left++;
    while (left < right && !isAlphaNum(s[right])) right--;

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

function isAlphaNum(char) {
  return /^[a-z0-9]$/i.test(char);
}

// Test Cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
