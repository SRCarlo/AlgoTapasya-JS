/*
 * Name: Word Search
 *
 * Approach: DFS Backtracking
 *
 * Input: Board + target word
 *
 * Output: true/false
 *
 * Explanation:
 * Explore adjacent cells recursively
 *
 * Algorithm Used: DFS + Backtracking
 *
 * Key Learning: Grid recursion
 *
 * Time Complexity: O(m * n * 4^wordLength)
 *
 * Space Complexity: O(wordLength)
 */

function exist(board, word) {
  const rows = board.length;
  const cols = board[0].length;

  function dfs(row, col, index) {
    // Word completely matched
    if (index === word.length) {
      return true;
    }

    // Invalid state
    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= cols ||
      board[row][col] !== word[index]
    ) {
      return false;
    }

    const current = board[row][col];

    // Mark visited
    board[row][col] = "#";

    const found =
      dfs(row + 1, col, index + 1) ||
      dfs(row - 1, col, index + 1) ||
      dfs(row, col + 1, index + 1) ||
      dfs(row, col - 1, index + 1);

    // Restore state
    board[row][col] = current;

    return found;
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (dfs(row, col, 0)) {
        return true;
      }
    }
  }

  return false;
}

// Test Cases
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED",
  ),
); // true
