/*
 * Name: Encode and Decode Strings
 *
 * Approach: Length Prefix Encoding
 *
 * Input: ["hello","world"]
 *
 * Output: Encoded string + decoded array
 *
 * Explanation:
 * Store length + delimiter + string
 *
 * Algorithm Used: String Encoding
 *
 * Key Learning: Robust serialization
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 */

function encode(strs) {
  let result = "";

  for (let str of strs) {
    result += str.length + "#" + str;
  }

  return result;
}

function decode(s) {
  let result = [];
  let i = 0;

  while (i < s.length) {
    let j = i;

    while (s[j] !== "#") j++;

    let length = parseInt(s.substring(i, j));
    let word = s.substring(j + 1, j + 1 + length);

    result.push(word);
    i = j + 1 + length;
  }

  return result;
}

// Test Cases
let encoded = encode(["hello", "world"]);
console.log(encoded);
console.log(decode(encoded));
