/*
 * Name: Word Ladder
 *
 * Approach: Use BFS to transform one word at a time until target is reached.
 *
 * Input:
 * beginWord = "hit"
 * endWord = "cog"
 * wordList = ["hot","dot","dog","lot","log","cog"]
 *
 * Output: 5
 *
 * Explanation: hit → hot → dot → dog → cog
 *
 * Algorithm Used: BFS
 *
 * Key Learning: Graph can be built dynamically.
 *
 * Time Complexity: O(N × L × 26)
 *
 * Space Complexity: O(N)
 */

function ladderLength(beginWord, endWord, wordList) {
  const words = new Set(wordList);

  const queue = [[beginWord, 1]];

  while (queue.length) {
    const [word, steps] = queue.shift();

    if (word === endWord) {
      return steps;
    }

    for (let i = 0; i < word.length; i++) {
      for (let ch = 97; ch <= 122; ch++) {
        const next =
          word.slice(0, i) + String.fromCharCode(ch) + word.slice(i + 1);

        if (words.has(next)) {
          words.delete(next);

          queue.push([next, steps + 1]);
        }
      }
    }
  }

  return 0;
}

// Input
console.log(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]),
); // 5
