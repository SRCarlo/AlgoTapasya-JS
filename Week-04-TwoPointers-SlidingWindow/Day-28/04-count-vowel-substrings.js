/*
 * Name: Count Vowel Substrings of a String
 *
 * Approach: Brute Force + Set
 *
 * Input: "aeiouu"
 *
 * Output: 2
 *
 * Explanation:
 * Count substrings containing all vowels
 *
 * Algorithm Used: Nested Traversal
 *
 * Key Learning: Valid substring checking
 *
 * Time Complexity: O(n²)
 *
 * Space Complexity: O(1)
 */

function countVowelSubstrings(word) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  let total = 0;

  for (let start = 0; start < word.length; start++) {
    const currentSet = new Set();

    for (let end = start; end < word.length; end++) {
      if (!vowels.has(word[end])) {
        break;
      }

      currentSet.add(word[end]);

      if (currentSet.size === 5) {
        total++;
      }
    }
  }

  return total;
}

// Test Cases
console.log(countVowelSubstrings("aeiouu")); // 2
console.log(countVowelSubstrings("unicornarihan")); // 0
console.log(countVowelSubstrings("cuaieuouac")); // 7
