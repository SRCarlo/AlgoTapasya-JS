/*
 * Name: Reverse String
 *
 * Approach: Two Pointer
 *
 * Input: ["h","e","l","l","o"]
 *
 * Output: ["o","l","l","e","h"]
 *
 * Explanation:
 * Swap characters from both ends
 *
 * Algorithm Used: Two Pointer
 *
 * Key Learning: In-place reversal
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 */

function reverseString(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
}

// Test Cases
console.log(reverseString(["h", "e", "l", "l", "o"])); //[ 'o', 'l', 'l', 'e', 'h' ]
console.log(reverseString(["H", "a", "n", "n", "a", "h"])); //[ 'h', 'a', 'n', 'n', 'a', 'H' ]
