/*
 * Name: Word Search II
 *
 * Approach: DFS Backtracking
 *
 * Input: Board + word list
 *
 * Output: Found words
 *
 * Explanation: Search words recursively inside matrix paths.
 *
 * Algorithm Used: DFS + Backtracking
 *
 * Key Learning:Matrix recursive exploration
 *
 * Time Complexity: Exponential
 *
 * Space Complexity: O(words length)
 */

function findWords(board, words) {
  const rows = board.length;
  const cols = board[0].length;

  const result = new Set();

  function dfs(row, col, word, index) {
    // Word found
    if (index === word.length) {
      result.add(word);
      return;
    }

    // Invalid state
    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= cols ||
      board[row][col] !== word[index]
    ) {
      return;
    }

    const current = board[row][col];

    // Mark visited
    board[row][col] = "#";

    dfs(row + 1, col, word, index + 1);
    dfs(row - 1, col, word, index + 1);
    dfs(row, col + 1, word, index + 1);
    dfs(row, col - 1, word, index + 1);

    // Restore state
    board[row][col] = current;
  }

  for (let word of words) {
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        dfs(row, col, word, 0);
      }
    }
  }

  return [...result];
}

// Test Case
console.log(
  findWords(
    [
      ["o", "a", "a", "n"],
      ["e", "t", "a", "e"],
      ["i", "h", "k", "r"],
      ["i", "f", "l", "v"],
    ],
    ["oath", "pea", "eat", "rain"],
  ),
); // [ 'oath', 'eat' ]
