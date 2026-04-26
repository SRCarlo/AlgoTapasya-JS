/*
 * Name: String Compression
 *
 * Approach: Two Pointer
 *
 * Input: chars = ["a","a","b","b","c","c","c"]
 *
 * Output: modified array length
 *
 * Explanation:
 * Count consecutive chars and write count
 *
 * Algorithm Used: Two Pointer
 *
 * Key Learning: In-place modification
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 *
 */

function compress(chars) {
  let write = 0;
  let read = 0;

  while (read < chars.length) {
    let char = chars[read];
    let count = 0;

    while (read < chars.length && chars[read] === char) {
      read++;
      count++;
    }

    chars[write++] = char;

    if (count > 1) {
      for (let c of String(count)) {
        chars[write++] = c;
      }
    }
  }

  return write;
}

// Test Cases
let arr = ["a", "a", "b", "b", "c", "c", "c"];
compress(arr);
console.log(arr); // ["a","2","b","2","c","3"]
