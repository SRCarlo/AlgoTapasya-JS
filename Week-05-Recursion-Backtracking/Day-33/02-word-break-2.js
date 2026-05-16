/*
 * Name: Word Break II
 * Approach: DFS Backtracking
 *
 * Input: String + dictionary
 *
 * Output: All valid sentences
 *
 * Explanation: Split string recursively using dictionary words.
 *
 * Algorithm Used: DFS + Backtracking
 *
 * Key Learning: Recursive partition generation
 *
 * Time Complexity: Exponential
 *
 * Space Complexity:O(n)
 */

function wordBreak(s, wordDict) {
  const dictionary = new Set(wordDict);

  const result = [];

  function dfs(start, sentence) {
    // Entire string processed
    if (start === s.length) {
      result.push(sentence.join(" "));

      return;
    }

    for (let end = start + 1; end <= s.length; end++) {
      const word = s.substring(start, end);

      // Skip invalid word
      if (!dictionary.has(word)) {
        continue;
      }

      // Choose
      sentence.push(word);

      // Explore
      dfs(end, sentence);

      // Undo
      sentence.pop();
    }
  }

  dfs(0, []);

  return result;
}

// Test Case
console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"])); // [ 'cat sand dog', 'cats and dog' ]
